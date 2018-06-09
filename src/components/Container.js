import React, { Component } from 'react'
import DotTracker from './DotTracker'
import Display from './Display'
import Editor from './Editor'

export default class Container extends Component {

  constructor () {
    super();
    this.styleRange = [
      "magenta-blotch", 
      "cyan-blotch", 
      "yellow-blotch", 
      "black-blotch", 
      "white-blotch"
    ];
    this.sizeRange = [
      50, 130, 340, 890
    ]
    this.numLayers = 5;

    this.dotTracker = new DotTracker(this.numLayers);

    let layerArr = [];

    for (let i=1; i<=this.numLayers; i++) {
      layerArr.push({
        dotStyle: "yellow-blotch",
        dotSize: 130,
        dotQty: 6
      });

    }

    this.dotPosData = this.dotTracker.dotPosData;

    this.state = {
      uiData: {
        layers: layerArr
      },
      displayData: { 
        layerArray: this.dotPosData
      },
    };

    this.updateDisplay = this.updateDisplay.bind(this);

    this.updateDotStyle = this.updateDotStyle.bind(this);

    this.updateDotSize = this.updateDotSize.bind(this);

    this.updateDotQty = this.updateDotQty.bind(this);

    this.updateAlgo = this.updateAlgo.bind(this);
  }  // end constructor

  updateDotStyle(dotStyle,layer) {
    let newArr = this.state.uiData.layers;
    newArr[layer-1].dotStyle = dotStyle;

    this.setState({
      uiData: { layers: newArr }
    }, () => { this.updateDisplay() })
  }
  
  updateDotSize(dotSize,layer) {
    console.log (this.state.uiData.layers);
    let newArr = this.state.uiData.layers;
    newArr[layer-1].dotSize = dotSize;

    this.setState({
      uiData: { layers: newArr }
    }, () => { this.updateDisplay() })
  }
  
  updateDotQty(dotQty,layerNum) {
    let newArr = this.state.uiData.layers;
    newArr[layerNum-1].dotQty = dotQty;
    this.dotPosData = this.dotTracker.updateDotPosData(layerNum,dotQty);

    this.setState({
      uiData: { layers: newArr },
      displayData: { layerArray: this.dotPosData }
    }, () => { 
      this.updateDisplay();
      }
    )
  }

  updateAlgo(algo,layerNum) {
    let newArr = this.state.uiData.layers;
    newArr[layerNum-1].algo = algo;
    this.dotPosData = this.dotTracker.runAlgo(layerNum,algo);

    this.setState({
      uiData: { layers: newArr },
      displayData: { layerArray: this.dotPosData }
    }, () => { 
      this.updateDisplay();
      }
    )
  }

  // this forceUpdate does what is needed from container
  updateDisplay() {
    this.forceUpdate();
  }

  render() {
    // console.log(this.displayUpdate, "in c");
    return (
      <div className="Container">
        <Display
            numLayers= {this.numLayers}
            dotPosData= {this.dotPosData}
            layers= {this.state.uiData.layers}
         >
        </Display>
        <Editor data={{ 
          styleRange: this.styleRange,
          numLayers: this.numLayers,
          layers: this.state.uiData.layers,
          updateDotStyle: this.updateDotStyle,
          updateDotSize: this.updateDotSize,
          updateDotQty: this.updateDotQty,
          updateAlgo: this.updateAlgo
          }} />
      </div>
    )
  }
}
