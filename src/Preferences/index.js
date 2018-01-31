import React, {Component} from 'react';
import './preference.css';

class Preference extends Component{
  getlocalStorageLength=()=>{
    let text ="";
    const lengthArray = JSON.parse(localStorage.getItem("colors"));
    const noOfBoxes = lengthArray.length;
    noOfBoxes ===1 ? (
      text = "There is " + noOfBoxes + " box."
    )
    : (
      text = "There are " + noOfBoxes + " boxes."
    )
    return text;
  }
  getColor=()=>{
    let color="";
    this.props.currentColor
      ?
        (
        color = this.props.currentColor
        )
      :
        (
          color = "black"
        )
    return color;
  }

  render(){
    return(
      <div className={"preference"}>
        <h1>User Preferences</h1>
        <h2 style={{color : this.getColor() }}> Current Color is {this.getColor()} </h2>
        <h4>{this.getlocalStorageLength()}</h4>
      </div>
    )
  }
}

export default Preference;