import React, { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("vi");
const localizer = momentLocalizer(moment);

const Task = ({ event }) => {
  const { title, status, start, end } = event;
  const hoursBooking = end.getHours() - start.getHours();
  const height = hoursBooking * 39;
  return (
    // <div className={`h-[${41}px] w-full relative`}>
    //   <div
    //     className={`h-[${41}px] w-full left-0 top-0 absolute bg-indigo-500 rounded-md`}
    //   ></div>
    //   <div
    //     className={`h-[${41}px] w-full left-[8.82px] top-0 absolute bg-indigo-50 rounded-tr-md rounded-br-md`}
    //   ></div>
    // </div>
    <div className={`w-full h-[${Number(height)}px] relative`}>
      <div
        className={`w-full h-[${Number(
          height
        )}px] left-0 top-0 absolute bg-indigo-500 rounded-md`}
      ></div>
      <div
        className={`w-full h-[${Number(
          height
        )}px] left-[8.82px] top-0 absolute bg-indigo-50 rounded-tr-md rounded-br-md`}
      ></div>
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
        // onSelectEvent={(event) => alert("vv")}
        // onSelectSlot={handleSelect}
        components={{
          eventWrapper: Task,
        }}
      />
    </div>
  );
}
