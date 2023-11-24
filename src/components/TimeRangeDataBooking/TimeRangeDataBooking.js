import { dateTimeFormatting } from "../../utils/formatHelper";

const TimeRangeDataBooking = ({ className, dataBooking }) => (
  <div>
    <div className={`grid grid-cols-2 ${className}`}>
      <div className="flex justify-center items-center bg-gray-300 w-40 h-6 font-medium">
        Start
      </div>
      <div className="flex justify-center items-center bg-gray-300 w-40 h-6 font-medium">
        End
      </div>
    </div>
    {dataBooking &&
      dataBooking.length > 0 &&
      dataBooking.map((data) => (
        <div className="mt-2 grid grid-cols-2">
          <div className="flex justify-center w-40 h-6">
            {dateTimeFormatting(data.time_start)}
          </div>
          <div className="flex justify-center w-40 h-6">
            {dateTimeFormatting(data.time_end)}
          </div>
        </div>
      ))}
  </div>
);

export default TimeRangeDataBooking;
