"use client"

import { calendarEvents, eventDetail } from "../lib/data";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import viLocale from "@fullcalendar/core/locales/vi";
import { useEffect, useState } from 'react';
import EventDetails from "./EventDetails";
import { info } from "console";
import { title } from "process";



const FullCalendars = () => {
  const [events, setEvents] = useState(calendarEvents.map(event=>({
    ...event,// Sao chép toàn bộ thuộc tính từ `event`
    id: event.id.toString(),
  })));

  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const handleEventClick = (info: any) => {
    const detailId = info.event.id;
    setSelectedEvent(detailId); 
  };
  return (
    <div className="">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        locale={viLocale}
        events={events}
        eventClick={handleEventClick}
        height="auto"
        slotEventOverlap={false}
        eventOverlap={false}
        dayMaxEventRows={true}
        eventContent={(eventInfo) => (
          <div className="flex flex-col justify-center items-center h-full text-center">
            <div>
              {eventInfo.event.start ? new Date(eventInfo.event.start).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              }):"N/A"} - 
              {eventInfo.event.end ? new Date(eventInfo.event.end).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              }):"N/A"}
              </div>
            <div>HLV: {eventInfo.event.extendedProps.trainer}</div>
            <div>Bài Tập: {eventInfo.event.extendedProps.type}</div>
          </div>
        )}
        slotMinTime="05:00:00" 
        slotMaxTime="20:00:00" 
        allDaySlot={false}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridWeek,timeGridDay",
        }}
      />
      <div className="">
        <EventDetails selectedId={selectedEvent}/>
      </div>
    </div>
  );
};

export default FullCalendars;