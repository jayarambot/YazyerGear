import React from 'react'
import cardData from './cardData'
import Card from './Card'

function createCard(cardTerm){
   
   return(
    <Card
    key = {cardTerm.id}
    detail = {cardTerm.detail}
    image   = {cardTerm.image}
    />
   );
}

function CardContainer() {
  return (
    <div>
         <h1>Gearmerit</h1>
         <h1>Used Car Evaluatio</h1>
        {cardData.map(createCard)}
    </div>
  )
}

export default CardContainer