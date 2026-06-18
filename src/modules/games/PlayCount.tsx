import { useEffect, useState } from 'react'
import {
  doc,
  onSnapshot,
  setDoc,
  increment,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../../firebase'

/**
 * Records and displays how many times a game has been opened, stored in
 * Firestore at gameStats/{gameId}. This is a small proof that the database
 * works — open a game and watch the count rise (and appear in the Firebase
 * console). Fails quietly if the database isn't reachable yet.
 */
export default function PlayCount({ gameId }: { gameId: string }) {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const ref = doc(db, 'gameStats', gameId)

    // Count this play (create the doc if missing, otherwise +1).
    setDoc(
      ref,
      { count: increment(1), lastPlayed: serverTimestamp() },
      { merge: true },
    ).catch((err) => console.error('Failed to record play:', err))

    // Live-update the displayed count.
    const unsubscribe = onSnapshot(
      ref,
      (snap) => setCount((snap.data()?.count as number | undefined) ?? 0),
      (err) => console.error('Failed to read play count:', err),
    )

    return unsubscribe
  }, [gameId])

  if (count === null) return null

  return (
    <span className="play-count" title="Times played (saved in Firestore)">
      ▶ {count}
    </span>
  )
}
