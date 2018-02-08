import React, { Component } from 'react';
import Display from './Display';
import Editor from './Editor';

export default class Container extends Component {

  constructor () {
    super();
    this.data = { color: "blue"};
    this.state = {
      uiData: { chosenColor: this.data.color },
      data: { color: this.data.color }
    };
    this.updateColor = (color) => {
      this.updateData(color);
    };
  }

  updateData(color) {
    this.data.color = color;
    this.setState({
      data : { color: color }
    })
    // console.log(this.data.color);
  }

  render() {
    return (
      <div className="Container">
        <Display data={{ color: this.state.data.color }}/>
        <Editor data={{ chosenColor: this.state.uiData.chosenColor, cb: this.updateColor }} />
      </div>
    )
  }
}
