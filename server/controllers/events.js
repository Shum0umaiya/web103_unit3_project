import { pool } from '../config/database.js'

export const getEvents = async (req, res) => {
  try {
    const results = await pool.query(
      'SELECT * FROM events ORDER BY event_date ASC'
    )

    res.status(200).json(results.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'Unable to get events'
    })
  }
}

export const getEventsByLocation = async (req, res) => {
  try {
    const results = await pool.query(
      `
      SELECT *
      FROM events
      WHERE location_id = $1
      ORDER BY event_date ASC
      `,
      [req.params.locationId]
    )

    res.status(200).json(results.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'Unable to get events'
    })
  }
}