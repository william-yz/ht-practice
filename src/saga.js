import {put, take, call} from 'redux-saga/effects'
import {save, get} from './request'

function* initTodoList() {
    yield take('INIT_TODO_LIST')
    const { result } = yield call(get)
    yield put({
        type: 'LOAD_SUCCESS',
        payload: result
    })
}
function* saveListData() {
    const {payload: allData} = yield take('SAVE_LIST');
    const { result } = yield call(save,allData)
    yield put({
        type: 'SAVE_LOCAL_DATA',
        payload: result
    })
}

function* hideBox(){
    yield take('HIDE_SAVE_BOX');
    yield put({
        type: 'HIDE_BOX'
    })
}

export default [initTodoList , saveListData, hideBox]