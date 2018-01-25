import React, {Component} from 'react'
import NavHome from './NavHome'

class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      colorArray : ['red', 'black', 'blue', 'green']
    }
  }

  addColor=(colors)=> {
    const prev = this.state.colorArray;
    prev.push(colors);
    this.setState({
      colorArray: prev
    })
  }

  renderColor=()=>{
    return this.state.colorArray.map((each,i) =>{
      return(
        <div className={"mainbox-col"} style={{backgroundColor: each}} key={i} />
      )
    })
  }

  deleteColor=()=>{
    const newArr = this.state.colorArray;
    newArr.length >=1
      ? newArr.pop()
      : null
    this.setState({
      colorsArray : newArr
    })
  }


  render(){
    const noOfBoxes = this.state.colorArray.length;
    return (
      <div>
        <NavHome addColor = {this.addColor} deleteColor = {this.deleteColor}/>
        <div className={"boxcontainer"}>
          <div className={"boxrow"}>
            {this.renderColor()}
          </div>
        </div>
        <div className={"footer"}>
          <h2>There are
            {
              noOfBoxes ===1
                ?
                <span> {noOfBoxes} box. </span>
                :
                <span> {noOfBoxes} boxes.</span>
            }
          </h2>
        </div>
      </div>
    )
  }
}

export default Home;