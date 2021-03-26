import {React,useEffect} from 'react'
import { makeStyles,TableContainer,Table,TableRow,TableCell,TableHead,TableBody,Paper, Container, Typography } from "@material-ui/core";
import { useDispatch,useSelector } from 'react-redux';
import {getTableData} from '../actions/TableDataActions';

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },

    tableHead : {
      backgroundColor: "#C36959",
    },

    fontColor:{
      color: "#FAFAFB",
    }
  });


const TableData = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const tableData = useSelector(state => state.TableData.tableData);


  const fetchData = () =>{
    dispatch(getTableData());
  }
  useEffect(() => {
    fetchData();
  }, [])

    return (
      <div style={{margin:"20px auto",}}>
       <Container maxWidth="md">
            <Typography variant="h6"  align="center" style={{color:"#C36959"}}>
                Table Data
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead className= {classes.tableHead}>
                    <TableRow>
                        <TableCell className={classes.fontColor}  align="center">Name</TableCell>
                        <TableCell align="center" className={classes.fontColor}>Choice</TableCell>
                        <TableCell align="center" className={classes.fontColor}>Casted Date</TableCell>
                     
                    </TableRow>
                    </TableHead>
                    <TableBody>
                  {tableData.map((data)=>(
                    <TableRow key={data.uuid}>
                        <TableCell component="th" scope="row"  align="center">
                           {data.name}
                        </TableCell>
                        <TableCell align="center">{data.choice?"Yes":"No"}</TableCell>
                        <TableCell align="center">{data.casted_at.slice(0,10)}</TableCell>
                        </TableRow>

                  ))
                  }
                    
                    </TableBody>
                </Table>
                </TableContainer>

        </Container>
      </div>
      
    )
}

export default TableData
