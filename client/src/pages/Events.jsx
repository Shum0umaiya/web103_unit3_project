import React, { useState, useEffect } from 'react'
import EventsAPI from '../services/EventsAPI'
import '../css/Event.css'

const Events = () => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await EventsAPI.getAllEvents()
                setEvents(data)
            } catch (error) {
                console.error('Error loading events:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchEvents()
    }, [])

    if (loading) {
        return (
            <div className="events-page">
                <h2>Loading events...</h2>
            </div>
        )
    }

    return (
        <div className="events-page">

            <div className="events-heading">
                <h2>All Events</h2>
                <p>Discover what is happening across After Hours.</p>
            </div>

            <div className="events-grid">

                {events.length > 0 ? (
                    events.map((event) => (
                        <div
                            className="all-event-card"
                            key={event.id}
                        >

                            <h3>{event.title}</h3>

                            <p>{event.description}</p>

                            <div className="event-details">

                                <p>
                                    <strong>Date:</strong>{' '}
                                    {new Date(
                                        event.event_date
                                    ).toLocaleDateString()}
                                </p>

                                <p>
                                    <strong>Time:</strong>{' '}
                                    {new Date(
                                        event.event_date
                                    ).toLocaleTimeString(
                                        [],
                                        {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        }
                                    )}
                                </p>

                            </div>

                        </div>
                    ))
                ) : (
                    <h2>No events available.</h2>
                )}

            </div>

        </div>
    )
}

export default Events