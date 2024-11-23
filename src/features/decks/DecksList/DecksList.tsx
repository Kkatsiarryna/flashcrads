import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDecks } from './useFetchDecks.ts'
import { DeckItemSkeleton } from './DeckItem/DeckItemSkeleton.tsx'

export const DecksList = () => {
  const { decks, isLoading } = useFetchDecks()
  return (
    <>
      <ul className={s.list}>
        {/*{isLoading && <Skeleton height={100} count={10} style={{ marginBottom: '10px' }} />}*/}
        {isLoading && decks.decks.length === 0 && <DeckItemSkeleton count={10} />}
        {decks.decks.map((deck) => {
          return <DeckItem key={deck.id} deck={deck} />
        })}
      </ul>
    </>
  )
}
