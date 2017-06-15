import {save , get} from "../request.js";

const initState = {
	allData : [],
	boxShow : false
};

const reducer = (state = initState , action) => {
	switch(action.type){
		case "LOAD_SUCCESS":
			return {...state, allData: action.payload}
		case "ADD_LIST":
			return {
				...state,
				allData : [
					...state.allData,
					{
						text : action.text,
						state : false
					}
				]
			};
		case "CHANGE_LIST":
			return {
				allData: state.allData.map(( data , dataIndex ) => {
			        if (dataIndex == action.index) {
			          return {...data, state: !data.state};
			        }
			        return data;
			    }),
				boxShow : false
			};
		case "HIDE_BOX":
			return {
				...state,
				boxShow : false
			};
		case "SAVE_LOCAL_DATA":
			return {...state,boxShow : action.payload}
        default:
			return state;
	}
}

export default reducer;