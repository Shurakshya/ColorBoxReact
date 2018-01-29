import React, {Component} from 'react';
import './style.css';

class ColorDetail extends  Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  changeColor=(e)=>{
    e.preventDefault();
    console.log("color changed")
  }

  render() {
    const color = this.props.params.colorName;
    return (
      <div>
        <button onClick={this.changeColor}>Change Color </button>
        <br/><br/>
        <div className={"jumbotronbasic"} style={{backgroundColor :color}}>
        </div>
        color detail : {color}
        <br/>
        <button onClick={()=>this.props.router.goBack()}>back</button>
      </div>
    )
  }
}
export default ColorDetail;
