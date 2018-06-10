//  constructor takes a number and an array of objs
import AlgoRunner from '../AlgoRunner';

export default class DotTracker {
    constructor(numLayers) {

        this.numLayers = numLayers;
        this.initNumDotsPerLayer = 3;
        this.makeDotPosData = this.makeDotPosData.bind(this);
        this.setPosDataForLayer = this.setPosDataForLayer.bind(this);
        this.dotPosData = [];
        this.makeDotPosData();
    }
    
    ranPos(min,max) {
        return Math.floor(Math.random()*max)+min;
    }

    setPosDataForLayer(numDots) {
        if (!numDots) { numDots = this.initNumDotsPerLayer; }
        let layerPosData = [];
        for(let i = 0; i<numDots; i++) {
          layerPosData.push({
              idx: i,
              xPos: this.ranPos(0,200)/2, 
              yPos: this.ranPos(0,200)/2
            });
        }
        return layerPosData;
    }

    makeDotPosData() {
        for(let i = 0; i<this.numLayers; i++) {
            this.dotPosData.push({
                idx: i,
                algo: "random",
                data: this.setPosDataForLayer()
            });
        }
        return this.dotPosData;
    }

    updateDotPosData(layerNum, numDots) {
        this.dotPosData[layerNum-1].data = this.setPosDataForLayer(numDots);
        return this.dotPosData;
    }

    runAlgo(layerNum, algo) {
        this.dotPosData[layerNum-1].data = AlgoRunner(this.dotPosData[layerNum-1].data, algo);
        return this.dotPosData;
    }

}