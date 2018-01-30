import React, {Component} from 'react'
import NavHome from './NavHome'
import ColorDiv from './EachBox';
import './home.css';

class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      colorsLists : [{
        id : 0,
        color:'red'
      },{
        id : 1,
        color:'black'
      },{
        id : 2,
        color:'blue'
      },{
        id : 3,
        color:'green'
      },{
        id : 4,
        color:'yellow'
      },{
        id : 5,
        color:'brown'
      }],
      selectedColorsId: []
    }
  }

  componentWillMount(){
    const localStorageColors  = JSON.parse(localStorage.getItem('colors')) || [];
    const newArr = [];
    if(localStorageColors.length > 0)
      {
        for (let x  of localStorageColors) {
          if (this.state.colorsLists.indexOf(x) === -1)
          {
            newArr.push(x);
          }
        }
        this.setState({
          colorsLists : newArr
        })
      }
    else
      {
        localStorage.setItem('colors',JSON.stringify(this.state.colorsLists));
      }
  }

  addColor=(color)=> {
    const prev = this.state.colorsLists;
    const currId = prev.length === 0 ? -1 : prev[prev.length -1].id;
    let colors = {
      id : currId+1,
      color
    };
    prev.push(colors);
    /* persist state to local storage */
    const storageColor=JSON.parse(localStorage.getItem('colors'));
    storageColor.push(colors);
    localStorage.setItem('colors',JSON.stringify(storageColor));
    this.setState({
      colorsLists: prev
    });
    this.unSelect();
  }

  handleSelect=(colorId)=> {
    const selected = this.state.selectedColorsId;
    if (selected.indexOf(colorId) === -1)
      {
        selected.push(colorId);
      }
    else
      {
        const index = selected.indexOf(colorId);
        selected.splice(index,1);
      }
    this.setState({
      selectedColorsId: selected
    })
  }

  unSelect=()=>{
    this.setState({
      selectedColorsId : []
    })
  }

  deleteColor=()=> {
    let filteredArr= [];
    let newArr = this.state.colorsLists;
    const selected = this.state.selectedColorsId;
    newArr.length >=1 ? (
        selected.length >=1
          ?
            (
              filteredArr = newArr.filter((each) => {
                for (let s of selected) {
                  if (s === each.id) {
                    // remove deleted id localstorage
                    this.removeItemFromLocalstorage(each.id);
                    return false;
                  }
                }
                return true;
              })
            )
          :
            (
              newArr.pop(),
              localStorage.setItem("colors",JSON.stringify(newArr)),
              filteredArr =newArr
            )
      ):
        null;
    this.setState({
      colorsLists: filteredArr,
      selectedColorsId: [],
    })
  }

  removeItemFromLocalstorage=(colorId)=>{
    const storageColor=JSON.parse(localStorage.getItem('colors'));
    const filteredArr = storageColor.filter((each) => {
      return each.id!==colorId;
    });
    localStorage.setItem('colors',JSON.stringify(filteredArr));
  }

  render(){
  const noOfBoxes = this.state.colorsLists.length;
  return (
    <div>
      <NavHome addColor={this.addColor}
               deleteColor={this.deleteColor}
               selectedColors={this.state.selectedColorsId}
               deleteText={this.state.deleteText}
               unSelect={this.unSelect}
      />
      <div className={"boxcontainer"}>
        <div className={"boxrow"}>
          {
            this.state.colorsLists.map((each, i) => {
              return (
                <ColorDiv
                  key={each.id}
                  id={each.id}
                  bgColor={each.color}
                  selectedColor={this.state.selectedColorsId}
                  selectColor={this.handleSelect}
                  eachUnselect={this.eachUnselect}
                  {...this.props}
                >
                </ColorDiv>
              )
            })
          }
        </div>
      </div>
      <div className={"footer"}>
        <h2>There
          {
            noOfBoxes === 1
              ?
              <span> is {noOfBoxes} box. </span>
              :
              <span> are {noOfBoxes} boxes.</span>
          }
        </h2>
      </div>
    </div>
  )
  }
}

export default Home;