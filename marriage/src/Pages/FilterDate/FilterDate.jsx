import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import './DemoApp.css'; // Import CSS file

export default function DemoApp() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [venueResponse, catererResponse, decoratorResponse] = await Promise.all([
        axios.get('http://localhost:8081/getvenue'),
        axios.get('http://localhost:8081/getcaterer'),
        axios.get('http://localhost:8081/getdecor')
      ]);

      const venues = venueResponse.data.Result;
      const caterers = catererResponse.data.Result;
      const decorators = decoratorResponse.data.Result;

      const venueEvents = venues.map(venue => ({
        title: venue.name,
        start: venue.date, // Adjust this according to your data structure
        color: 'green' // Adjust color if needed
      }));

      const catererEvents = caterers.map(caterer => ({
        title: caterer.name,
        start: caterer.date, // Adjust this according to your data structure
        color: 'blue' // Adjust color if needed
      }));

      const decoratorEvents = decorators.map(decorator => ({
        title: decorator.name,
        start: decorator.date, // Adjust this according to your data structure
        color: 'red' // Adjust color if needed
      }));

      setEvents([...venueEvents, ...catererEvents, ...decoratorEvents]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="demo-container">
      <h1 className="demo-title">Demo App</h1>
      <div className="full-calendar">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView='dayGridMonth'
          events={events}
          eventContent={renderEventContent}
        />
      </div>
    </div>
  );
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <div>{eventInfo.event.title}</div>
  );
}
