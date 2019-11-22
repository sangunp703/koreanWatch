import React, {Component} from 'react'
import styled from 'styled-components'
import Word from './word'

const StyledMinute = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
`
const wordListBig = [
  [2],
  [3],
  [4],
  [5],
  [1,2,3,4,5]
]
const wordListSmall = [
  [1],
  [2],
  [3],
  [4],
  [5],
  [6],
  [7],
  [8],
  [9],
  [0,1,2,3,4,5,6,7,8,9]
]

export default class Minute extends Component {
  constructor(props){
    super(props)
  }
  componentWillUpdate(){
    const minute = document.querySelector('.minute')
    const words = minute.querySelectorAll('.word')
    for(let i = 0; i < words.length; i++){
      words[i].classList.remove("active")
      if(i < 5){
        if(wordListBig[i].includes(parseInt(this.props.time.getSeconds() / 10))){
          if(this.props.time.getHours()%12 !== 0 || this.props.time.getSeconds() !== 0){  // 0시 0분인 경우 표현 안함
            words[i].classList.add("active")
          }
        }
      } else{
        if(wordListSmall[i-5].includes(parseInt(this.props.time.getSeconds() % 10))){
          if(this.props.time.getHours()%12 !== 0 || this.props.time.getSeconds() !== 0){  // 0시 0분인 경우 표현 안함
            words[i].classList.add("active")
          }
        }
      }
    }
    minute.querySelectorAll('.active').forEach((e) => {
      e.style.color = 'white'
    })
  }
  render(){
    return (
      <StyledMinute className="minute">
        <Word word="이"/>
        <Word word="삼"/>
        <Word word="사"/>
        <Word word="오"/>
        <Word word="십"/>
        <Word word="일"/>
        <Word word="이"/>
        <Word word="삼"/>
        <Word word="사"/>
        <Word word="오"/>
        <Word word="육"/>
        <Word word="칠"/>
        <Word word="팔"/>
        <Word word="구"/>
        <Word word="분"/>
      </StyledMinute>
    )
  }
}