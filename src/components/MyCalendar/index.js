import { Views } from "react-big-calendar";
import CalendarComponent from "./Calendar";

const MyCalendar = () => {
  return (
    <div className="px-[52px] grid grid-rows-1 grid-flow-col">
      <div className="col-span-8">
        <div class="text-slate-900 text-[62px] font-bold leading-[74.40px] tracking-tight">
          My Canlendar
        </div>
        <div className="my-12">
          <CalendarComponent view="week" style={{ height: "800px" }} />
        </div>
      </div>
      <div class="col-span-4 pl-8">
        <CalendarComponent style={{ height: "800px" }} />
      </div>
    </div>
  );
};

export default MyCalendar;
