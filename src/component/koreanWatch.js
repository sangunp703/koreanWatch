import React, { Component } from 'react'
import Word from './word'
import styled from 'styled-components'
import Additory from './additory'
import Hour from './hour'
import Minute from './minute'
import SquareSecond from './squareSecond'

const StyledKoreanWatch = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 1fr;
`

const testHour = 20
const testMin = 46
const testSec = 50

const test = '2019/11/23/' + testHour + ':' + testMin + ':' + testSec

export default class KoreanWatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date()
    }
  }
  componentDidMount() {
    setInterval((err, res) => {
      this.setState({
        time: new Date()
      })
    }, 1000)
  }
  render() {
    return (
      <div>
        <SquareSecond time={this.state.time} />
        <StyledKoreanWatch>
          <Additory time={this.state.time} />
          <Hour time={this.state.time} />
          <Minute time={this.state.time} />
        </StyledKoreanWatch>
      </div>
    )
  }
}
