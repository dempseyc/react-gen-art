import React, { Component } from 'react';
import Display from './Display';
import Editor from './Editor';

export default class Container extends Component {

  constructor () {
    super();
    this.styleRange = [
      "magenta", "cyan", "yellow", 
      "magenta-blotch", "cyan-blotch", "yellow-blotch"
    ];
    this.state = {
      uiData: { 
        numDots: 20,
        chosenAlgo: "orth",
        chosenDotStyle: "blue"
      },
      displayData: { dotStyle: "blue" }
    };
    this.updateDotStyle = this.updateDotStyle.bind(this);
    this.updateAlgo = this.updateAlgo.bind(this);
    this.updateSize = this.updateSize.bind(this);
  }

  updateDotStyle(dotStyle) {
    this.setState({
      uiData: { chosenStyle: dotStyle },
      displayData: { dotStyle: dotStyle }
    })
  }

  updateAlgo(algo) {
    this.setState({
      uiData: { chosenAlgo: algo },
      displayData: { algo: algo }
    })
  }

  updateSize(size) {
    this.setState({
      uiData: { chosenSize: size },
      displayData: { size: size }
    })
  }

  render() {
    return (
      <div className="Container">
        <Display data={{ dotStyle: this.state.displayData.dotStyle }}/>
        <Editor data={{ 
          styleRange: this.styleRange,
          chosenDotStyle: this.state.uiData.chosenDotStyle, 
          updateDotStyle: this.updateDotStyle 
          }} />
      </div>
    )
  }
}
