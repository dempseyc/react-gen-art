import React, { Component } from 'react';
import './LayerPanel.css';

export default class DotStyleChooser extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.dotStyles = this.props.styleRange;
    this.makeButtons = this.makeButtons.bind(this);
    this.changeDotStyle = this.changeDotStyle.bind(this);
  }
  
  componentDidMount() {
    this.expand();
  }

  makeButtons (dotStyles) {
    return dotStyles.map( (dotStyle, i) => {
      let classnames = `style-button`;
      let CSSstyle = {backgroundImage: `url(images/${dotStyle}.png)`}
        return (<button 
          key={i} 
          style={CSSstyle} 
          className={classnames} 
          onClick={ () => { this.changeDotStyle(dotStyle) } } 
        >{dotStyle}</button>)
    })
  }

  changeDotStyle(style) {
    this.props.data.updateDotStyle(style);
  }

  expand() {
    console.log(this.props.children);
  }

  render() {
    return (
      <div className="DotStyleChooser">
        { this.makeButtons(this.dotStyles) }
      </div>
    )
  }
}