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
  addDeck(params: AddDeckParams) {
    return instance.post<Deck>('v1/decks', params)
  },
  deleteDeck(id: string) {
    return instance.delete<Deck>(`v1/decks/${id}`)
  },
  updateDeck({ id, name }: UpdateDeckParams) {
    return instance.patch<Deck>(`v1/decks/${id}`, { name })
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

//export type addDeckResponse = Omit<Deck, 'isFavorite'>

export type AddDeckParams = {
  name: string
}

export type UpdateDeckParams = {
  id: string
  name: string
}
