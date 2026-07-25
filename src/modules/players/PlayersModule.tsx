import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { players } from './data'
import { useWatched } from './useWatched'

type Filter = 'all' | 'todo' | 'done'

export default function PlayersModule() {
  const { watched, toggle, count } = useWatched()
  const [filter, setFilter] = useState<Filter>('all')

  const visible = useMemo(() => {
    if (filter === 'done') return players.filter((p) => watched[p.id])
    if (filter === 'todo') return players.filter((p) => !watched[p.id])
    return players
  }, [filter, watched])

  const pct = Math.round((count / players.length) * 100)

  return (
    <div className="page">
      <header className="players-header">
        <Link to="/" className="back">← Home</Link>
        <h1>⚽ Top 100 Players</h1>
        <p className="subtitle">
          The greatest footballers ever. Tap <strong>Watch</strong> for
          highlights on YouTube, then tick the ones you've seen.
        </p>

        <div className="progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="progress-label">
            {count} / {players.length} watched
          </span>
        </div>

        <div className="filters">
          <button
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={filter === 'todo' ? 'active' : ''}
            onClick={() => setFilter('todo')}
          >
            Must watch ({players.length - count})
          </button>
          <button
            className={filter === 'done' ? 'active' : ''}
            onClick={() => setFilter('done')}
          >
            Watched ({count})
          </button>
        </div>
      </header>

      <ul className="player-list">
        {visible.map((p) => {
          const done = !!watched[p.id]
          return (
            <li key={p.id} className={`player-row ${done ? 'done' : ''}`}>
              <span className="player-rank">{p.rank}</span>
              <div className="player-info">
                <span className="player-name">{p.name}</span>
                <span className="player-country">
                  {p.country} · Peak {p.peak}
                </span>
              </div>
              <a
                className="watch-btn"
                href={p.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶ Watch
              </a>
              <label className="watched-toggle">
                <input
                  type="checkbox"
                  checked={done}
                  onChange={() => toggle(p.id)}
                />
                <span>{done ? 'Watched' : 'Mark'}</span>
              </label>
            </li>
          )
        })}
      </ul>

      {visible.length === 0 && (
        <p className="empty-note">Nothing here yet — go watch some legends! ⚽</p>
      )}
    </div>
  )
}
