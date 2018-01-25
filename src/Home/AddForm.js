import React, {Component} from 'react';
import { Modal, Button } from 'react-bootstrap';

class AddForm extends Component{
  constructor(props){
    super(props);
    this.state={
      color : 'black',
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
          <form onSubmit={this.sendNewColor}>
            <label> Status &nbsp;</label>
            <select name={"color"}  onChange={this.handleColorChange}>
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="Green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="Pink">Pink</option>
            </select><br /><br/>
            <Button  onClick={this.handleClose}>Close</Button>
              &nbsp;
            <Button bsStyle="primary" type={"submit"}>Save changes</Button>
          </form>
          <br />
        </Modal.Body>
      </Modal>
    )
  }
}

export default AddForm;