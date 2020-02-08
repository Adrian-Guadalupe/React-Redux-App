import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeRedCard } from '../redux'

const RedCorner = () => {
   const redCorner = useSelector(state => state.redCorner)
   const dispatch = useDispatch()

   return (
      <div style={{borderBottom: '4px solid red'}} onClick={()=> dispatch(removeRedCard())}>
         {redCorner.map(card=> <img key={card.id} alt={card.name} src={card.imageUrl} />)}
      </div>
   )
}

export default RedCorner;