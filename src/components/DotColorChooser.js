// based from: improves upon?
// https://codepen.io/_danko/pen/JKaxKE?editors=0010

import React, { Component } from 'react';
import MiniSlider from './MiniSlider.js';
import './MiniSlider.scss';

export default class DotColorChooser extends Component {
    constructor(props) {
        super(props);

        this.layer = this.props.layerNum;
        this.type = this.props.type;
        this.className = (this.type==="inner-color" ? "DotColorChooser1" : "DotColorChooser2" );
        this.dotColor = (this.type==="inner-color" ? this.props.data.layers[this.layer-1].dotColor1 : this.props.data.layers[this.layer-1].dotColor2 );
        this.updateColor = (this.type==="inner-color" ? this.props.data.updateDotColor1 : this.props.data.updateDotColor2 );
        this.state = {
            expanded: false,
            dotColor: this.dotColor,
            red: 0,
            green: 0,
            blue: 0,
            alpha: 1
        };

        this.changeDotColor = this.changeDotColor.bind(this);
        this.updateRed = this.updateRed.bind(this);
        this.updateGreen = this.updateGreen.bind(this);
        this.updateBlue = this.updateBlue.bind(this);
        this.updateAlpha = this.updateAlpha.bind(this);

    }

    changeDotColor(color,layer) {
        this.setState({
            dotColor: color
        }, this.updateColor(color,layer) )
    }
    changeOuterOpacity(val,layer) {
        this.props.data.updateOuterOpacity(val,layer);
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
            this.changeOuterOpacity(val,this.layer);
        })
    }

    render() {
        let layer = this.layer;
        let red = `red-${layer}`;
        let green = `green-${layer}`;
        let blue = `blue-${layer}`;
        let alpha = `alpha-${layer}`;
    
        return (
        <div className={this.className}>
            <div className="dc-heading" style={{backgroundColor: `${this.state.dotColor}`}}>DOT COLOR</div>        
            <MiniSlider ref={red} min="0" max="255" channel="red" val={this.state.red} update={this.updateRed} >{this.state.red}</MiniSlider>         
            <MiniSlider ref={green} min="0" max="255" channel="green" val={this.state.green} update={this.updateGreen} >{this.state.green}</MiniSlider> 
            <MiniSlider ref={blue} min="0" max="255" channel="blue" val={this.state.blue} update={this.updateBlue} >{this.state.blue}</MiniSlider>
            <MiniSlider ref={alpha} min="0" max="1" channel="alpha" step="0.01" val={this.state.alpha} update={this.updateAlpha} >{this.state.alpha}</MiniSlider>
        </div>
        );
    }
}