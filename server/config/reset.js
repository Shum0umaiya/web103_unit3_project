import { pool } from './database.js'

const resetDatabase = async () => {
  try {
    await pool.query(`
      DROP TABLE IF EXISTS events;
      DROP TABLE IF EXISTS locations;

      CREATE TABLE locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        image VARCHAR(500)
      );

      CREATE TABLE events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        description TEXT,
        event_date TIMESTAMP,
        location_id INTEGER REFERENCES locations(id)
      );
    `)

    await pool.query(`
      INSERT INTO locations (name, description, image)
      VALUES
      ('Night Market', 'Food, culture, and late-night community events.', '/images/night-market.jpg'),
      ('Rooftop District', 'Social events with city views and rooftop experiences.', '/images/rooftop.jpg'),
      ('Gaming Lounge', 'Gaming tournaments and community game nights.', '/images/gaming.jpg'),
      ('Creative Corner', 'Art, music, photography, and creative events.', '/images/creative.jpg');
    `)

    await pool.query(`
      INSERT INTO events (title, description, event_date, location_id)
      VALUES
      ('International Street Food Night', 'Try food from different cultures.', '2026-10-10 18:00:00', 1),
      ('Late Night Dessert Festival', 'Desserts, drinks, and music.', '2026-10-17 19:00:00', 1),
      ('Skyline Movie Night', 'Watch a movie overlooking the city.', '2026-10-12 20:00:00', 2),
      ('Autumn Rooftop Social', 'A relaxed rooftop community gathering.', '2026-10-26 18:00:00', 2),
      ('Mario Kart Tournament', 'Compete in a community Mario Kart tournament.', '2026-10-11 17:00:00', 3),
      ('Retro Gaming Night', 'Classic games and friendly competition.', '2026-10-18 18:00:00', 3),
      ('Open Mic Night', 'Music, poetry, and performances.', '2026-10-09 19:00:00', 4),
      ('Night Photography Walk', 'Explore the city with other photographers.', '2026-10-23 18:30:00', 4);
    `)

    console.log('Database reset successfully')
    process.exit()
  } catch (error) {
    console.error('Database reset failed:', error)
    process.exit(1)
  }
}

resetDatabase()