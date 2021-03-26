const defaultState = {
    loading : false,
    data :[]
}

const LineDataReducer = (state=defaultState, action) =>{
    switch(action.type){
        case "DATA_LOADING":
            return {
                ...state,
                loading:true
            }
        case "LOAD_SUCCESS":
            return{
                ...state,
                loading:false,
                data: action.payload
            }
        case "LOAD_FAILED":
            return{
                ...state,
                loading:false
            }
        default:
            return state;
    }
}

export default LineDataReducer;