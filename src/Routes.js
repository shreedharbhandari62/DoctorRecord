import React from 'react';
import Calculate from './kist/calculate';
import {Route, Switch} from "react-router-dom";
import First from './kist/first';
import Form from './kist/form';
import UserBio from './apiCall/UserBio';
import Dashboard from './apiCall/dashboard';
import Header from './apiCall/header';
import DoctorList from './doctors/doctorsList';
import ManageDoctors from './doctors/manageDoctors';

class Routes extends React.Component{
    

  render(){
    return(
      <div>
        <Header/>
        <Switch>
            <Route path="/" component={Dashboard} exact/>
            <Route path="/first" component={First} exact/>
            <Route path="/calculate" component={Calculate} exact/>
            <Route path="/form" component={Form} exact/>
            <Route path="/userBio" component={UserBio} exact/>
            <Route path="/header" component={Header} exact/>
            <Route path="/doctors" component={DoctorList} exact/>
            <Route path="/manage" component={ManageDoctors} exact/>
        </Switch>
      </div>
    )
  }
}

export default Routes;
