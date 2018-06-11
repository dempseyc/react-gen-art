// based from: improves upon?
// https://codepen.io/_danko/pen/JKaxKE?editors=0010

import React, { Component } from 'react';
import MiniSlider from './MiniSlider.js';
import './MiniSlider.scss';

export default class DotColorChooser extends Component {
    constructor(props) {
        super(props);

        this.layer = this.props.layerNum;

        this.state = {
            expanded: false,
            dotColor: this.props.data.layers[this.layer-1].dotColor,
            red: 165,
            green: 57,
            blue: 230,
            alpha: 1
        };

        this.changeDotStyle = this.changeDotStyle.bind(this);
        this.changeDotColor = this.changeDotColor.bind(this);
        this.updateRed = this.updateRed.bind(this);
        this.updateGreen = this.updateGreen.bind(this);
        this.updateBlue = this.updateBlue.bind(this);
        this.updateAlpha = this.updateAlpha.bind(this);

    }

    changeDotStyle(style,layer) {
        // from update props.data up to container
        this.setState({
            dotStyle: style
        }, this.props.data.updateDotStyle(style,layer) )
    }

    changeDotColor(color,layer) {
        this.setState({
            dotColor: color
        }, this.props.data.updateDotColor(color,layer) )
    }

    updateRed(e) {
        let val = e.target.value;
        let dc = `rgba(${val}, ${this.state.green}, ${this.state.blue}, ${this.state.alpha})`;
        this.setState({
            dotColor: dc,
            red: val
        }, () => {
            this.changeDotColor(dc,this.layer);
        })
    }

    updateGreen(e) {
        let val = e.target.value;
        let dc = `rgba(${this.state.red}, ${val}, ${this.state.blue}, ${this.state.alpha})`;
        this.setState({
            dotColor: dc,
            green: val
        }, () => {
            this.changeDotColor(dc,this.layer);
        })
    }

    updateBlue(e) {
        let val = e.target.value;
        let dc = `rgba(${this.state.red}, ${this.state.green}, ${val}, ${this.state.alpha})`;
        this.setState({
            dotColor: dc,
            blue: val
        }, () => {
            this.changeDotColor(dc,this.layer);
        })
    }

    updateAlpha(e) {
        let val = e.target.value;
        let dc = `rgba(${this.state.red}, ${this.state.green}, ${this.state.blue}, ${val})`;
        this.setState({
            dotColor: dc,
            alpha: val
        }, () => {
            this.changeDotColor(dc,this.layer);
        })
    }

    render() {
        let layer = this.layer;
        let red = `red-${layer}`;
        let green = `green-${layer}`;
        let blue = `blue-${layer}`;
        let alpha = `alpha-${layer}`;
    
        return (
        <div className="DotColorChooser">
            <div className="dc-heading" style={{backgroundColor: `${this.state.dotColor}`}}>DOT COLOR</div>        
            <MiniSlider ref={red} min="0" max="255" channel="red" val={this.state.red} update={this.updateRed} >{this.state.red}</MiniSlider>         
            <MiniSlider ref={green} min="0" max="255" channel="green" val={this.state.green} update={this.updateGreen} >{this.state.green}</MiniSlider> 
            <MiniSlider ref={blue} min="0" max="255" channel="blue" val={this.state.blue} update={this.updateBlue} >{this.state.blue}</MiniSlider>
            <MiniSlider ref={alpha} min="0" max="1" channel="alpha" step="0.01" val={this.state.alpha} update={this.updateAlpha} >{this.state.alpha}</MiniSlider>
        </div>
        );
    }
}