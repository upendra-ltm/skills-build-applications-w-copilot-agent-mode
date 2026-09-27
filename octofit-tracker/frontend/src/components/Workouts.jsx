import { useEffect, useState } from 'react';
import { fetchCollection } from '../api';

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCollection(workoutsEndpoint).then(setWorkouts).catch((loadError) => setError(loadError.message));
  }, []);

  return (
    <section>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Suggested sessions</p>
          <h1>Workouts</h1>
        </div>
        <span className="count-chip">{workouts.length} plans</span>
      </div>
      {error && <div className="alert alert-warning">{error}</div>}
      <div className="row g-3">
        {workouts.map((workout) => (
          <div className="col-md-6 col-xl-4" key={workout._id || workout.id || workout.title}>
            <article className="data-card workout-card h-100">
              <div className="d-flex justify-content-between gap-3 align-items-start">
                <span className="activity-type">{workout.category}</span>
                <span className="difficulty">{workout.difficulty}</span>
              </div>
              <h2>{workout.title}</h2>
              <p className="muted">{workout.description}</p>
              <p className="small text-secondary mb-0">{workout.durationMinutes} minutes</p>
            </article>
          </div>
        ))}
      </div>
      {!error && workouts.length === 0 && <p className="empty-state">No workouts found yet.</p>}
    </section>
  );
}

export default Workouts;
