import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBlueCard } from '../redux'

const BlueCorner = () => {
   const blueCorner = useSelector(state => state.blueCorner)
   const dispatch = useDispatch()

   return (
      <div style={{borderBottom: '4px solid blue'}} onClick={()=> dispatch(removeBlueCard())}>
         {blueCorner.map(card=> <img key={card.id} alt={card.name} src={card.imageUrl} />)}
      </div>
   )
}

export default BlueCorner;