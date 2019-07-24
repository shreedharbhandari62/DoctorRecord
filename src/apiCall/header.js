// import { AppBar, Drawer, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
// import Drawer from '@material-ui/core/Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom';
import menuList from './menuitem';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = { open: false };
        
      }

      toggleDrawer=()=>{
          this.setState({
              open:!this.state.open
          });
      };
     

     
     
    render() {
    
    
       return (
        <div> 
        <AppBar position="static">
     <Toolbar>
       <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
         <MenuIcon />
       </IconButton>
       <Typography variant="h6" color="inherit" >
         React project
       </Typography>
       
     </Toolbar>
   </AppBar>
           <Drawer anchor="left" open={this.state.open}  onClose={this.toggleDrawer}>

<div
    tabIndex={0}
    role="button"
    onClick={this.toggleDrawer}
        >
            <List>
            {menuList.headerMenu.map((text, index) => (
                <Link to={text.path}>
              <ListItem button key={index}>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItem>
              </Link>
            ))}
          </List>
    </div>        
      </Drawer>
         
    
    </div>
    );
    }
    }
  export default Header;