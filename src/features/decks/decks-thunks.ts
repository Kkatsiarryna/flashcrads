import { Dispatch } from 'redux'
import { AddDeckParams, decksApi, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksApi.getDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}

export const addDeckTC = (params: AddDeckParams) => async (dispatch: Dispatch) => {
  return decksApi.addDeck(params).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksApi.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  return decksApi.updateDeck(params).then((res) => {
    dispatch(updateDeckAC(res.data))
  })
}
