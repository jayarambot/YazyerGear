import React from 'react'
import '../components/card.css'
import cardData from './cardData'
function Card(props) {
  return (
    <div className='card-container'>
        <div className='card'>
            <h1 className='catogery'>{props.detail}</h1>
            <img className='detail-logo' src={props.image} />
       </div>
    </div>
  )
}

export default Card
