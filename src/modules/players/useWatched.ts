import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'watchedPlayers'

/**
 * Tracks which players have been watched, persisted to the browser's
 * localStorage (per device, no login needed). Returns the watched map, a
 * toggle function, and the count.
 */
export function useWatched() {
  const [watched, setWatched] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watched))
  }, [watched])

  const toggle = useCallback((id: string) => {
    setWatched((prev) => {
      const next = { ...prev }
      if (next[id]) delete next[id]
      else next[id] = true
      return next
    })
  }, [])

  const count = Object.keys(watched).length

  return { watched, toggle, count }
}
