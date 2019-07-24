import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
var adbs = require("ad-bs-converter");

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={dob:"",result:'',date_format:'bs'}
        this.handleChange=this.handleChange.bind(this);
        this.convertDate=this.convertDate.bind(this);
    this.handleChangeSelect=this.handleChangeSelect.bind(this);
    this.onClearDate=this.onClearDate.bind(this);
      }
      handleChange(e){
        this.setState({
          dob:e.target.value
        })
      }
      handleChangeSelect(event){
    this.setState({date_format: event.target.value});
      }
      convertDate(){
    if(this.state.date_format=='ad'){
    
        var result=adbs.ad2bs(this.state.dob).ne;
        var ans=result.year+' '+result.strMonth+' '+result.day;
        this.setState({result:ans})
      }
    
     else
      {
      var result=adbs.bs2ad(this.state.dob);
      var ans=result.year+' '+result.month+' '+result.day;
      this.setState({result:ans})
    }
    }
    onClearDate(){
    this.setState({result:'',dob:''})
    }
    render() {
    
    
       return (
        <div>
           <TextField
             id="standard-name"
             label="DOB"
    
             value={this.state.dob}
             onChange={this.handleChange}
             margin="normal"
             helperText="YY/MM/DD"
             placeholder="enter dob"
    
           />
           <Radio
           label="AD"
           checked={this.state.date_format==='ad'}
             onChange={this.handleChangeSelect}
              value="ad"
              name="radio-button-demo"
              aria-label="AD"
               style={{color:'#000'}}
            />
            <Radio
            label="BS"
              checked={this.state.date_format === 'bs'}
              onChange={this.handleChangeSelect}
              value="bs"
              name="radio-button-demo"
              aria-label="Bs"
              style={{color:'#000'}}
            />
           <Button variant="contained" color="primary" onClick={this.convertDate}>
            Convert
          </Button>
    <div>
    {this.state.result}
    </div>
    </div>
    );
    }
    }
  export default Form;



