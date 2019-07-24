
// import { AppBar, Drawer, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import Avatar from '@material-ui/core/Avatar';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

class DoctorList extends React.Component{


    constructor(props){
        super(props);
        this.state = {doctorList:[]}; 
    
        this.getDoctorData=this.getDoctorData.bind(this);
      }
      componentDidMount(){
        this.getDoctorData();
    }
      getDoctorData(){
        let self=this;
        axios.get('http://localhost/doctorphp/api.php/doctors')
        .then(function (response) {
        // handle success
        self.setState({doctorList:response.data})        
        console.log(self.state.doctorList.length);
        
        
       
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .finally(function () {
        // always executed
        });
    }  
     
    render() {
    
    
       return (
        <div> 
        <h1>List of Doctors</h1>
        <Grid container spacing={24} style={{width:'100%', margin:0}}>
        {this.state.doctorList.length?
            this.state.doctorList.map(
                (doctor)=>
        <Grid item xs={6} sm={6}>
                <Paper >
              
        <Card className="doctorWrapper">
                <Grid container spacing={24} style={{width:'100%', margin:0}}>
                <Grid item xs={12} sm={3}> <CardHeader
          avatar={
            <Avatar  style={{height:100,width:100}}>
              R
            </Avatar>
          }
        />
        </Grid>
        <Grid item xs={12} sm={7} style={{height:100,width:100}}>
        
        <div style={{fontSize:16,fontWeight:600,color:'#333333',marginTop:15}}>{doctor.name}</div>
        <div style={{fontSize:14,color:'#8c8d90',marginTop:5}}>{doctor.email}</div>
        <div style={{fontSize:14,color:'#8c8d90'}}>{doctor.education}</div>
        <div style={{fontSize:14,color:'#8c8d90'}}>{doctor.experience}</div>
        <div style={{fontSize:14,color:'#8c8d90'}}>{doctor.about}</div>
        
        </Grid>
        </Grid>
         </Card>
        
      
        </Paper>
        </Grid>  
        ):''
      }       
        </Grid>
    </div>
    );
    }
    }
  export default DoctorList;
