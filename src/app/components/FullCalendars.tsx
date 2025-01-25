"use client"; // Đảm bảo rằng đây là client component

import { calendarEvents } from "../lib/data";
import { useState, useEffect } from 'react';
import EventDetails from "./EventDetails";

const FullCalendars = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

    useEffect(() => {
        const formattedEvents = calendarEvents.map(event => ({
            ...event,
            id: event.id.toString(), // Chuyển đổi ID sang chuỗi
        }));
        setEvents(formattedEvents);
    }, []);

    const handleEventClick = (eventId: string) => {
        setSelectedEvent(eventId);
    };

    return (
        <div className="flex flex-col items-center bg-gray-100 p-4">
            
            
            <div className="mt-4 w-full" suppressHydrationWarning={true}>
                <EventDetails selectedId={selectedEvent} />
            </div>
        </div>
    );
};

export default FullCalendars;