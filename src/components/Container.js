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
    this.numLayers = 3;
    this.state = {
      uiData: { 
        numDots: 20,
        activeLayer: 1,
        chosenAlgo: "orth",
        chosenDotStyle: "blue"
      },
      displayData: { dotStyle: "blue" }
    };
    this.updateDotStyle = this.updateDotStyle.bind(this);
    this.updateLayerActive = this.updateLayerActive.bind(this);
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

  updateLayerActive(numLayer) {
    this.setState({
      uiData: { activeLayer: numLayer }
    })
    console.log("active layer", numLayer);
  }

  render() {
    return (
      <div className="Container">
        <Display data={{ dotStyle: this.state.displayData.dotStyle }}/>
        <Editor data={{ 
          styleRange: this.styleRange,
          numLayers: this.numLayers,
          chosenDotStyle: this.state.uiData.chosenDotStyle, 
          updateDotStyle: this.updateDotStyle,
          updateLayerActive: this.updateLayerActive
          }} />
      </div>
    )
  }
}
