import React,{Component} from 'react';
import { Button } from 'react-bootstrap';

const inlineStyle={display : 'inline-block',marginLeft:5};

class Form  extends Component{
  render() {
    const {sendNewColor, handleClose, handleColorChange, inlineForm} = this.props;
    return (
      <form onSubmit={sendNewColor}>
        <label> Status &nbsp; &nbsp;</label>
        <select name={"color"} onChange={handleColorChange}>
          <option value="aquamarine">Aquamarine</option>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="brown">Brown</option>
          <option value="cyan">Cyan</option>
          <option value="green">Green</option>
          <option value="lime">Lime</option>
          <option value="orange">Orange</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
        </select>
        {
          !inlineForm ? ([<br key={1}/>, <br key={2}/>]) : null
        }
        <div style={inlineForm ? inlineStyle : {}}>
          <Button onClick={handleClose}>Close</Button>
          &nbsp;&nbsp;
          <Button bsStyle="primary" type={"submit"}>Save changes</Button>
        </div>
      </form>
    )
  }
}

export default Form;
