import { Dispatch } from 'redux'
import { decksApi } from './decks-api.ts'
import { setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksApi.getDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}

export const addDeckTC = (name: string) => (dispatch: Dispatch) => {
  decksApi.addDeck(name).then((res) => {
    console.log(res)
    //dispatch(setDecksAC(res.data))
  })
}
