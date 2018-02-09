import React, { Component } from 'react';
import './Editor.css';

export default class Editor extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.colors = ["magenta", "cyan", "yellow"];
    this.makeButtons = this.makeButtons.bind(this);
  }

  makeButtons (colors) {
      return colors.map( (color, i) => {
        return (<button key={i} onClick={ () => { this.changeColor(color) } } >{color}</button>)
    })
  }

  changeColor (color) {
    // console.log("hi");
    this.props.data.cb(color);
  }

  render() {
    return (
      <div className="Editor">
        { this.makeButtons(this.colors) }
      </div>
    )
  }
}
