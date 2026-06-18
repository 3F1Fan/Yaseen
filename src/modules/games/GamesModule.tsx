import { Routes, Route, Link, useParams } from 'react-router-dom'
import { games, getGame } from './registry'
import PlayCount from './PlayCount'

function GamesGrid() {
  return (
    <div className="page">
      <header className="page-header">
        <Link to="/" className="back">← Home</Link>
        <h1>🎮 Games</h1>
        <p className="subtitle">Pick a game to play.</p>
      </header>

      <div className="grid">
        {games.map((game) => (
          <Link key={game.id} to={`/games/${game.id}`} className="card">
            <span className="card-icon">{game.thumbnail}</span>
            <h2>{game.title}</h2>
            <p>{game.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

function GamePlayer() {
  const { gameId } = useParams()
  const game = gameId ? getGame(gameId) : undefined

  if (!game) {
    return (
      <div className="page">
        <Link to="/games" className="back">← Games</Link>
        <h1>Game not found</h1>
      </div>
    )
  }

  const GameComponent = game.component
  return (
    <div className="game-stage">
      <div className="game-bar">
        <Link to="/games" className="back">← Games</Link>
        <span className="game-title">{game.title}</span>
        <PlayCount gameId={game.id} />
      </div>
      <div className="game-canvas">
        <GameComponent />
      </div>
    </div>
  )
}

export default function GamesModule() {
  return (
    <Routes>
      <Route index element={<GamesGrid />} />
      <Route path=":gameId" element={<GamePlayer />} />
    </Routes>
  )
}
