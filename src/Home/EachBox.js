import React, {Component} from 'react';

const EachBox = ({id,bgColor,selectColor,selectedColor,...props}) =>{
  const colorSelected=(color,e)=>{
    e.preventDefault();
    selectColor(color);
  }
  const renderColorDetail=(bgColor)=>{
    props.router.push(`/color/${bgColor}`)
    console.log(props);
  }
  return(
    <div
      className={"mainbox-col"}
      style={{backgroundColor: bgColor}}
      onClick={(e)=>colorSelected(id,e)}
    >
      <p className="ribbon">
        {
          (selectedColor.indexOf(id)>=0) ? "Selected" : null
        }
      </p>
      <div className={"clickDiv"} onClick={()=>renderColorDetail(bgColor)}>
        Visit Me

      </div>

    </div>
  )
}
export default EachBox;
