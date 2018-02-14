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
    let layerArr = [];
    // push layer template instead
    for (let i=1; i<=this.numLayers; i++) {
      layerArr.push({dotStyle: "yellow-blotch"});
    }
    this.state = {
      uiData: {
        layers: layerArr
      },
      displayData: { 
        layerArray: Array(this.numLayers) }
    };

    this.updateDotStyle = this.updateDotStyle.bind(this);
    // this.updateAlgo = this.updateAlgo.bind(this);
    // this.updateSize = this.updateSize.bind(this);
  }

  updateDotStyle(dotStyle,layer) {
    console.log("uds");
    let newArr = this.state.uiData.layers.map((d,i)=>{
      if (i+1 !== layer) {
        return d;
      } else {
        let dU = { dotStyle: dotStyle }
        return dU;
      }
    });
    this.setState({
      uiData: { layers: newArr }
    })
  }

  // updateAlgo(algo) {
  //   this.setState({
  //     uiData: { algo: algo }
  //   })
  // }

  // updateSize(size) {
  //   this.setState({
  //     uiData: { size: size },
  //   })
  // }

  render() {
    return (
      <div className="Container">
        <Display data={{
          numLayers: this.numLayers,
          layers: this.state.uiData.layers
        }}
         >
        </Display>
        <Editor data={{ 
          styleRange: this.styleRange,
          numLayers: this.numLayers,
          layers: this.state.uiData.layers,
          updateDotStyle: this.updateDotStyle,
          }} />
      </div>
    )
  }
}
