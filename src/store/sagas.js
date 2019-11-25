import { put,takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import axios from 'axios';
import { initListAction } from './actionCreator';

function* getInitList(){
	try{
		const res = yield axios.get('/list.json');
		const action = initListAction(res.data);//取到res的结果 使用put 派发给store 
		yield put(action);// store传递给 reducer
	}catch(e){
		console.log('网络请求失败')
	}
}

function* mySaga() {
	//接到类型GET_INIT_LIST 执行getInitList
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;