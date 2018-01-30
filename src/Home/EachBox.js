import React from 'react';

const EachBox = ({id,bgColor,selectColor,selectedColor,...props}) =>{
  const colorSelected=(color,e)=>{
    e.preventDefault();
    selectColor(color);
  }
  const renderColorDetail=(id)=>{
    props.router.push(`/color/${id}`)
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
      <div className={"clickDiv"} onClick={()=>renderColorDetail(id,bgColor)}>
        Visit Me

      </div>

    </div>
  )
}
export default EachBox;
