import { createStore } from 'redux';

const initialState = {
   redCorner: [],
   blueCorner: [],
   isSelected: true,
   isWinner: [],
}

export const addCard = (card) => {
   return {
      type: 'ADD_CARD',
      payload: card
   }
}

export const removeRedCard = () => {
   return {
      type: 'REMOVE_RED_CARD',
   }
}

export const removeBlueCard = () => {
   return {
      type: 'REMOVE_BLUE_CARD',
   }
}

export const fight = () => {
   return {
      type: 'FIGHT'
   }
}

const reducer = (state = initialState, action) => {
   switch(action.type) {
      case 'ADD_CARD':
         if (state.redCorner.length === 0) {
            return {
               ...state,
               redCorner: [
                  ...state.redCorner,
                  action.payload
               ]
            }
         } else if (state.blueCorner.length === 0) {
            return {
               ...state,
               blueCorner: [
                  ...state.blueCorner,
                  action.payload
               ]
            }
         }
         return state
      case 'REMOVE_RED_CARD':
         return {
            ...state,
            redCorner: []
         }
      case 'REMOVE_BLUE_CARD':
         return {
            ...state,
            blueCorner: []
         }
      case "FIGHT":
         const redHP = state.redCorner.map(card => card.hp)
         console.log(redHP)
         const blueHP = state.blueCorner.map(card => card.hp)
         console.log(blueHP)
         if (redHP > blueHP) {
            return {
               ...state,
               isWinner: state.redCorner
            }
         } else if (blueHP > redHP) {
            return {
               ...state,
               isWinner: state.blueCorner
            }
         }
         return 'pick eligible fighters'
      default: return state
   }
}

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
export default store;