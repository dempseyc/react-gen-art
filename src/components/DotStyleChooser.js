import React, { Component } from 'react';
// import './Panel.css';

export default class DotStyleChooser extends Component {

  constructor(props) {
    super(props);
    console.log(props);

    this.makeButtons = this.makeButtons.bind(this);
    this.changeColor = this.makeButtons.bind(this);
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
      <div className="DotStyleChooser">
        { this.makeButtons(this.dotStyles) }
      </div>
    )
  }
}