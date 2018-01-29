import React, {Component} from 'react';
import './style.css';

class ColorDetail extends  Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    const color = this.props.params.colorName;
    console.log(color);
  }

  changeColor=(e)=>{
    e.preventDefault();
    console.log("color changed")
  }

  render() {

    return (
      <div>
        <button onClick={this.changeColor}>Change Color </button>
        <br/><br/>
        <div className={"jumbotronbasic"} style={{backgroundColor : 'red'}}>
        </div>
        color detail : {'red'}
        <br/>
        <button onClick={()=>this.props.router.goBack()}>back</button>
      </div>
    )
  }
}
export default ColorDetail;
