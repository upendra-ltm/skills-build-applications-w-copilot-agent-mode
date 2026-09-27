import { Link, Route, Routes } from 'react-router-dom'
import octofitLogo from '../../../docs/octofitapp-small.png'

function App() {
  return (
    <div className="app-shell">
      <header className="navbar navbar-expand bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center gap-2 fw-semibold" to="/">
            <img src={octofitLogo} alt="" width="40" height="40" />
            OctoFit Tracker
          </Link>
          <span className="navbar-text">Activity and team fitness</span>
        </div>
      </header>
      <main className="container py-5">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <p className="text-uppercase small fw-semibold text-success mb-2">
                  Your fitness workspace
                </p>
                <h1 className="display-5 fw-semibold">Make every move count.</h1>
                <p className="lead text-secondary mt-3">
                  Track activities, build your team, and see your progress take shape.
                </p>
              </>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App