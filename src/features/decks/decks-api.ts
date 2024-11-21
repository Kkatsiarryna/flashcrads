import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks() {
    return instance.get<DecksResponse>('v2/decks')
  },
  addDeck(name: string) {
    return instance.post<addDeckResponse>('v1/decks', { name })
  },
}

export type DecksResponse = {
  items: Deck[]
  pagination: Pagination
}
export type Author = {
  id: string
  name: string
}
export type Deck = {
  isFavorite: boolean
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}
export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type addDeckResponse = Omit<Deck, 'isFavorite'>
