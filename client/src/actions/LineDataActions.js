import axios from 'axios';

export const getLineData = () => async dispatch =>{
    try {
        dispatch({
            type: "DATA_LOADING"
        });

        //get the data
        const res = await axios.get("http://localhost:5000/choice");
        dispatch({
            type:"LOAD_SUCCESS",
            payload:res.data
        })
        
    } catch (error) {
        console.log(error);
        dispatch({
            type:"LOAD_FAILED",
            payload:[]
        })
    }

}