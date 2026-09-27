import mongoose from 'mongoose';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Team from '../models/Team.js';
import User from '../models/User.js';
import Workout from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      { username: 'alex', email: 'alex@example.com', displayName: 'Alex Morgan' },
      { username: 'jordan', email: 'jordan@example.com', displayName: 'Jordan Lee' },
      { username: 'sam', email: 'sam@example.com', displayName: 'Sam Rivera' },
    ]);

    const teams = await Team.insertMany([
      { name: 'Summit Crew', description: 'Climb higher together.', members: [users[0]._id, users[1]._id] },
      { name: 'Trail Blazers', description: 'Consistent effort, strong finish.', members: [users[2]._id] },
    ]);

    await Activity.insertMany([
      { user: users[0]._id, team: teams[0]._id, type: 'Run', durationMinutes: 32, points: 320, recordedAt: new Date('2026-09-25T07:30:00Z') },
      { user: users[1]._id, team: teams[0]._id, type: 'Strength', durationMinutes: 45, points: 360, recordedAt: new Date('2026-09-24T17:00:00Z') },
      { user: users[2]._id, team: teams[1]._id, type: 'Cycling', durationMinutes: 50, points: 410, recordedAt: new Date('2026-09-23T06:45:00Z') },
    ]);

    await Leaderboard.insertMany([
      { user: users[2]._id, team: teams[1]._id, points: 410, rank: 1 },
      { user: users[0]._id, team: teams[0]._id, points: 320, rank: 2 },
      { user: users[1]._id, team: teams[0]._id, points: 360, rank: 3 },
    ]);

    await Workout.insertMany([
      { title: 'Quick Start Run', description: 'A steady run for building everyday endurance.', category: 'Cardio', difficulty: 'beginner', durationMinutes: 25, exercises: ['Warm-up walk', 'Easy run', 'Cool-down stretch'] },
      { title: 'Full Body Foundation', description: 'A balanced strength session using bodyweight movements.', category: 'Strength', difficulty: 'intermediate', durationMinutes: 35, exercises: ['Squats', 'Push-ups', 'Reverse lunges', 'Plank'] },
      { title: 'Mobility Reset', description: 'Restore range of motion after a demanding week.', category: 'Mobility', difficulty: 'beginner', durationMinutes: 20, exercises: ['Cat-cow', 'Worlds greatest stretch', 'Hip opener', 'Child pose'] },
    ]);

    console.log('Database seeding complete');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
