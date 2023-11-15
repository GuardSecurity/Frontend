import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("vi");
const localizer = momentLocalizer(moment);

const Task = (props, view) => {
  const { event } = props;
  const navigate = useNavigate();

  const { companyname, status = "", start, end } = event;
  const timeBooking = (end.getHours() - start.getHours()) * 40;
  const formatTimeTwoDigit = (time) => (time < 10 ? "0" : "") + time;

  const handleSelectEvent = () => {
    navigate("/event-detail");
  };

  return (
    <div
      className="relative bg-indigo-50 "
      style={{ height: timeBooking }}
      onClick={handleSelectEvent}
    >
      <div className="bg-indigo-500 w-3 h-full rounded-md">
        <div className="ml-[8.82px] top-0 z-100 h-full bg-indigo-50 rounded-tr-md rounded-br-md p-2">
          <div className="w-full text-black text-[11px] font-medium leading-none">
            {companyname}
          </div>
          <div className="w-full text-lime-700 text-[9px] font-extrabold leading-none mt-2.5">
            {status}
          </div>
          {view === "week" && (
            <div className="w-full mt-3 text-indigo-500 text-[10px] font-normal leading-none">
              {formatTimeTwoDigit(start.getHours())}:
              {formatTimeTwoDigit(start.getMinutes())} -{" "}
              {formatTimeTwoDigit(end.getHours())}:
              {formatTimeTwoDigit(end.getMinutes())}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function CalendarComponent({
  view = "month",
  style,
  eventsData,
}) {
  return (
    <div className="App">
      <Calendar
        views={[view === "month" ? "month" : "week"]}
        selectable
        localizer={localizer}
        defaultView={view === "week" ? Views.WEEK : Views.MONTH}
        defaultDate={new Date()}
        events={eventsData}
        style={style}
        onSelectEvent={(event) => console.log("--")}
        // onSelectSlot={handleSelect}
        components={{
          eventWrapper: (props) => Task(props, view),
        }}
      />
    </div>
  );
}
