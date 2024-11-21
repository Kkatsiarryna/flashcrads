import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { decksSelector } from '../decks-selectors.ts'
import { useEffect } from 'react'
import { fetchDecksTC } from '../decks-thunks.ts'

export const useFetchDecks = () => {
  const decks = useAppSelector(decksSelector)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])

  return {
    decks,
  }
}
