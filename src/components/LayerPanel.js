import React, { Component } from 'react';

export default class LayerPanel extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            amActive: "am-not"
        })

        this.activeLayer = this.props.activeLayer;
        
        this.myStatus = this.reportMyStatus(this.activeLayer);
        this.reportMyStatus = this.reportMyStatus.bind(this);
        this.updateMyStatus = this.updateMyStatus.bind(this);

    }

    componentDidMount() {
        this.updateMyStatus();
    }
    
    updateMyStatus() {
        if (this.props.layerIdx===this.activeLayer) {
            this.setState({
                amActive: "am"
            })
        } else {
            this.setState({
                amActive: "am-not"
            })
        }
    }

    reportMyStatus() {
        if (this.props.layerIdx===this.activeLayer) {
            console.log(`my idx is ${this.props.layerIdx} and i am active`);
        } else {
            console.log(`my idx is ${this.props.layerIdx} and i am-not active`);
        }
    }

    render() {
        // let classnames = `LayerPanel-${this.props.layerIdx} active-${this.state.amActive}`;
        let classnames = `LayerPanel-${this.props.layerIdx} active-${this.myStatus}`;

        return (
            <div  
            className={ classnames }
            >
                <p>I am layer Panel {this.props.layerIdx}</p>
            </div>
        )
    }
}