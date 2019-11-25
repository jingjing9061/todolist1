/*
 reducer 接受到store转发的state、action数据 处理后返回给store
 */
import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION } from './actionTypes'

const defaultState ={
	inputValue:'',
	list:[]
}
//reducer 可以接受state 但是不能修改state （所以拿到state 要深拷贝一份进行修改）
//state 存放整个仓库存储的数据 action//用户传来的那句话
export default (state = defaultState, action) => {
	if (action.type === CHANGE_INPUT_VALUE) {
		//改变state里面的值
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState //处理完返回stote
	}
	if (action.type === ADD_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		// console.log(newState)
		return newState;
	}
	if (action.type === DELETE_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1)
		return newState;
	}
	if (action.type ===INIT_LIST_ACTION) {
		// console.log(action.data)
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.data
		return newState;
	}

	return state;
}



