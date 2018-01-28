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
            <label> Status &nbsp; &nbsp;</label>
            <select name={"color"}  onChange={this.handleColorChange}>
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="Green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="pink">Pink</option>
              <option value="blue">Blue</option>
              <option value="aquamarine">Aquamarine</option>
              <option value="cyan">Cyan</option>
              <option value="brown">Brown</option>
              <option value="purple">Purple</option>
              <option value="lime">Lime</option>
            </select><br /><br/>
            <Button  onClick={this.handleClose}>Close</Button>
              &nbsp;&nbsp;
            <Button bsStyle="primary" type={"submit"}>Save changes</Button>
          </form>
          <br />
        </Modal.Body>
      </Modal>
    )
  }
}

export default AddForm;