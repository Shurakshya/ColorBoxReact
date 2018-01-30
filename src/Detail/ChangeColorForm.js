import React, {Component} from 'react'
import Form from '../CommonComponent/Form';

class ChangeColorForm extends Component{
  constructor(props){
    super(props);
    this.state={
      color : 'aquamarine'
    }
  }

  handleColorChange=(e)=> {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleClose=()=>{
    this.props.toggleForm();
  }

  sendNewColor= (e)=>{
    e.preventDefault();
    const colorValue = this.state.color;
    console.log("colorvalue" , colorValue);
    this.props.changeColor(colorValue);
  }

  render(){
    return(
      <Form
        sendNewColor={this.sendNewColor}
        handleClose={this.handleClose}
        handleColorChange={this.handleColorChange}
        inlineForm={true}
      />
    )
  }
}

export default ChangeColorForm;