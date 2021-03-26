import axios from 'axios';

export const getTableData = () => async dispatch => {
    try{
        dispatch({
            type:"TABLE_LOADING"
        });
        const res = await axios.get("http://localhost:5000/data");
        dispatch({
            type:"TABLE_LOAD_SUCCESS",
            payload: res.data
        });
    }catch(error){
        console.log(error);
        dispatch({
            type:"TABLE_LOAD_FAILED",
            payload:[]
        })
    }

}