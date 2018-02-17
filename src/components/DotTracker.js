//  constructor takes a number and an array of objs

export default class DotTracker {
    constructor(numLayers, layerData) {
        console.log("has dotTracker", numLayers, layerData);
        this.layerData = layerData;
        this.numLayers = numLayers;
        ///// ^^^^^^^^^^^^^^^^^^^^ replaced by contructor args
        // this.ranPos = this.ranPos.bind(this);
        this.makeDotPosData = this.makeDotPosData.bind(this);
        this.makeDotLayerData = this.makeDotLayerData.bind(this);
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

    reportDotPosData() {
        return this.makeDotPosData();
    }

}