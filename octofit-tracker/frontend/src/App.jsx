import { Link, NavLink, Route, Routes } from 'react-router-dom'
import octofitLogo from '../../../docs/octofitapp-small.png'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="container d-flex align-items-center justify-content-between gap-4">
          <Link className="brand d-flex align-items-center gap-2" to="/">
            <img src={octofitLogo} alt="" width="42" height="42" />
            <span>OctoFit <em>Tracker</em></span>
          </Link>
          <span className="header-note d-none d-md-inline">Move well. Move together.</span>
        </div>
      </header>
      <div className="container app-layout">
        <aside className="sidebar">
          <p className="sidebar-label">Workspace</p>
          <nav className="nav flex-column gap-1" aria-label="Primary navigation">
            <NavLink className="side-link" to="/" end>Overview</NavLink>
            <NavLink className="side-link" to="/activities">Activities</NavLink>
            <NavLink className="side-link" to="/leaderboard">Leaderboard</NavLink>
            <NavLink className="side-link" to="/teams">Teams</NavLink>
            <NavLink className="side-link" to="/users">Members</NavLink>
            <NavLink className="side-link" to="/workouts">Workouts</NavLink>
          </nav>
        </aside>
        <main className="content-area">
        <Routes>
          <Route
            path="/"
            element={
              <section className="overview">
                <p className="eyebrow">Your fitness workspace</p>
                <h1>Make every move count.</h1>
                <p className="overview-copy">Track activities, build your team, and see your progress take shape.</p>
                <div className="overview-banner">
                  <div>
                    <p className="eyebrow">Today&apos;s intention</p>
                    <h2>Show up for the next rep.</h2>
                  </div>
                  <Link className="button-link" to="/activities">View activity <span aria-hidden="true">→</span></Link>
                </div>
              </section>
            }
          />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
        </main>
      </div>
    </div>
  )
}

export default App