import React, { Component } from 'react'

export default class LayerButton extends Component {

    constructor(props) {
        super(props);

        this.state= {
            amActive: this.props.reportActiveLayer(this.props.layerIdx)
        }
        
    }

    componentWillReceiveProps() {
        this.setState({
            amActive: this.props.reportActiveLayer(this.props.layerIdx)
        })
    }

    render() {
        let classnames = `LayerButton-${this.props.layerIdx} active-${this.state.amActive}`;
        return (
            <button className={classnames} onClick={this.props.handleClick}>
                <p>{this.props.layerIdx}</p>
            </button>
        )
    }
}