
function TodoApp(state={todoList:[]},action) {
    switch(action.type) {
        case 'ADD':
        state.todoList = [...state.todoList, {
            complated: false,
            text: action.text,
            id: action.id
        }]
        return {todoList:state.todoList}
        case 'COMPLATE':
        state.todoList = state.todoList.map((todo) => {
            if (todo.id === action.id) {
                return {...todo, complated: !todo.complated}
            }
            return todo
        })
        return {todoList:state.todoList}
        case 'DELETE':
        state.todoList = state.todoList.filter((todo) => todo.id !== action.id)
        return  {todoList:state.todoList}
        default:
        return state
    }
}

export default TodoApp;