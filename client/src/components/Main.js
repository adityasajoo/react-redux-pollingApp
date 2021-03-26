import React from 'react'
import LineGraph from './LineGraph'
import BarGraph from './BarGraph'
import TableData from './TableData'
import Poll from './Poll'
import { Container } from '@material-ui/core'

const Main = () => {
    return (
            <Container maxWidth="md">
                <Poll />
                <LineGraph />
                <BarGraph />
                <TableData/>
            </Container> 
    )
}


export default Main