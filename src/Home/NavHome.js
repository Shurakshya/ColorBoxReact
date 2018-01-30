import React, {Component} from 'react';
import {Navbar,Nav, NavItem } from 'react-bootstrap';

import AddForm from './Modal';
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
    const selectedCount = this.props.selectedColors.length;
    const selected = window.confirm(`Are you sure you want to delete ${selectedCount>=1 ? 'selected ('+selectedCount+') color boxes':'last color box'} ?`);
    selected
      ?
      this.props.deleteColor()
      :
      this.handleUnselect();
  }

  toggleAddForm=()=>{
      this.setState({
        addForm: !this.state.addForm
      })
  }

  handleUnselect=()=>{
    this.props.unSelect();
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
              {
                this.props.selectedColors.length >=1
                ? (
                  <NavItem eventKey={3} onClick={this.handleUnselect}>
                    UnSelect
                  </NavItem>
                  )
                  : null
              }
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
