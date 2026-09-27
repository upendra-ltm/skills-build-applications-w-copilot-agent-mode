import { useEffect, useState } from 'react';
import { fetchCollection } from '../api';

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCollection(activitiesEndpoint).then(setActivities).catch((loadError) => setError(loadError.message));
  }, []);

  return (
    <section>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Movement log</p>
          <h1>Activities</h1>
        </div>
        <span className="count-chip">{activities.length} logged</span>
      </div>
      {error && <div className="alert alert-warning">{error}</div>}
      <div className="table-responsive data-table-wrap">
        <table className="table align-middle mb-0">
          <thead>
            <tr><th>Member</th><th>Activity</th><th>Duration</th><th>Points</th></tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity._id || activity.id || `${activity.type}-${activity.recordedAt}`}>
                <td>{activity.user?.displayName || activity.user?.username || 'Member'}</td>
                <td><span className="activity-type">{activity.type}</span></td>
                <td>{activity.durationMinutes} min</td>
                <td className="points">+{activity.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!error && activities.length === 0 && <p className="empty-state">No activities found yet.</p>}
    </section>
  );
}

export default Activities;
