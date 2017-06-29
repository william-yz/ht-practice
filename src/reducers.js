
function TodoApp(state={todoList:[{text:'aaa'}]},action) {
    switch(action.type) {
        case 'ADD':
        state.todoList = [...state.todoList, {
                complated: false,
                text: action.text,
                id: action.id
            }]
        return {todoList:state.todoList}
        default:
        return state
    }
}

export default TodoApp;