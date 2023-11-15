import Datetime from "react-datetime";

import "react-datetime/css/react-datetime.css";

function DateTimePicker({
  label,
  classExtend = "w-full",
  placeholder,
  timeFormat,
  dateFormat,
  onChange,
  ...rest
}) {
  const inputProps = {
    placeholder,
    className: `h-11 px-4 py-2 bg-white rounded border border-orange-400 w-full`,
  };

  return (
    <div className={classExtend}>
      <div className="text-gray-400 leading-7 mb-2">{label}</div>
      <Datetime
        timeFormat={timeFormat && timeFormat}
        dateFormat={dateFormat && dateFormat}
        inputProps={inputProps}
        onChange={(moment) => onChange(moment.format(dateFormat && dateFormat))}
        {...rest}
      />
    </div>
  );
}

export default DateTimePicker;
