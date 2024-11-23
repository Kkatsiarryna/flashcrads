import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { decksSelector } from '../decks-selectors.ts'
import { useEffect, useLayoutEffect, useState } from 'react'
import { fetchDecksTC } from '../decks-thunks.ts'

export const useFetchDecks = () => {
  const decks = useAppSelector(decksSelector)
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)

  useLayoutEffect(() => {
    setIsLoading(true)
    dispatch(fetchDecksTC()).finally(() => setIsLoading(false))
  }, [dispatch])

  return {
    decks,
    isLoading,
  }
}
