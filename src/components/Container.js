import React, { Component } from 'react'
import DotTracker from './DotTracker'
import Display from './Display'
import Editor from './Editor'
import Dot from './Dot';

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

    this.layerData = [
      {idx: 0,numDots: 5, algo: "ortho"},
      {idx: 1,numDots: 5, algo: "ortho"}
    ];

    this.dotTracker = new DotTracker(this.numLayers, this.layerData);

    let layerArr = [];

    for (let i=1; i<=this.numLayers; i++) {
      layerArr.push({
        dotStyle: "yellow-blotch",
        dotSize: 130
      });

    }

    this.dotPosData = this.dotTracker.reportDotPosData();

    this.state = {
      uiData: {
        layers: layerArr
      },
      displayData: { 
        layerArray: this.dotPosData
      },
    };

    this.displayUpdate = this.state.uiData.layers;

    this.updateDisplay = this.updateDisplay.bind(this);

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

  // componentWillMount() {
  //   this.dotPosData = this.dotTracker.reportDotPosData();
  // }

  render() {
    // console.log(this.displayUpdate, "in c");
    return (
      <div className="Container">
        <Display
            numLayers= {this.numLayers}
            dotPosData= {this.dotPosData}
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
