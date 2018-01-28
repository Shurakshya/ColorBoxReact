import React, {Component} from 'react'
import NavHome from './NavHome'
import {Link} from 'react-router';
import ColorDiv from './EachBox';

class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      colorsLists : [{
        id : 0,
        color:'red'
      },{
        id : 1,
        color:'black'
      },{
        id : 2,
        color:'blue'
      },{
        id : 3,
        color:'green'
      },{
        id : 4,
        color:'yellow'
      },{
        id : 5,
        color:'brown'
      }],
      selectedColors: []
    }
  }

  addColor=(color)=> {
    const prev = this.state.colorsLists;
    const currId = prev[prev.length -1].id;
    let colors = {
      id : currId+1,
      color
    }
    prev.push(colors);
    this.setState({
      colorsLists: prev
    })
  }

  renderColorDetail=(color)=>{
    console.log(color);
    this.props.router.push(`/color/${color}`);
  }

  renderColor=()=>{
    return this.state.colorsLists.map((each,i) =>{
      return(
        <div className={"mainbox-col"} key={i}
             style={{backgroundColor: each.color}}
             onClick={()=>this.handleSelect(each)} >
          <div className={"clickDiv"} onClick={()=>this.renderColorDetail(each.color)}>
            Visit Me
          </div>
        </div>
      )
    })
  }

  handleSelect=(each)=> {
    const selected = this.state.selectedColors;
    selected.push(each);
    this.setState({
      selectedColors : selected
    })
  }

  deleteColor=()=> {
    let filteredArr= [];
    let newArr = this.state.colorsLists;
    const selected = this.state.selectedColors;
    newArr.length >=1
      ?
        (
          selected.length >=1
            ?
              (
                filteredArr = newArr.filter((each) => {
                  for (let s of selected) {
                    if (s.id === each.id) {
                      return false;
                    }
                  }
                  return true
                })
              )
            :
              (
                newArr.pop(),
                filteredArr =newArr
              )
        )
        : null
    this.setState({
      colorsLists: filteredArr,
      selected: []
    })
  }

  render(){
    const noOfBoxes = this.state.colorsLists.length;
    return (
      <div>
        <NavHome addColor = {this.addColor} deleteColor = {this.deleteColor}/>
        <div className={"boxcontainer"}>
          <div className={"boxrow"}>
            {this.renderColor()}
          </div>
        </div>
        <div className={"footer"}>
          <h2>There
            {
              noOfBoxes ===1
                ?
                <span> is {noOfBoxes} box. </span>
                :
                <span> are {noOfBoxes} boxes.</span>
            }
          </h2>
        </div>
      </div>
    )
  }
}

export default Home;