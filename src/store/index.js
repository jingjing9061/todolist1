import { createStore, applyMiddleware} from 'redux';//applyMiddleware 使用redux-thunk
import reducer from './reducer';
// import thunk from 'redux-thunk';//引入中间件
import createSagaMiddleware from 'redux-saga';//引入中间件
import todoSagas from './sagas';

/* 
 * thunk 等中间件可以帮助在 Redux 应用中实现异步性
 * 可以将 thunk 看做 store 的 dispatch() 方法的封装器；我们可以使用 thunk action creator 派遣函数或 Promise，而不是返回 action 对象。
*/

const sagaMiddleware = createSagaMiddleware()

//store将接受的数据转发给reducer
const store = createStore(
	reducer,
	// applyMiddleware(thunk)
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(todoSagas)

export default store;