import {save} from "../request.js";

const action={
    handleKeyDown : e => {
        return {
            type: "ADD_LIST",
            text: e.target.value
        }
    },
    changeList : index => {
        return {
            type: "CHANGE_LIST",
            index: index
        }

    }
}
export default action;