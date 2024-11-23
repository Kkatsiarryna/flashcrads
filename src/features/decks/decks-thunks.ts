import { Dispatch } from 'redux'
import { AddDeckParams, decksApi, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setAppStatusAC } from '../../app/app-reducer.ts'
import { handleAppError } from '../../common/utils/handle-error.ts'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))
  try {
    const res = await decksApi.getDecks()
    dispatch(setAppStatusAC('succeeded'))
    dispatch(setDecksAC(res.data.items))
  } catch (e) {
    dispatch(setAppStatusAC('failed'))
  }
}

// export const fetchDecksTC = () => (dispatch: Dispatch) => {
//   dispatch(setAppStatusAC('loading'))
//   decksApi
//     .getDecks()
//     .then((res) => {
//       dispatch(setAppStatusAC('succeeded'))
//       dispatch(setDecksAC(res.data.items))
//     })
//     .catch(() => {
//       dispatch(setAppStatusAC('failed'))
//     })
// }

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
  try {
    // throw new Error('native error')
    const res = await decksApi.updateDeck(params)
    dispatch(updateDeckAC(res.data))
  } catch (err) {
    handleAppError(err, dispatch)
  }
}

// export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
//   return decksApi.updateDeck(params).then((res) => {
//     dispatch(updateDeckAC(res.data))
//   })
// }
