import moment from "moment";
import { useState } from "react";
import Datetime from "react-datetime";

import "react-datetime/css/react-datetime.css";
import { isDateValidFormat } from "../../utils/formatHelper";

function DateTimePicker({
  label,
  classExtend = "w-full",
  placeholder,
  timeFormat,
  dateFormat,
  initialValue,
  onChange,
  isValidDate,
  ...rest
}) {
  const [isValid, setValid] = useState(true);

  const inputProps = {
    placeholder,
    className: `h-11 px-4 py-2 bg-white rounded border border-orange-400 w-full`,
    disable: true,
  };

  const onClosePicker = (moment) => {
    if (!isDateValidFormat(moment)) {
      setValid(false);
    } else if (new Date(moment.format(dateFormat && dateFormat))) {
      setValid(true);
      onChange(moment.format(dateFormat && dateFormat));
    }
  };

  return (
    <div className={classExtend}>
      <div className="text-gray-400 leading-7 mb-2">{label}</div>
      <Datetime
        timeFormat={timeFormat && timeFormat}
        dateFormat={dateFormat && dateFormat}
        isValidDate={isValidDate && isValidDate}
        inputProps={inputProps}
        initialValue={initialValue && isValid && initialValue}
        onClose={onClosePicker}
        {...rest}
      />
      {!isValid && <p className="text-red-500">Invalid Date</p>}
    </div>
  );
}

export default DateTimePicker;
