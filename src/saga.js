import {put, take, call,takeEvery} from 'redux-saga/effects'
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
    yield takeEvery('SAVE_LIST', function* (data){
        const allData = data.payload;
        const { result } = yield call(save,allData)
        yield put({
            type: 'SAVE_LOCAL_DATA',
            payload: result
        })
    })
}



function* hideBox(){
    yield takeEvery('HIDE_SAVE_BOX', function* (){
        yield put({
            type: 'HIDE_BOX'
        })
    })
}

export default [initTodoList , saveListData, hideBox]