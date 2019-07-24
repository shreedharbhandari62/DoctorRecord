
// import { AppBar, Drawer, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';
class ManageDoctors extends React.Component{
    constructor(props){
        super(props);
        this.state={name:'',email:'',education:'',experience:'',image:'',about:''}
       
        
      }
      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
      handleSubmit =()=>{
          var obj={
              "name":this.state.name,
              "email":this.state.email,
              "education":this.state.education,
              "experience":this.state.experience,              
              "image":this.state.image,
              "about":this.state.about,
          }
          this.addDoctors(obj);
          // alert(JSON.stringify(obj));
          
      }
    
    addDoctors=(obj)=>{
      axios.post('http://localhost/doctorphp/api.php/adddoctors',obj)
      
      .then(function(response){
        //alert(JSON.stringify(obj));
      })
      .catch(function(error){

      })
    }

     
    render() {
    
    
       return (
        <div> 
        <h1>List of Doctors</h1>
        
        <form  noValidate autoComplete="off" >
        <fieldset>
        <Grid container spacing={24} xs={12} sm={4} style={{width:'100%', marginLeft:430}}>
        
        <Grid item xs={12} sm={6} style={{padding:10}}>                        
        <TextField
          id="standard-name"
          label="Name"
          name="name"
         
         value={this.state.name}
         onChange={this.handleChange}
          margin="normal"
        />
        </Grid>
        
        <Grid item xs={12} sm={6} style={{padding:10}}>
                
        
                <TextField
                  id="standard-name"
                  label="E-mail"
                  name="email"
                 
                  value={this.state.email}
                  onChange={this.handleChange}
                  margin="normal"
                />
        </Grid>
        <Grid item xs={12} sm={6} style={{padding:10}}>
        <TextField
          id="standard-name"
          label="Education"
          name="education"  
          value={this.state.education}
          onChange={this.handleChange}
          margin="normal"
        />
        </Grid>        
        <Grid item xs={12} sm={6} style={{padding:10}}>                      
        <TextField
          id="standard-name"
          label="Experience"
          name="experience"
         
          value={this.state.experience}
          onChange={this.handleChange}
          margin="normal"
        />
        </Grid>
        <Grid item xs={12} sm={6} style={{padding:10}}>
        <TextField
          id="standard-name"
          label="Image Link"
          name="image"
         
          value={this.state.image}
          onChange={this.handleChange}
          margin="normal"
        />
        </Grid>
        
        
        
                
        
        <Grid item xs={12} sm={6}>
                
        
        <TextField
          id="standard-name"
          label="About"
          name="about"
         
          value={this.state.about}
          onChange={this.handleChange}
          margin="normal"
        />
        </Grid>
        
        
        <Button className="submit" onClick={this.handleSubmit}>Submit</Button>
        <Button className="submit" >Cancel</Button>
        </Grid>
        </fieldset>
        </form>
        
        
      
        
        
    </div>
    );
    }
    }
  export default ManageDoctors;
