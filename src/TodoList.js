//借助redux 实现todolist
import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { getInitList, getInputChangeAction,getAddItemAction,getDelItemAction,initListAction} from './store/actionCreator';
// import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM } from './store/actionTypes'
import TodoListUI from './TodoListUI';
// import axios from 'axios'


class TodoList extends Component {
	constructor(props){
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		store.subscribe(this.handleStoreChange);//监听store数据变化执行handleStoreChange
	}

	render(){
		return <TodoListUI inputValue={this.state.inputValue}
				list={this.state.list}
				handleInputChange={this.handleInputChange}
				handleBtnClick={this.handleBtnClick}
				handleItemDelete={this.handleItemDelete}/>
	}
	//模拟异步通信
	componentDidMount(){
		//react 请求不到接口的时候会去public文件下查找
		// axios.get('/list.json').then(res=>{
		// 	const data= res.data
		// 	const action =initListAction(data)
		// 	store.dispatch(action)
		// })

		//redux-thunk 
		// const action = getListData();
		// store.dispatch(action)

		const action = getInitList();
		store.dispatch(action)
		// console.log(action)
	}
	handleInputChange(e){
		//要改变的值
		// const action ={
		// 	type: CHANGE_INPUT_VALUE,
		// 	value: e.target.value
		// }
		const action = getInputChangeAction(e.target.value);
		//传递给store
		store.dispatch(action);
	}
	handleStoreChange(){
		//感知数据变化时调用store.getState() 调用setState替换掉当前的数据 同步stote数据 为最新数据
		this.setState(store.getState());
	}
	handleItemDelete(index){
		// const action={
		// 	type: DELETE_TODO_ITEM,
		// 	index
		// }
		const action = getDelItemAction(index)
		store.dispatch(action)
	}
	handleBtnClick(){
		// const action = {
		// 	type: ADD_TODO_ITEM
		// }
		const action = getAddItemAction();
		store.dispatch(action)
	}
}

export default TodoList;

