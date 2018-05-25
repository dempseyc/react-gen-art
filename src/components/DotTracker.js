//  constructor takes a number and an array of objs

export default class DotTracker {
    constructor(numLayers) {

        this.numLayers = numLayers;

        this.makeDotPosData = this.makeDotPosData.bind(this);
        this.makeDotLayerData = this.makeDotLayerData.bind(this);
        this.updateDotLayerData = this.updateDotLayerData.bind(this);
        this.dotPosData = [];
        this.makeDotPosData();
    }
    
    ranPos(min,max) {
        return Math.floor(Math.random()*max)+min;
    }
    
    makeDotLayerData() {
        let numDots = 5;
        let layerDotData = [];
        for(let i = 0; i<numDots; i++) {
          layerDotData.push({
              x: this.ranPos(0,100), 
              y: this.ranPos(0,100)
            });
        }
        return layerDotData;
    }

    updateDotLayerData(numDots) {
        let layerDotData = [];
        for(let i = 0; i<numDots; i++) {
          layerDotData.push({
              x: this.ranPos(0,100), 
              y: this.ranPos(0,100)
            });
        }
        return layerDotData;
    }

    makeDotPosData() {
        for(let i = 0; i<this.numLayers; i++) {
            this.dotPosData.push({
                idx: i,
                data: this.makeDotLayerData()
            });
        }
        return this.dotPosData;
    }

    updateDotPosData(layerNum, numDots) {
        this.dotPosData[layerNum-1].data = this.updateDotLayerData(numDots);
        return this.dotPosData;
    }

}