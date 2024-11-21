import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'DECKS/SET_DECKS': {
      return {
        ...state,
        decks: action.decks,
      }
    }
    case 'DECKS/ADD_DECK': {
      return { ...state, decks: [...state.decks, action.payload.deck] }
    }
    default:
      return state
  }
}

export const setDecksAC = (decks: Deck[]) => {
  return {
    type: 'DECKS/SET_DECKS',
    decks,
  } as const
}

export const addDeckAC = (deck: any) => {
  return {
    type: 'DECKS/ADD_DECK',
    payload: { deck },
  } as const
}

export type setDecksActionType = ReturnType<typeof setDecksAC>
export type addDeckActionType = ReturnType<typeof addDeckAC>

type DecksActions = setDecksActionType | addDeckActionType
