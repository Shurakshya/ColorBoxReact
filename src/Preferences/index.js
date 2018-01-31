import React from 'react';
import './preference.css';

const Preference =({currentColor})=>{

   const getlocalStorageLength=()=>{
    let text ="";
    const lengthArray = JSON.parse(localStorage.getItem("colors")) || [{}] ;
    const noOfBoxes = lengthArray.length;
    noOfBoxes ===1 ? (
      text = "There is " + noOfBoxes + " box."
    )
    : (
      text = "There are " + noOfBoxes + " boxes."
    )
    return text;
  }

   const getColor=()=>{
    let color="";
    currentColor
      ?
        (
        color = currentColor
        )
      :
        (
          color = "black"
        )
    return color;
  }

  return(
      <div className={"preference"}>
        <h1>User Preferences</h1>
        <h2 style={{color : getColor() }}> Current Color is {getColor()} </h2>
        <h4>{getlocalStorageLength()}</h4>
      </div>
    )
}

export default Preference;