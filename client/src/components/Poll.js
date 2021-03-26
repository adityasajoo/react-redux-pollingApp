import DateFnsUtils from '@date-io/date-fns';
import { Button,InputLabel,FormControl,Select, MenuItem, Typography ,makeStyles, CardContent, Card, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Snackbar} from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { React,useState } from 'react';
import { useDispatch } from 'react-redux';
import {getBarData} from '../actions/BarDataActions'
import {getLineData} from '../actions/LineDataActions'
import {getTableData} from '../actions/TableDataActions'
import axios from 'axios';

const useStyles = makeStyles({
    wrapper:{
        display:"flex",
        justifyContent:"center",
        margin: "10px 0"
    },
    root: {
      minWidth: 275,
      maxWidth:275
    },
    btnWrapper : {
        display:"flex",
        justifyContent:"center",
        margin:"15px",
    },
    head:{
        display:"flex",
        justifyContent:"center",
        margin:"0px",
    },
    snack:{
        backgroundColor : "#FF0000"
    },
    myBtn:{
        backgroundColor:"#C36959"
    },
    btnLinks:{
        color: "#C36959"
    }
  });


const Poll = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [name, setName] = useState("")
    const [open, setOpen] = useState(false);
    const [choice,setChoice] = useState("");
    const [selectedDate,setselectedDate] = useState(Date.now)
    const [snackOpen,setSnackOpen] = useState(false);
    const [snackMsg,setSnackMsg] = useState("");
    const handleAdd = () => {
        //Validate
        if(name === "" || (choice!=="yes"&&choice!=="no") ){
            //not valid
            setSnackOpen(true);
            setSnackMsg("Please fill every fields!");
        }else{
            //valid
            axios.post('http://localhost:5000/vote', {
                name :name,
                choice: choice,
                casted_at : selectedDate
              })
              .then(function (response) {
                dispatch(getLineData());
                dispatch(getBarData());
                dispatch(getTableData());
              });
            
            setName("");
            setChoice("");
            setselectedDate(Date.now);
            setOpen(false);
            setSnackOpen(true);
            setSnackMsg("Poll Added succcessfully !!");
        }
    }

    const snackClose = () => {
        setSnackOpen(false);
    }
    return (
        <div className={classes.wrapper}>
            <Snackbar 
                anchorOrigin = {{vertical:"top",horizontal:"right"}}
                open = {snackOpen}
                autoHideDuration={3000}
                onClose = {snackClose}
                message = {<span id="msg" >{snackMsg}</span>}
                
            />

            <Card className={classes.root}>
                <CardContent>
                
                    <Typography variant="h5" component="h2" align="center">
                    Polling Station
                    </Typography>

                    <div className={classes.btnWrapper}>
                    <Button  variant="contained" className={classes.myBtn} onClick={() => setOpen(true) }>Poll</Button>
                    <Dialog open={open} onClose={() => setOpen(false) } aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title" className={classes.head} >Poll</DialogTitle>
                        <DialogContent>
                        <FormControl fullWidth style={{marginTop:"0px"}}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Name"
                                type="text"
                                value={name}
                                onChange={(e)=> setName(e.target.value)}
                                fullWidth
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Choice</InputLabel>
                            <Select 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={choice}
                            onChange={(e) => setChoice(e.target.value)}
                            style={{width: "100%"}}
                            >
                                <MenuItem value={"yes"}>Yes</MenuItem>
                                <MenuItem value={"no"}>No</MenuItem>
                            </Select>

                        </FormControl >
                            
                        <FormControl fullWidth>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value={selectedDate}
                                onChange={(date) => setselectedDate(date)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                />
                            </MuiPickersUtilsProvider> 


                        </FormControl>

                            
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={() => setOpen(false) } className={classes.btnLinks}>
                            Cancel
                        </Button>
                        <Button onClick={handleAdd} color="primary" className={classes.btnLinks}>
                            Add
                        </Button>
                        </DialogActions>
                    </Dialog>
                    </div>
                </CardContent>
                </Card>

               
        </div>
    )
}

export default Poll
