import React, {Component} from 'react';
import {Navbar,Nav, NavItem } from 'react-bootstrap';

import './detail.css';
import ChangeColorForm from './ChangeColorForm';
const {Header, Brand, Toggle} = Navbar;

class ColorDetail extends  Component{
  constructor(props){
    super(props);
    this.state={
      toggleForm : false,
      bgColor : ''
    }
  }

  componentWillMount(){
    const id = parseInt(this.props.params.id ,10 );
    const  colorArray = JSON.parse(localStorage.getItem('colors')) || [{id,color:'red'}];
    const object = colorArray.find((obj)=>{
      return obj.id === id;
    });
    this.setState({
      bgColor : object.color
    })
  }

  changeColor=(color)=> {
    const id = parseInt(this.props.params.id ,10 );
    let colors=[];
    this.setState({
      bgColor :color
    });
    if(localStorage.getItem('colors').length>0){
      colors = JSON.parse(localStorage.getItem('colors')).map(each=>{
        if(each.id===id){
          return {
            id,
            color
          }
        }else{
          return each;
        }
      })
    }
    localStorage.setItem('colors',JSON.stringify(colors));
  }

  toggleForm=()=>{
    this.setState({
      toggleForm : !this.state.toggleForm
    })
  }

  routePreference=(e)=>{
    e.stopPropagation();
  }

  render() {
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
              <NavItem eventKey={1} onClick={this.toggleForm}>
                Change Color
              </NavItem>
              <NavItem eventKey={2} onClick={()=>this.props.router.goBack()}>
                Home
              </NavItem>
              <NavItem eventKey={3} onClick={this.routePreference}>
                Preference
              </NavItem>
              <li>
                <a>
                  {
                    this.state.toggleForm
                      ? <ChangeColorForm
                          toggleForm={this.toggleForm}
                          changeColor={this.changeColor}
                        />
                      : null
                  }
                </a>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className={"jumbotronbasic"} style={{backgroundColor : this.state.bgColor }} />
        <h2>The Color is {this.state.bgColor}</h2>
      </div>
    )
  }
}

export default ColorDetail;
