const action={
    handleKeyDown : e => {
        return {
            type: "ADD_LIST",
            text: e.target.value
        }
    },
    changeList : e => {
        return {
            type: "CHANGE_LIST",
            index: e.target.value
        }
    }
}
export default action;