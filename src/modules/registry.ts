import type { ComponentType } from 'react'

/**
 * A Module is a top-level area of the app (e.g. Games, Reading, Numbers).
 * Add a new module by appending an entry to the `modules` array below and
 * pointing it at a React component. Routing and the home screen pick it up
 * automatically — no other wiring needed.
 */
export interface AppModule {
  /** URL slug, e.g. "games" -> /games */
  id: string
  /** Display name shown on the home screen */
  title: string
  /** One-line description for the home card */
  description: string
  /** Emoji or short icon used on the home card */
  icon: string
  /** Accent color for the card */
  color: string
  /** The component rendered at /:id */
  component: ComponentType
}

// Lazy-free, explicit registry. Import the module's entry component here.
import GamesModule from './games/GamesModule'

export const modules: AppModule[] = [
  {
    id: 'games',
    title: 'Games',
    description: 'Fun 3D and arcade games to play.',
    icon: '🎮',
    color: '#7c5cff',
    component: GamesModule,
  },
  // Add more modules here, e.g. Reading, Numbers, Drawing...
]

export function getModule(id: string): AppModule | undefined {
  return modules.find((m) => m.id === id)
}
