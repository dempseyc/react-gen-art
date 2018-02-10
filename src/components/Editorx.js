import React, { Component } from 'react'
import './Editor.css'

export default class Editorx extends Component {

  constructor(props) {
    super(props);
    console.log(props, "props in editor");
    this.styleRange = this.props.data.styleRange;
    this.makeButtons = this.makeButtons.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  makeButtons (colors) {
      return colors.map( (color, i) => {
        return (<button key={i} onClick={ () => { this.changeColor(color) } } >{color}</button>)
    })
  }

  changeColor (color) {
    this.props.data.updateDotStyle(color);
  }

  render() {
    return (
      <div className="Editorx">
          { this.makeButtons(this.styleRange) }
      </div>
    )
  }
}
