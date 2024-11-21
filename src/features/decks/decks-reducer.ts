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
      return { ...state, decks: [action.payload.deck, ...state.decks] }
    }
    case 'DECKS/DELETE-DECK':
      return {
        ...state,
        decks: state.decks.filter((deck) => deck.id !== action.id),
      }
    case 'DECKS/UPDATE-DECK':
      return {
        ...state,
        decks: state.decks.map((deck) => (deck.id === action.updatedDeck.id ? action.updatedDeck : deck)),
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

export const addDeckAC = (deck: Deck) => {
  return {
    type: 'DECKS/ADD_DECK',
    payload: { deck },
  } as const
}

export const deleteDeckAC = (id: string) => ({
  type: 'DECKS/DELETE-DECK' as const,
  id,
})

export const updateDeckAC = (updatedDeck: Deck) => ({
  type: 'DECKS/UPDATE-DECK' as const,
  updatedDeck,
})

export type setDecksActionType = ReturnType<typeof setDecksAC>
export type addDeckActionType = ReturnType<typeof addDeckAC>
export type deleteDeckActionType = ReturnType<typeof deleteDeckAC>
export type updateDeckActionType = ReturnType<typeof updateDeckAC>

type DecksActions = setDecksActionType | addDeckActionType | deleteDeckActionType | updateDeckActionType
