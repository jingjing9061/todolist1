// action 统一管理
import {GET_INIT_LIST, CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION } from './actionTypes'
// import axios from 'axios'

export const getInputChangeAction = (value)=>({
	type: CHANGE_INPUT_VALUE,
	value
})

export const getAddItemAction = ()=>({
	type: ADD_TODO_ITEM
})

export const getDelItemAction = (index)=>({
	type: DELETE_TODO_ITEM,
	index
})

export const initListAction = (data)=>({
	type: INIT_LIST_ACTION,
	data
})


export const getInitList = ()=>({
	type: GET_INIT_LIST,
})

//dispatch 能接受store 的方法
// export const getListData=()=>{
// 	return (dispatch)=>{
// 		axios.get('/list.json').then(res=>{
// 			const data= res.data;
// 			const action = initListAction(data);
// 			dispatch(action);
// 		})
// 	}
// }