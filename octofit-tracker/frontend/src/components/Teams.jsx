import { useEffect, useState } from 'react';
import { fetchCollection } from '../api';

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCollection(teamsEndpoint).then(setTeams).catch((loadError) => setError(loadError.message));
  }, []);

  return (
    <section>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Collective effort</p>
          <h1>Teams</h1>
        </div>
        <span className="count-chip">{teams.length} groups</span>
      </div>
      {error && <div className="alert alert-warning">{error}</div>}
      <div className="row g-3">
        {teams.map((team) => (
          <div className="col-md-6" key={team._id || team.id || team.name}>
            <article className="data-card h-100">
              <p className="eyebrow">Team</p>
              <h2>{team.name}</h2>
              <p className="muted mb-3">{team.description}</p>
              <span className="member-count">{team.members?.length || 0} members</span>
            </article>
          </div>
        ))}
      </div>
      {!error && teams.length === 0 && <p className="empty-state">No teams found yet.</p>}
    </section>
  );
}

export default Teams;
