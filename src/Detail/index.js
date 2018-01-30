import React, {Component} from 'react';
import {Navbar,Nav, NavItem } from 'react-bootstrap';

import './detail.css';
const {Header, Brand, Toggle} = Navbar;

class ColorDetail extends  Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  changeColor=(e)=>{


  }

  routePreference=()=>{
    console.log(this.props);
  }

  render() {
    console.log("these are indes proeos",this.props)
    const id = this.props.params.id;
    const  color = localStorage.getItem(id);
    return (
      <div className={"detailBox"}>
        <Navbar>
          <Header>
            <Brand>
              <span>Play With Color </span>
            </Brand>
            <Toggle />
          </Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} onClick={this.changeColor}>
                Change Color
              </NavItem>
              <NavItem eventKey={2} onClick={()=>this.props.router.goBack()}>
                Home
              </NavItem>
              <NavItem eventKey={3} onClick={this.routePreference}>
                Preference
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className={"jumbotronbasic"} style={{backgroundColor :color}} />
        <h2>The Color is {color}</h2>
      </div>
    )
  }
}
export default ColorDetail;
