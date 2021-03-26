import React from 'react'
import { AppBar, Toolbar, Typography,makeStyles  } from '@material-ui/core';
import {Link,useLocation} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    nav:{
        backgroundColor: "#C36959",  
    },
   toolbar:{
       display:"flex",
       justifyContent:"space-between"
   },
   link:{
       textDecoration:"none",
       color:"white",
       fontWeight:"bolder"
   },
   item:{
       width: "20%",
       display:"flex",
       flexWrap:"no-wrap",
       justifyContent:"space-between"
   }
  }));

export const Nav = () => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.nav}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" >
                        <Link className={classes.link} to = {"/"} >Polling App</Link>                       
                    </Typography>
                    
                    <div className={classes.item}>
                        { location.pathname !=="/" && <Link className={classes.link} to = {"/"} >Home</Link>}
                        <Link className={classes.link} to = {"/line"} >Line Graph</Link>
                        <Link className={classes.link} to = {"/bar"} >Bar Graph</Link>
                        <Link className={classes.link} to = {"/table"} >Table</Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
