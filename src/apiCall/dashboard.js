
// import { AppBar, Drawer, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from 'react';
import { Card, Avatar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DoctorsList from '@material-ui/icons/LocalHospital';
import BeDoctor from '@material-ui/icons/LocalHospitalTwoTone';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
       
        
      }

    
     

     
     
    render() {
    
    
       return (
        <div> 
        <h1>Welcome !</h1>
        <Grid container spacing={24} style={{width:'100%', margin:0}}>
        <Grid item xs={12} sm={3}>
        <Card style={{padding:20}} className="doctorWrapper">
          <DoctorsList style={{fontSize:50,color:'#333333',margin:'auto', display:'block'}}/>
          
          <div style={{fontSize:20,color:'#333333',marginTop:15,textAlign:'center'}}>List of doctors</div>
        </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card style={{padding:20}} className="doctorWrapper">
          
        <BeDoctor style={{fontSize:50,color:'#333333',margin:'auto', display:'block'}}/>
          <div style={{fontSize:20,color:'#333333',marginTop:15,textAlign:'center'}}>Be a Doctor</div>
        </Card>
        </Grid>
        </Grid>
    
    </div>
    );
    }
    }
  export default Dashboard;
