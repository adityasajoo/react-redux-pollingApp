const defaultState = {
    loading : false,
    tableData :[]
}

const TableDataReducer = (state=defaultState,action)=>{
    switch(action.type){
        case "TABLE_DATA_LOADING":
            return {
                ...state,
                loading:true
            }
        case "TABLE_LOAD_SUCCESS":
            return{
                ...state,
                loading:false,
                tableData: action.payload
            }
        case "TABLE_LOAD_FAILED":
            return{
                ...state,
                loading:false,
                tableData: action.payload
            }
        default:
            return state;
    }
} 

export default TableDataReducer;
