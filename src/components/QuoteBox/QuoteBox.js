import React from 'react'
import './QuoteBox.css'
import { Buttons } from '../Buttons/Buttons'


export const QuoteBox = (props) => {
  return (
    <div id='quote-box'>
      <div id='quote-text'>
        <i className="fas fa-quote-left"></i>
        <span id='text'>Цитата</span>
      </div>

      <div id='quote-author'>
        <span id='author'>- Автор цитаты</span>
      </div>
      
      <Buttons />
    </div>
  )
}