import { take, put, call, select } from 'redux-saga/effects'
import { save,get } from './request'

function* task() {
    yield take('INIT')
    const todoList = yield call(get)
    console.log(todoList.data)
    if(todoList.data && todoList.data.length !== 0){
        yield put({type:'LOAD-SUCCESS',data:todoList.data})
    }
}

function* task1() {
    while(true) {
        const action = yield take('ADD')
        const todoList = yield select((state) => {return state.todoList})
        console.log(todoList)
        const result = yield call(save, todoList) // save(todoList)
    }
}

function* task2() {
    while(true) {
        const action = yield take('COMPLATE')
        const todoList = yield select((state) => {return state.todoList})
        const result = yield call(save, todoList)
    }
}

function* task3() {
    while(true) {
        const action = yield take('DELETE')
        const todoList = yield select((state) => {return state.todoList})
        const result = yield call(save, todoList)
    }
}

export default [task,task1,task2,task3]













// function* task1() {
//     while(true) {
//         const action = yield take('ADD')
//         const todoList = yield select((state) => {return state.todoList})
//         const result = yield call(save, todoList) // save(todoList)
//         console.log(result)
//     }
// }

// function* task2() {
//     while(true) {
//         const action = yield take('COMPLATE')
//         const todoList = yield select((state) => {return state.todoList})
//         const result = yield call(save, todoList)
//         console.log(result)
//     }
// }

// function* task3() {
//     while(true) {
//         const action = yield take('DELETE')
//         const todoList = yield select((state) => {return state.todoList})
//         const result = yield call(save, todoList)
//         console.log(result)
//     }
// }

// export default [task1,task2,task3]