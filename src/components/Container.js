import React, { Component } from 'react'
import DotTracker from './DotTracker'
import Display from './Display'
import Editor from './Editor'

export default class Container extends Component {

  constructor () {
    super();
    this.styleRange = [
        "empty",
        "blotch", 
        "solid",
        "hoop"
    ];

    this.numLayers = 5;

    this.dotTracker = new DotTracker(this.numLayers);

    let layerArr = [];

    for (let i=1; i<=this.numLayers; i++) {
      layerArr.push({
        dotStyle: "blotch",
        dotColor1: "rgba(0, 0, 0, 1)",
        dotColor2: "rgba(0, 0, 0, 0)",
        outerOpacity: "0",
        dotSize: 10,
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
    this.updateDotColor1 = this.updateDotColor1.bind(this);
    this.updateDotColor2 = this.updateDotColor2.bind(this);
    this.updateOuterOpacity = this.updateOuterOpacity.bind(this);
    this.updateDotSize = this.updateDotSize.bind(this);
    this.updateDotQty = this.updateDotQty.bind(this);

    this.updateQualitiesRandom = this.updateQualitiesRandom.bind(this);

    this.updateAlgo = this.updateAlgo.bind(this);
    
  }  // end constructor

  ranMM(min,max) {
    return Math.floor(Math.random()*max)+min;
  }

  randomColor() {
    let r = this.ranMM(0,255);
    let g = this.ranMM(0,255);
    let b = this.ranMM(0,255);
    let a = Math.random();
    let str = `rgba(${r},${g},${b},${a})`;
    return str;
  }

  randomSize() {
    
  }

  updateDotStyle (dotStyle,layer) {
    let newArr = this.state.uiData.layers;
    newArr[layer-1].dotStyle = dotStyle;

    this.setState({
      uiData: { layers: newArr }
    }, () => { this.updateDisplay(); })

  }
  
  updateDotColor1 (dotColor1,layer) {
    let newArr = this.state.uiData.layers;
    newArr[layer-1].dotColor1 = dotColor1;

    this.setState({
      uiData: { layers: newArr }
    }, () => { this.updateDisplay(); })

  }  

  updateDotColor2 (dotColor2,layer) {
    let newArr = this.state.uiData.layers;
    newArr[layer-1].dotColor2 = dotColor2;

    this.setState({
      uiData: { layers: newArr }
    }, () => { this.updateDisplay(); })

  }

  updateOuterOpacity (val, layer) {
    let newArr = this.state.uiData.layers;
    newArr[layer-1].outerOpacity = val;

    this.setState({
      uiData: { layers: newArr }
    }, () => { this.updateDisplay(); })
  }

  updateDotSize (dotSize,layer) {
    console.log (this.state.uiData.layers);
    let newArr = this.state.uiData.layers;
    newArr[layer-1].dotSize = dotSize;

    this.setState({
      uiData: { layers: newArr }
    }, () => { this.updateDisplay(); })

  }
  
  updateDotQty (dotQty,layerNum) {
    let newArr = this.state.uiData.layers;
    newArr[layerNum-1].dotQty = dotQty;
    this.dotPosData = this.dotTracker.updateDotData(layerNum,dotQty);

    this.setState({
      uiData: { layers: newArr },
      displayData: { layerArray: this.dotPosData }
    }, () => { this.updateDisplay(); })

  }

  updateAlgo (algo,layerNum) {
    let newArr = this.state.uiData.layers;
    newArr[layerNum-1].algo = algo;
    this.dotPosData = this.dotTracker.runAlgo(layerNum,algo);

    this.setState({
      uiData: { layers: newArr },
      displayData: { layerArray: this.dotPosData }
    }, () => { this.updateDisplay(); })

  }

  updateQualitiesRandom () {
    for (let i=0; i<this.numLayers; i++) {
      let layerNum = i+1;
      let color1 = this.randomColor();
      let color2 = this.randomColor();
      let dotSize = this.randomSize();
    }
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
          updateDotColor1: this.updateDotColor1,
          updateDotColor2: this.updateDotColor2,
          updateOuterOpacity: this.updateOuterOpacity,
          updateDotSize: this.updateDotSize,
          updateDotQty: this.updateDotQty,
          updateAlgo: this.updateAlgo
          }} />
      </div>
    )
  }
}
