import { useEffect, useState } from 'react';
import { fetchCollection } from '../api';

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/';

function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCollection(leaderboardEndpoint).then(setEntries).catch((loadError) => setError(loadError.message));
  }, []);

  return (
    <section>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Friendly competition</p>
          <h1>Leaderboard</h1>
        </div>
        <span className="count-chip">This week</span>
      </div>
      {error && <div className="alert alert-warning">{error}</div>}
      <div className="leaderboard-list">
        {entries.map((entry, index) => (
          <article className={`leaderboard-row ${index === 0 ? 'leaderboard-row-top' : ''}`} key={entry._id || entry.id || entry.rank}>
            <span className="rank">{entry.rank || index + 1}</span>
            <div className="flex-grow-1">
              <h2>{entry.user?.displayName || entry.user?.username || 'Member'}</h2>
              <p className="muted mb-0">{entry.team?.name || 'Independent'}</p>
            </div>
            <strong className="points">{entry.points} pts</strong>
          </article>
        ))}
      </div>
      {!error && entries.length === 0 && <p className="empty-state">No leaderboard entries yet.</p>}
    </section>
  );
}

export default Leaderboard;
