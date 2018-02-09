import React, { Component } from 'react';
import './Panel.css';

export default class DotStyleChooser extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.dotStyles = [
        "magenta", "cyan", "yellow", 
        "magenta-blotch", "cyan-blotch", "yellow-blotch"
    ];
    this.makeButtons = this.makeButtons.bind(this);
  }

  makeButtons (styles) {
      return styles.map( (style, i) => {
        return (<button key={i} onClick={ () => { this.changeColor(style) } } >{style}</button>)
    })
  }

  changeColor (style) {
    this.props.data.updateColor(style);
  }

  render() {
    return (
      <div className="Editor">
        { this.makeButtons(this.dotStyles) }
      </div>
    )
  }
}