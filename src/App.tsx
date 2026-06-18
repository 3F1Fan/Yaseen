import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import { modules } from './modules/registry'

function NotFound() {
  return (
    <div className="page">
      <h1>Page not found</h1>
      <Link to="/" className="back">← Home</Link>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {modules.map((mod) => {
        const ModuleComponent = mod.component
        // Wildcard so each module can own its own nested routes.
        return (
          <Route
            key={mod.id}
            path={`/${mod.id}/*`}
            element={<ModuleComponent />}
          />
        )
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
