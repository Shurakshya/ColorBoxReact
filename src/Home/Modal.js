import React, {Component} from 'react';
import { Modal} from 'react-bootstrap';
import Form from '../CommonComponent/Form';

class AddForm extends Component{
  constructor(props){
    super(props);
    this.state={
      color : 'aquamarine',
      show : this.props.addForm
    }
  }

  handleColorChange=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  sendNewColor=(e)=>{
    e.preventDefault();
    const colorValue = this.state.color;
    console.log(e);
    this.props.addColor(colorValue);
    this.handleClose();
  }

  handleClose=()=>{
    this.setState({
      show : false
    })
    this.props.hideForm();
  }

  render(){
    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Color</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            sendNewColor={this.sendNewColor}
            handleClose={this.handleClose}
            handleColorChange={this.handleColorChange}
          />
          <br />
        </Modal.Body>
      </Modal>
    )
  }
}

export default AddForm;