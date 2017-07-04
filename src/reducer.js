import {save,get} from './request'
import {ADD,COMPLATE,DELETE} from './action'

// const defaultState = get()
// console.log(defaultState)

function TodoApp(state={todoList: []},action) {
    // localStorage.clear()
    switch(action.type) {
        case ADD:
            return {todoList: [...state.todoList, action]}
        case COMPLATE:
            state.todoList = state.todoList.map((todo) => {
                if (todo.id === action.id) {
                    return {...todo, complated: !todo.complated}
                }
                return todo
            })
            return {todoList:state.todoList}
        case DELETE:
            state.todoList = state.todoList.filter((todo) => todo.id !== action.id)
            return  {todoList:state.todoList}
        case 'LOAD-SUCCESS':
            state.todoList = [...state.todoList,...action.data]
            return {todoList:state.todoList}
        default:
            return state
    }
}

export default TodoApp;




















// function TodoApp(state={todoList: []},action) {
//     // localStorage.clear()
//     switch(action.type) {
//         case 'ADD':
//             return {todoList: [...state.todoList, action]}
//         case 'COMPLATE':
//             state.todoList = state.todoList.map((todo) => {
//                 if (todo.id === action.id) {
//                     return {...todo, complated: !todo.complated}
//                 }
//                 return todo
//             })
//             return {todoList:state.todoList}
//         case 'DELETE':
//             state.todoList = state.todoList.filter((todo) => todo.id !== action.id)
//             return  {todoList:state.todoList}
//         default:
//             return state
//     }
// }

// export default TodoApp;