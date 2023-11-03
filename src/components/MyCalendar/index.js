import CalendarComponent from "./Calendar";

const MyCalendar = () => {
  return (
    <div className="px-[42px] grid grid-rows-1 grid-flow-col my-20">
      <div className="col-span-10">
        <div className="text-slate-900 text-[62px] font-bold leading-[74.40px] tracking-tight">
          My Canlendar
        </div>
        <div className="my-12">
          <CalendarComponent view="week" style={{ height: "590px" }} />
        </div>
      </div>
      <div className="col-span-2 pl-8">
        <div className="w-[355.39px] h-[51.95px] justify-start items-center gap-4 inline-flex my-8">
          <img
            className="w-[49.39px] h-[51.95px] rounded-[31px]"
            src="https://via.placeholder.com/49x52"
          />
          <div className="flex-col justify-start items-center gap-4 inline-flex">
            <div className="w-[285px] text-black text-base font-mediume">
              Nguyen Duc Nghia
            </div>
          </div>
        </div>
        <div className="mt-1.5 rounded-lg shadow">
          <CalendarComponent style={{ height: "400px", padding: "10px" }} />
        </div>
        {/* <div className="w-full h-[149px] px-4 bg-white rounded-lg shadow flex-col justify-between items-start flex mt-8">
          <div className="self-stretch h-[116px] flex-col justify-start items-start flex">
            <div className="self-stretch grow shrink basis-0 justify-start items-center gap-[171px] inline-flex">
              <div className="w-[157.85px] h-3 text-black text-base font-medium leading-none">
                Calendar Details
              </div>
            </div>
            <div className="self-stretch h-[74px] flex-col justify-start items-start gap-3 flex">
              <div className="w-[226px] h-[17px]  mt-3 relative">
                <div className="w-[203px] h-[11px] left-[23px] top-0 absolute text-black text-[10px] font-medium leading-none">
                  Present
                </div>
              </div>
              <div className="w-[253px] h-[17px] relative">
                <div className="w-[230px] h-[11px] left-[23px] top-0 absolute text-black text-[10px] font-medium leading-none">
                  Absent
                </div>
              </div>
              <div className="w-[248.05px] h-4 relative">
                <div className="w-[225.08px] h-[11px] left-[22.97px] top-0 absolute text-black text-[10px] font-medium leading-none">
                  Not Yet
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MyCalendar;
