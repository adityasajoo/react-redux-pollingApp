import axios from 'axios';

export const getBarData = () => async dispatch => {
    try{
        dispatch({
            type:"BAR_LOADING"
        });
        const res = await axios.get("http://localhost:5000/result");
        dispatch({
            type:"BAR_LOAD_SUCCESS",
            payload: res.data
        });
    }catch(error){
        console.log(error);
        dispatch({
            type:"BAR_LOAD_FAILED",
            payload:[]
        })
    }

}