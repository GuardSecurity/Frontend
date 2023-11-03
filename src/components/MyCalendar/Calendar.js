import React, { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("vi");
const localizer = momentLocalizer(moment);

const Task = ({ event }) => {
  const { title, status, start, end } = event;
  const timeBooking = (end.getHours() - start.getHours()) * 40;
  const formatTimeTwoDigit = (time) => (time < 10 ? "0" : "") + time;

  return (
    <div className="relative bg-indigo-50 " style={{ height: timeBooking }}>
      <div className="bg-indigo-500 w-3 h-full rounded-md">
        <div className="ml-[8.82px] top-0 z-100 h-full bg-indigo-50 rounded-tr-md rounded-br-md p-2">
          <div className="w-full text-black text-[10px] font-normal leading-none">
            {title}
          </div>
          <div className="w-full text-lime-700 text-[9px] font-extrabold leading-none mt-2.5">
            {status}
          </div>
          <div className="w-full mt-3 text-indigo-500 text-[10px] font-normal leading-none">
            {formatTimeTwoDigit(start.getHours())}:
            {formatTimeTwoDigit(start.getMinutes())} -{" "}
            {formatTimeTwoDigit(end.getHours())}:
            {formatTimeTwoDigit(end.getMinutes())}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CalendarComponent({ view = "month", style }) {
  const [eventsData, setEventsData] = useState(events);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title,
        },
      ]);
  };
  return (
    <div className="App">
      <Calendar
        views={[view === "month" ? "month" : "week"]}
        // selectable
        localizer={localizer}
        defaultView={view === "week" ? Views.WEEK : Views.MONTH}
        defaultDate={new Date()}
        events={eventsData}
        style={style}
        onSelectEvent={(event) => alert("vv")}
        onSelectSlot={handleSelect}
        components={{
          eventWrapper: Task,
        }}
      />
    </div>
  );
}
