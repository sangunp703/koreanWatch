import React, {Component} from 'react'
import styled from 'styled-components'
import Word from './word'

const StyledHour = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
`
const wordList = [
  [0,10,11],
  [1,11],
  [0,2],
  [3],
  [5],
  [7],
  [7],
  [4],
  [6],
  [6],
  [8],
  [8],
  [9],
  [9],
  [0,1,2,3,4,5,6,7,8,9,10,11]
]
export default class Hour extends Component {
  constructor(props){
    super(props)
  }
  componentWillUpdate(){
    const hour = document.querySelector('.hour')
    const words = hour.querySelectorAll('.word')
    for(let i = 0; i < words.length; i++){
      words[i].classList.remove("active")
      if(wordList[i].includes(this.props.time.getHours()%12)){
        if(this.props.time.getHours()%12 !== 0 || this.props.time.getMinutes() !== 0){  // 0시 0분인 경우 표현 안함
          words[i].classList.add("active")
        }
      }
    }
  }
  render(){
    return (
      <StyledHour className="hour">
        <Word word="열"/>
        <Word word="한"/>
        <Word word="두"/>
        <Word word="세"/>
        <Word word="다"/>
        <Word word="일"/>
        <Word word="곱"/>
        <Word word="네"/>
        <Word word="여"/>
        <Word word="섯"/>
        <Word word="여"/>
        <Word word="덟"/>
        <Word word="아"/>
        <Word word="홉"/>
        <Word word="시"/>
      </StyledHour>
    )
  }
}