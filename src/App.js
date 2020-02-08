import React from 'react';
import { CardCarousel } from './components/CardCarousel';
import RedCorner from './components/RedCorner';
import BlueCorner from './components/BlueCorner';
import { useSelector, useDispatch } from 'react-redux';
import { fight } from './redux';

function App() {
  const dispatch = useDispatch()
  const winner = useSelector(state=> state.isWinner)

  return (
    <div className="App">
      <CardCarousel />
      <div style={{display: 'flex', width: '35%', margin: 'auto', marginTop: '50px', justifyContent: 'space-between'}}>
        <RedCorner />
        <BlueCorner />
      </div>
      <button style={{marginLeft: '48%', fontSize: '20px', marginTop: '10px'}} onClick={()=> dispatch(fight())}>FIGHT</button>
      {winner.map(card => <img src={card.imageUrl} alt={'winner'} key={card.id} style={{display: 'block', margin:'auto', marginTop: '50px'}}/>)}
    </div>
  );
}

export default App;
