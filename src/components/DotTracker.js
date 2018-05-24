//  constructor takes a number and an array of objs

export default class DotTracker {
    constructor(numLayers) {

        this.numLayers = numLayers;

        this.makeDotPosData = this.makeDotPosData.bind(this);
        this.makeDotLayerData = this.makeDotLayerData.bind(this);
        this.updateDotLayerData = this.updateDotLayerData.bind(this);
        this.DotPosData = this.makeDotPosData();
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
        let numLayers = this.numLayers;
        let posData = [];
        for(let i = 0; i<numLayers; i++) {
            posData.push({
                idx: i,
                data: this.makeDotLayerData()
            });
        }
        return posData;
    }

    updateDotPosData(layerNum, numDots) {
        let numLayers = this.numLayers;
        let posData = this.DotPosData;
        for(let i = 0; i<numLayers; i++) {
            if(i+1 !== layerNum) {
                return posData;
            } else
            {
                posData[i] = {
                    idx: i,
                    data: this.updateDotLayerData(numDots)
                }
            }
        }
        return posData;
    }

}