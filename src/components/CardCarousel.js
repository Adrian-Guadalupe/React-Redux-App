import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'slick-carousel/slick/slick.css'
import  Slider  from 'react-slick'
import { useDispatch } from 'react-redux';
import { addCard } from '../redux'; 

export const CardCarousel = () => {
   const dispatch = useDispatch()
   const [pokeCards, setPokeCards] = useState([])
   
   useEffect(() => {
      axios
         .get('https://api.pokemontcg.io/v1/cards')
         .then(res => {
            console.log(res.data.cards)
            setPokeCards(res.data.cards)
         })
         .catch(err => console.log('NOOOOO!!', err))
   }, [])

   const settings = {
      infinite: true,
      speed: 1000,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 4,
   }

   return (
      <div className='container'>
            {pokeCards.length === 0 ? (
               <div className='spinner-border' role='status'>
                  <span className='sr-only'>Loading...</span>
               </div>
            ):(
               <Slider {...settings} style={{width: '70%', margin: 'auto', marginTop: '59px'}}>
                  {pokeCards.map(card => (
                     <div key={card.id} onClick={()=> dispatch(addCard(card))}>
                        <div className='card'>
                           <img alt={'users here'} src={card.imageUrl} />
                        </div>
                     </div>
                  ))}
               </Slider>
            )}
      </div>
   );
}
