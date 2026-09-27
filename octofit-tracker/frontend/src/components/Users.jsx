import { useEffect, useState } from 'react';
import { fetchCollection } from '../api';

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCollection(usersEndpoint).then(setUsers).catch((loadError) => setError(loadError.message));
  }, []);

  return (
    <section>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Community</p>
          <h1>Members</h1>
        </div>
        <span className="count-chip">{users.length} active</span>
      </div>
      {error && <div className="alert alert-warning">{error}</div>}
      <div className="row g-3">
        {users.map((user) => (
          <div className="col-md-6 col-xl-4" key={user._id || user.id || user.username}>
            <article className="data-card h-100">
              <div className="avatar-mark">{user.displayName?.slice(0, 1) || '?'}</div>
              <div>
                <h2>{user.displayName || user.username}</h2>
                <p className="muted">@{user.username}</p>
                <p className="small text-secondary mb-0">{user.email}</p>
              </div>
            </article>
          </div>
        ))}
      </div>
      {!error && users.length === 0 && <p className="empty-state">No members found yet.</p>}
    </section>
  );
}

export default Users;
