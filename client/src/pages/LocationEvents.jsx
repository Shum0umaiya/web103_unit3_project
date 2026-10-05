import React, { useState, useEffect } from 'react'
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'
import '../css/LocationEvents.css'

const LocationEvents = ({ index }) => {

    const [location, setLocation] = useState(null)
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
            try {

                const locationData =
                    await LocationsAPI.getLocationById(index)

                const eventsData =
                    await EventsAPI.getEventsByLocation(index)

                setLocation(locationData)
                setEvents(eventsData)

            } catch (error) {

                console.error(
                    'Error loading location or events:',
                    error
                )

            } finally {
                setLoading(false)
            }
        }

        fetchData()

    }, [index])


    if (loading) {
        return (
            <div className='location-events'>
                <h2>Loading...</h2>
            </div>
        )
    }


    if (!location) {
        return (
            <div className='location-events'>
                <h2>Location not found.</h2>
            </div>
        )
    }


    return (

        <div className='location-events'>

            <header>

                <div className='location-info'>

                    <h2>
                        {location.name}
                    </h2>

                    <p>
                        {location.description}
                    </p>

                </div>

            </header>


            <main>

                <h2>Events</h2>

                {
                    events.length > 0 ?

                    events.map(event => (

                        <div
                            className='event-card'
                            key={event.id}
                        >

                            <h3>
                                {event.title}
                            </h3>

                            <p>
                                {event.description}
                            </p>

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

                    ))

                    :

                    <h2>
                        No events scheduled at this location yet!
                    </h2>
                }

            </main>

        </div>
    )
}

export default LocationEvents