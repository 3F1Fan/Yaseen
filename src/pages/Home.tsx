import { Link } from 'react-router-dom'
import { modules } from '../modules/registry'

export default function Home() {
  return (
    <div className="page">
      <header className="home-header">
        <h1>Yaseen's App</h1>
        <p className="subtitle">You'll Never Walk Alone ⚽</p>
      </header>

      <div className="grid">
        {modules.map((mod) => (
          <Link
            key={mod.id}
            to={`/${mod.id}`}
            className="card"
            style={{ borderColor: mod.color }}
          >
            <span className="card-icon">{mod.icon}</span>
            <h2>{mod.title}</h2>
            <p>{mod.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
