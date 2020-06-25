import React from 'react'
import './Buttons.css'

export const Buttons = (props) => {
  return (
    <div id='Buttons'>
      <div className='left'>
      <a className='button' target='_black' href='https://vk.com/'>
        <i className="fa fa-vk icon" aria-hidden="true"></i> 
      </a>
      </div>

      <div className='right'>
        <button className='button new-quote'>New quote</button>
      </div>
      
    </div>
  )
}