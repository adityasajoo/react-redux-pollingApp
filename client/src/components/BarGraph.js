import { Container, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getBarData} from '../actions/BarDataActions';
import { Bar } from 'react-chartjs-2'

const options = {
    title:{
    display:true,
    text:'Number of votes for each date',
    fontSize:12
    },
    legend:{
    display:false,
    position:'right'
    },
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
                labelString:'Choice'
            }
        }],
    }
}


const BarGraph = () => {
     const dispatch = useDispatch();
     const barData = useSelector(state => state.BarData);

     let yesCount = barData.barData.filter(item => item.choice === true).map(item => item.count)
     let NoCount = barData.barData.filter(item => item.choice === false).map(item => item.count)
     const data = {
        labels: ['Yes', 'No'],
        datasets: [
            {
            backgroundColor: ['#9DA7B8','#C36959'],
            borderColor: ['#9DA7B8','#C36959'],
            borderWidth: 1,
            data: [yesCount[0],NoCount[0]]
            }
        ]
    }
    
    const fetchData = () =>{
        dispatch(getBarData());
    }
    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div style={{marginTop:"20px"}}>
            <Container maxWidth="md">
                <Typography variant="h6"  align="center" style={{color:"#C36959"}}>
                    Bar Graph
                </Typography>
                 <Bar
                    data={data}
                    options={options}
                    />
            </Container>
        </div>
     
    )
}

export default BarGraph
