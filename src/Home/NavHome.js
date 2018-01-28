import React, {Component} from 'react';
import {Navbar,Nav, NavItem } from 'react-bootstrap';
import AddForm from './AddForm';
const {Header, Brand, Toggle} = Navbar;

class Form extends Component{
  constructor(props){
    super(props);
    this.state={
      addForm : false
    }
  }

  addColor=(color)=>{
    this.props.addColor(color);
    this.setState({
      addForm: false
    })
  }

  deleteColor=(event)=>{
    event.preventDefault();
    const selected = window.confirm('Are you sure you want to delete last color box?');
    selected
      ?
      this.props.deleteColor()
      :
      null
  }

  toggleAddForm=()=>{
      this.setState({
        addForm: !this.state.addForm
      })
  }

  render(){
    return (
        <Navbar>
          <Header>
            <Brand>
              <span>Play With Color </span>
            </Brand>
            <Toggle />
          </Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} onClick={this.toggleAddForm}>
                Add
              </NavItem>
              <NavItem eventKey={2} onClick={this.deleteColor}>
                Delete
              </NavItem>
            </Nav>
          </Navbar.Collapse>
          {
            this.state.addForm
              ? <AddForm
                  hideForm={this.toggleAddForm}
                  addColor = {this.addColor}
                  addForm={this.state.addForm}

                />
              : null
          }
        </Navbar>
    )
  }
}

export default Form;
