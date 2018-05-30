export default class AlgoRunner {
    constructor (dotPosData, algo) {
        this.dotPosData = dotPosData;
        this.algo = algo;
        this.moveAmount = 0.2;
        this.numMoves = 40;
    }

    // utils
    randomPos () {
        return Math.floor(Math.random()*200);
    }
    squareNum (num) {
        return Math.pow(num, 2);
    }

    findNs () {
        // take allDots array and fill in this.NN and this.NNN 
        // 20164 is based on square root of 2 times 100
        let NNDistanceSqrd = 20164;
        let NNNDistanceSqrd = 20164;

        // find NN
        this.dotPosData.forEach((dot, i) => {
            let iN = dot;
            let iNxDistance = Math.abs(this.xPos - iN.xPos);
            let iNyDistance = Math.abs(this.yPos - iN.yPos);
            let iNDistanceSqrd = squareNum(iNxDistance) + squareNum(iNyDistance);
            // if it's not me
            if (iN.idx !== this.idx) {
                // and NNN has not been set, set both
                if (typeof(this.NNN) == 'undefined') {
                // console.log('should happen once per dot', typeof(this.NNN));
                this.NNN = this;
                // NNNDistanceSqrd = 0;
                this.NN = iN;
                NNDistanceSqrd = iNDistanceSqrd;

                }
                if (iNDistanceSqrd <= NNDistanceSqrd) {
                // console.log('passed NN qualification')
                this.NN = iN;
                NNDistanceSqrd = iNDistanceSqrd;
                }
            }
        });
        // find NNN
        this.dotPosData.forEach((dot) => {
            let iN = dot;
            let iNxDistance = Math.abs(this.xPos - iN.xPos);
            let iNyDistance = Math.abs(this.yPos - iN.yPos);
            let iNDistanceSqrd = squareNum(iNxDistance) + squareNum(iNyDistance);
            // if it's not me
            if (iNDistanceSqrd !== 0) {
                if (NNNDistanceSqrd > iNDistanceSqrd && iNDistanceSqrd > NNDistanceSqrd) {
                // console.log('passed NNN qualification')
                this.NNN = iN;
                NNNDistanceSqrd = iNDistanceSqrd;
                }
            }
        });

    } // end findNs

}


  setTarget () {
    let dot = this;

    // target between NN and NNN /////////////////////////////////////////
    function targetMidPoint () {
      dot.tmx = (dot.NNN.xPos + dot.NN.xPos) * 0.5 ;
      dot.tmy = (dot.NNN.yPos + dot.NN.yPos) * 0.5 ;
    }

    // target center of triangle /////////////////////////////////////////
    function targetCenterOfTriangle () {

      // midpoint
      let p1 = {};
      // target
      let p2 = {};
      // from NN to dot
      let v1 = {};
      // from NNN to dot
      let v2 = {};
      // from p1 to p2
      let v3 = {};

      function findMidPoint () {
        let mx = (dot.NNN.xPos + dot.NN.xPos) * 0.5 ;
        let my = (dot.NNN.yPos + dot.NN.yPos) * 0.5 ;
        return { x:mx, y:my };
      }

      p1 = findMidPoint();
      // console.log(p1);

      function findTarget () {
        v1.x = (dot.xPos - dot.NN.xPos);
        v1.y = (dot.yPos - dot.NN.yPos);
        v2.x = (dot.xPos - dot.NNN.xPos);
        v2.y = (dot.yPos - dot.NNN.yPos);
        v3.x = (v2.x + v1.x) * 0.25;
        v3.y = (v2.y + v1.y) * 0.25;
        p2.x = p1.x - v3.x;
        p2.y = p1.y - v3.y;
      }

      findTarget();
      dot.tcx = p2.x;
      dot.tcy = p2.y;

    }


    // target average magnitude and average angle /////////////////
    function targetAverageVectorAverageMagnitude () {

      // midpoint
      let p1 = {};
      // target
      let p2 = {};
      // from NN to dot
      let v1 = {};
      // from NNN to dot
      let v2 = {};
      // from midpoint to dot
      let v3 = {};
      // mag of NN->NNN applied to v3
      let v4 = {};

      let avgMag = 0;

      function findMidPoint () {
        let mx = (dot.NNN.xPos + dot.NN.xPos) * 0.5 ;
        let my = (dot.NNN.yPos + dot.NN.yPos) * 0.5 ;
        return { x:mx, y:my };
      }

      p1 = findMidPoint();
      // console.log(p1);

      function findTarget () {
        v1.x = dot.xPos - dot.NN.xPos;
        v1.y = dot.yPos - dot.NN.yPos;
        v1.mag = Math.sqrt(squareNum(v1.x)+squareNum(v1.y));
        v2.x = dot.xPos - dot.NNN.xPos;
        v2.y = dot.yPos - dot.NNN.yPos;
        v2.mag = Math.sqrt(squareNum(v2.x)+squareNum(v2.y));
        v3.x = (v2.x + v1.x) * 0.5;
        v3.y = (v2.y + v1.y) * 0.5;
        v3.mag = Math.abs((v1.mag + v2.mag) * 0.5);
        v3.xn = v3.x / v3.mag;
        v3.yn = v3.y / v3.mag;

        v4.mag = Math.sqrt(squareNum(dot.NNN.xPos-dot.NN.xPos)+squareNum(dot.NNN.yPos-dot.NN.yPos));
        v4.x = v3.xn * v4.mag / 2;
        v4.y = v3.yn * v4.mag / 2;
        p2.x = p1.x + v4.x;
        p2.y = p1.y + v4.y;
      }

      findTarget();
      dot.tax = p2.x;
      dot.tay = p2.y;

    }

    // target nearest point to orthogonal of NN->NNN
    function targetNearestPointOrthogonal () {

      // midpoint
      let p1 = {};
      // target
      let p2 = {};
      // closest point on v1 to dot
      let p3 = {};
      // from NN to NNN
      let v1 = {};
      // from NN to p3
      let v1a = {};
      // from NN to dot
      let v2 = {};
      // from p3 to dot
      let v3 = {};

      // v1 normalized
      let v1n = {};

      // v2 normalized
      let v2n = {};

      function findMidPoint () {
        let mx = (dot.NNN.xPos + dot.NN.xPos) * 0.5 ;
        let my = (dot.NNN.yPos + dot.NN.yPos) * 0.5 ;
        return { x:mx, y:my };
      }

      p1 = findMidPoint();
      // console.log(p1);

      function findTarget () {
        // NN to NNN
        v1.x = dot.NNN.xPos - dot.NN.xPos;
        v1.y = dot.NNN.yPos - dot.NN.yPos;
        v1.mag = Math.sqrt(squareNum(v1.x)+squareNum(v1.y));
        v1n.x = v1.x / v1.mag;
        v1n.y = v1.y / v1.mag;
        // NN to dot
        // here we can determine which quadrant is NN in compared to dot
        // the process for getting p3 will be determined by the quadrant unfortunately
        v2.x = dot.xPos - dot.NN.xPos;
        v2.y = dot.yPos - dot.NN.yPos;
        v2.mag = Math.sqrt(squareNum(v2.x)+squareNum(v2.y));
        v2n.x = v2.x / v2.mag;
        v2n.y = v2.y / v2.mag;
        // dot product normalized vectors
        // let dp = Math.abs(v1n.x * v2n.x + v1n.y * v2n.y);
        let dp = v1n.x * v2n.x + v1n.y * v2n.y;

        let theta = Math.acos(dp);

        // having angle theta and hypoteneuse v2, we can get length of adjacent
        let cosTheta = Math.cos(theta);
        let adjacent = cosTheta * v2.mag;

        // this will give us p3, closest point to dot on v1
        v1a.mag = adjacent;
        v1a.x = v1n.x * v1a.mag;
        v1a.y = v1n.y * v1a.mag;
        p3.x = dot.NN.xPos + v1a.x;
        p3.y = dot.NN.yPos + v1a.y;

        v3.x = dot.xPos - p3.x;
        v3.y = dot.yPos - p3.y;

        p2.x = p1.x + v3.x;
        p2.y = p1.y + v3.y;


      }

      findTarget();
      dot.tox = p2.x;
      dot.toy = p2.y;

    }

    ///// end of target strategies

    function targetSomewhere () {

      // removes disconnected dots
      // exclusionary unless i do the half magnitude..  should make some 30 60 90s i think
      // dot.tx = dot.tax;
      // dot.ty = dot.tay;

      // tmx tmy is similar...
      // dot.tx = dot.tcx;
      // dot.ty = dot.tcy;

      // hard to believe he's different than tcx, maybe less gradients and curves, more angles
      // dot.tx = dot.tmx;
      // dot.ty = dot.tmy;

      // this should be the original algo
      // dot.tx = dot.tox;
      // dot.ty = dot.toy;

      // dot.tx = (dot.tax*8 + dot.tmx*0 + dot.tcx*2) * 0.1; // 10 / 10
      // dot.ty = (dot.tay*9 + dot.tmy*0 + dot.tcy+2) * 0.1; // 13 / 10

      dot.tx = (dot.tox*18 + dot.tcx*1 + dot.tax*1) * 0.05; // 10 / 10
      dot.ty = (dot.toy*18 + dot.tcy+1 + dot.tay*1) * 0.05; // 10 / 10

    }

    targetMidPoint();
    targetCenterOfTriangle();
    targetAverageVectorAverageMagnitude();
    targetNearestPointOrthogonal();
    targetSomewhere();

  }

  moveTowardTarget () {
    // app has a moveAmount constant that slowly moves you toward target
    // console.log('move called');
    this.xPos = this.xPos + (this.tx - this.xPos) * moveAmount;
    this.yPos = this.yPos + (this.ty - this.yPos) * moveAmount;

    this.JQ.css({"left": `${this.xPos}%`});
    this.JQ.css({"top": `${this.yPos}%`});

  }

} // end Dot class