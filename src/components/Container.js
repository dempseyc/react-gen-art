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
    this.sizeRange = [
      50, 130, 340, 890
    ]
    this.numLayers = 2;
    let layerArr = [];
    // push layer template instead
    for (let i=1; i<=this.numLayers; i++) {
      layerArr.push({
        dotStyle: "yellow-blotch",
        dotSize: 130
      });
    }

    this.state = {
      uiData: {
        layers: layerArr
      },
      displayData: { 
        layerArray: Array(this.numLayers) }
    };

    this.updateDisplay = this.updateDisplay.bind(this);

    this.displayUpdate = this.state.uiData.layers;
    console.log(this.displayUpdate, "d u");

    this.updateDotStyle = this.updateDotStyle.bind(this);
    // this.updateAlgo = this.updateAlgo.bind(this);
    this.updateDotSize = this.updateDotSize.bind(this);
  }

  updateDotStyle(dotStyle,layer) {
    let newArr = this.state.uiData.layers.map((d,i)=>{
      if (i+1 !== layer) {
        return d;
      } else {
        let dU = { 
          dotStyle: dotStyle,
          dotSize: this.state.uiData.layers[i].dotSize 
        }
        return dU;
      }
    });
    this.setState({
      uiData: { layers: newArr }
    }, () => { this.updateDisplay(newArr) })
  }
  
  updateDotSize(dotSize,layer) {
    let newArr = this.state.uiData.layers.map((d,i)=>{
      if (i+1 !== layer) {
        return d;
      } else {
        let dU = { 
          dotSize: dotSize,
          dotStyle: this.state.uiData.layers[i].dotStyle
        }
        return dU;
      }
    });
    this.setState({
      uiData: { layers: newArr }
    }, () => { this.updateDisplay(newArr) })
  }
  
  // this forceUpdate does what is needed from container
  updateDisplay(layers) {
    this.displayUpdate = layers;
    this.forceUpdate();
  }

  render() {
    console.log(this.displayUpdate, "in c");
    return (
      <div className="Container">
        <Display
            numLayers= {this.numLayers}
            layers= {this.displayUpdate}
         >
        </Display>
        <Editor data={{ 
          styleRange: this.styleRange,
          numLayers: this.numLayers,
          layers: this.displayUpdate,
          updateDotStyle: this.updateDotStyle,
          updateDotSize: this.updateDotSize
          }} />
      </div>
    )
  }
}
