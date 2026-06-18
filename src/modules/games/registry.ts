import type { ComponentType } from 'react'

/**
 * A Game lives inside the Games module. Add a new game by creating a
 * component and registering it here — it shows up in the games grid and
 * gets a route at /games/:id automatically.
 */
export interface Game {
  /** URL slug, e.g. "spinning-cube" -> /games/spinning-cube */
  id: string
  /** Display name */
  title: string
  /** Short description */
  description: string
  /** Emoji thumbnail (swap for an <img> thumbnail later) */
  thumbnail: string
  /** The playable component */
  component: ComponentType
}

import SpinningCube from './SpinningCube/SpinningCube'

export const games: Game[] = [
  {
    id: 'spinning-cube',
    title: 'Spinning Cube',
    description: 'A demo 3D scene — proof the WebGL/Three.js pipeline works.',
    thumbnail: '🧊',
    component: SpinningCube,
  },
  // Add more games here. For Poki-style 3D games, build with @react-three/fiber
  // or drop a Unity/Godot WebGL export into /public and embed it in an <iframe>.
]

export function getGame(id: string): Game | undefined {
  return games.find((g) => g.id === id)
}
