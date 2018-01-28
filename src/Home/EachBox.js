import React, {Component} from 'react';

const EachBox = ({bgColor,selectedColor,children}) =>{
  const colorSelected=(color)=>{
    selectedColor(color);
  }
  console.log(bgColor);
  return(
    <div
      className={"mainbox-col"}
      style={{backgroundColor: bgColor}}
      onClick={()=>colorSelected(bgColor)}
    >
      {children}
    </div>
  )
}
export default EachBox;
