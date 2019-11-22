import React, {Component} from 'react'
import styled from 'styled-components'
var ProgressBar = require('progressbar.js')

const StyledSquareSecond = styled.svg`
  width: 800px;
  height: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const StyledPath = styled.path`
  fill: none;
  stroke: #111;
  stroke-width: 1;

  &.second{
    stroke: #eee;
  }
  &.shadow{
    stroke: #7f55ff;
    stroke-width: 3;
    filter: url(#dropshadow);
  }
`
var previous = 0

export default class SquareSecond extends Component {
  constructor(props){
    super(props)
  }
  componentWillUpdate(){
    var bar = new ProgressBar.Path('#secondLine', {
      easing: 'linear',
      duration: 1000
    });
    var shadowBar = new ProgressBar.Path('#shadowLine', {
      easing: 'linear',
      duration: 1000
    });
    
    bar.set(previous);
    bar.animate(this.props.time.getSeconds()/60);
    shadowBar.set(previous);
    shadowBar.animate(this.props.time.getSeconds()/60);
    previous = this.props.time.getSeconds()/60
  }
  render(){
    return (
      <StyledSquareSecond xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
        <filter id="dropshadow" x="-5" y="-5" width="10" height="10">
          <feGaussianBlur  stdDeviation="1"/>
        </filter>
        <StyledPath d="m 50 10 h 30 a 10 10 0 0 1 10 10 v 60 a 10 10 0 0 1 -10 10 h -60 a 10 10 0 0 1 -10 -10 v -60 a 10 10 0 0 1 10 -10 h 30 "/>
        <StyledPath id="shadowLine" className="shadow" d="m 50 10 h 30 a 10 10 0 0 1 10 10 v 60 a 10 10 0 0 1 -10 10 h -60 a 10 10 0 0 1 -10 -10 v -60 a 10 10 0 0 1 10 -10 h 30 "/>
	      <StyledPath id="secondLine" className="second" d="m 50 10 h 30 a 10 10 0 0 1 10 10 v 60 a 10 10 0 0 1 -10 10 h -60 a 10 10 0 0 1 -10 -10 v -60 a 10 10 0 0 1 10 -10 h 30 "/>
      </StyledSquareSecond>
    )
  }
}