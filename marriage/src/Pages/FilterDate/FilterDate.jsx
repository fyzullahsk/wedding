import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './DemoApp.css'; // Import CSS file

const events = [
  { title: 'Meeting', start: new Date() }
];

export default function DemoApp() {
  return (
    <div className="demo-container">
      <h1 className="demo-title">Demo App</h1>
      <div className="full-calendar">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView='dayGridMonth'
          weekends={false}
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
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
