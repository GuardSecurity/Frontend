import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { stringToRGB } from "../../utils/formatHelper";

moment.locale("vi");
const localizer = momentLocalizer(moment);

const Task = (props, view) => {
  const { event } = props;
  const navigate = useNavigate();

  const { companyname, status = "", start, end } = event;
  const timeBooking = (end.getHours() - start.getHours()) * 40;
  const formatTimeTwoDigit = (time) => (time < 10 ? "0" : "") + time;

  // old
  const handleSelectEvent = () => {
    localStorage.setItem("companyName", companyname);
    localStorage.setItem("start", start);
    localStorage.setItem("end", end);

    navigate("/event-detail");
  };

  if (view !== "week") {
    return (
      <div
        className="w-full py-0.5 bg-blue-100 flex justify-center rounded-lg"
        onClick={handleSelectEvent}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 30 30"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className=" bg-indigo-50 w-1/3"
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
  rolePosition,
}) {
  const navigate = useNavigate();

  const handleSelect = (props) => {
    const { companyname, start, end } = props;

    if (rolePosition === "guard")
      localStorage.setItem("customerIdOfBooking", props?.customerId);

    localStorage.setItem("companyName", companyname);
    localStorage.setItem("start", new Date(start));
    localStorage.setItem("end", new Date(end));

    navigate("/event-detail");
  };

  const eventStyleGetter = (event) => {
    const colorByCompanyName = stringToRGB(event.companyname);
    var backgroundColor = "#" + colorByCompanyName;

    return {
      style: {
        backgroundColor: backgroundColor,
        opacity: 0.8,
      },
    };
  };

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
        onSelectEvent={handleSelect}
        dayLayoutAlgorithm={"no-overlap"}
        scrollToTime={new Date()}
        eventPropGetter={eventStyleGetter}
        // components={{
        //   eventWrapper: (props) => Task(props, view),
        // }}
      />
    </div>
  );
}
