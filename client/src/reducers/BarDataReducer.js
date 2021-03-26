const defaultState = {
    loading : false,
    barData :[]
}

const BarDataReducer = (state=defaultState,action)=>{
    switch(action.type){
        case "BAR_DATA_LOADING":
            return {
                ...state,
                loading:true
            }
        case "BAR_LOAD_SUCCESS":
            return{
                ...state,
                loading:false,
                barData: action.payload
            }
        case "BAR_LOAD_FAILED":
            return{
                ...state,
                loading:false
            }
        default:
            return state;
    }
} 

export default BarDataReducer;
