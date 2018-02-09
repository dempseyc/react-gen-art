import React, { Component } from 'react';
import Display from './Display';
import Editor from './Editor';

export default class Container extends Component {

  constructor () {
    super();
    this.state = {
      uiData: { chosenColor: "blue" },
      displayData: { color: "blue" }
    };
    this.updateColor = (color) => {
      this.updateData(color);
    };
  }

  updateData(color) {
    this.setState({
      uiData: { chosenColor: color },
      displayData : { color: color }
    })
  }

  render() {
    return (
      <div className="Container">
        <Display data={{ color: this.state.displayData.color }}/>
        <Editor data={{ chosenColor: this.state.uiData.chosenColor, cb: this.updateColor }} />
      </div>
    )
  }
}
