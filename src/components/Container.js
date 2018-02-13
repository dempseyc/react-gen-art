import React, { Component } from 'react'
import Display from './Display'
import Editor from './Editor'

export default class Container extends Component {

  // what we will need later is layers in the uiData and displayData

  constructor () {
    super();
    this.styleRange = [
      "magenta-blotch", "cyan-blotch", "yellow-blotch"
    ];
    this.numLayers = 3;
    this.state = {
      uiData: {
        chosenDotStyle: "magenta-blotch"
      },
      displayData: { dotStyle: "magenta-blotch" }
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
        <Display data= {{
          numLayers: this.numLayers,
          dotStyle: this.state.displayData.dotStyle
        }} >
        </Display>
        <Editor data={{ 
          styleRange: this.styleRange,
          numLayers: this.numLayers,
          chosenDotStyle: this.state.uiData.chosenDotStyle, 
          updateDotStyle: this.updateDotStyle,
          }} />
      </div>
    )
  }
}
