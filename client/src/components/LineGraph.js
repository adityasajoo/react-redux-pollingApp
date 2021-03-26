import { CircularProgress, Container, Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import {getLineData} from '../actions/LineDataActions';

const options = {
    title:{
    display:true,
    text:'Number of votes for each date',
    fontSize:12
    },
    legend:{
    display:true,
    position:'right'
    },
    responsive:true,
    maintainAspectRatio:true,
    scales: {
        yAxes: [{
            scaleLabel:{
                display:true,
                labelString:'Count'
            },
            ticks: {
                beginAtZero: true,
                stepSize:1
            }
        }],
        xAxes:[{
            scaleLabel:{
                display:true,
                labelString:'Date'
            }
        }]
    }
}

const LineGraph = () => {
    const dispatch = useDispatch();
    const lineData = useSelector(state => state.LineData);
    const fetchData = () =>{
        dispatch(getLineData());
    }
    useEffect(() => {
        fetchData()
    }, []);

    const data = {
        labels : lineData.data.labelsArray,
        datasets: [{
            label:'Chose Yes',
            fill:false,
            lineTension:0.5,
            backgroundColor: '#9DA7B8',
            borderColor: '#C36959',
            borderWidth: 3,
            data:  lineData.data.formatedYesData
        },{
            label:'Chose No',
            fill:false,
            lineTension:0.5,
            backgroundColor: '#9DA7B8',
            borderColor: '#F2A248',
            borderWidth: 3,
            data: lineData.data.formatedNoData
        }]
    }


    return (
        <div style={{marginTop:"20px"}}>
            <Container maxWidth="md">
                <Typography variant="h6"  align="center" style={{color:"#C36959"}}>
                            Line Data                 
                </Typography>
                {lineData.loading ? 
                    <CircularProgress size={80} />
                    :<Line data={data} options={options} />
                    }
             </Container>
        </div>
        
    )
}

export default LineGraph
