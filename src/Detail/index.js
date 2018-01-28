import React, {Component} from 'react';

class colorDetail extends  Component{
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.props);
    const color = this.props.params.colorName;
    return (
      <div>
        color detail : {color}
        <br/>
        <button onClick={()=>this.props.router.goBack()}>back</button>
      </div>
    )
  }
}
export default colorDetail;
