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
        select:false,
        color:'red'
      },{
        id : 1,
        select:false,
        color:'black'
      },{
        id : 2,
        select:false,
        color:'blue'
      },{
        id : 3,
        select:false,
        color:'green'
      },{
        id : 4,
        select:false,
        color:'yellow'
      },{
        id : 5,
        select:false,
        color:'brown'
      }],
      selectedColors: [],
      unselect : false
    }
  }

  addColor=(color)=> {
    const prev = this.state.colorsLists;
    const currId = prev[prev.length -1].id;
    let colors = {
      id : currId+1,
      select : false,
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
             onClick={(e)=>this.handleSelect(e,each)} >
          <div className={"selectDiv"}>

          </div>
          <div className={"clickDiv"}  onClick={()=>this.renderColorDetail(each.color)}>
            Visit Me
          </div>
        </div>
      )
    })
  }

  handleSelect=(e, each)=> {
    const selected = this.state.selectedColors;
    selected.push(each);
    each.select = !each.select;
    this.displaySelect(e,each);
    this.setState({
      selectedColors: selected,
      unselect: !this.state.unselect
    })
  }

  displaySelect=(e,each)=>{
    each.select ?
      (
        console.log(each.select),
        document.getElementsByClassName("selectDiv").innerHTML = "<span>Selected</span>"
      )
    :
    null

  }
  unSelect=()=>{
    this.setState({
      selectedColors : []
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
        : null;
    this.setState({
      colorsLists: filteredArr,
      selectedColors: []
    })
  }


  render(){
    const noOfBoxes = this.state.colorsLists.length;
    return (
      <div>
        <NavHome addColor = {this.addColor}
                 deleteColor = {this.deleteColor}
                 selectedColors={this.state.selectedColors}
                 unSelect ={this.unSelect}
        />
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