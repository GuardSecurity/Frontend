import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import SweetAlert2 from "react-sweetalert2";

import BaseButton from "../Button";
import BaseInput from "../Input/Input";
import DateTimePicker from "../DateTimePicker";
import { createNewBooking } from "../../utils/booking";
import { amountFormatting } from "../../utils/formatHelper";

import { SERVICES } from "../../utils/constants";

function NewBooking() {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("userData"));
  const { userId } = userData;

  const [swal, setSwal] = useState({});

  const [companyName, setCompanyName] = useState("");
  const [service, setService] = useState("Cars");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState("");
  const [timeStart, setTimeStart] = useState(new Date());
  const [timeEnd, setTimeEnd] = useState(
    moment(new Date()).add(23 - new Date().getHours(), "hours")
  );

  const isValid =
    timeStart && timeEnd && moment(timeEnd).isAfter(moment(timeStart));

  const numberOfDayWorking =
    new Date(timeEnd).getDate() - new Date(timeStart).getDate();

  useEffect(() => {
    if (isValid && quantity) {
      const workingHours =
        (new Date(timeEnd).getTime() - new Date(timeStart).getTime()) / 3600000;

      // 50 000 VND/h
      let amountOfWorkingTime = quantity * workingHours * 50000;

      // thuê trên 5 bảo vệ giảm 5% /total
      // thuê trên 10 bảo vệ giảm 10% total
      // thuê trên 7 ngày được giảm 5%
      switch (true) {
        case quantity > 5:
          amountOfWorkingTime = amountOfWorkingTime * 0.95;
          break;
        case quantity > 10:
          amountOfWorkingTime = amountOfWorkingTime * 0.9;
          break;
        case workingHours > 24 * 7:
          amountOfWorkingTime = amountOfWorkingTime * 0.95;
          break;
        default:
          break;
      }

      setTotalAmount(amountOfWorkingTime);
    }
  }, [quantity, timeStart, timeEnd]);

  const handleCreateNewBooking = async () => {
    if (
      isValid &&
      userId &&
      companyName &&
      service &&
      address &&
      country &&
      quantity &&
      timeStart &&
      timeEnd &&
      totalAmount
    ) {
      const data = {
        companyname: companyName,
        service,
        address,
        country,
        quantity,
        total_amount: totalAmount,
        booking_date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        dataBooking: formatDataBooking(numberOfDayWorking, timeStart, timeEnd),
      };

      try {
        const res = await createNewBooking({ data, userId });

        setSwal({
          ...swal,
          show: true,
          text: res.data.message || "",
          icon: "success",
          didClose: () => navigate(`payment/${companyName}`),
        });
      } catch (err) {
        setSwal({
          ...swal,
          show: true,
          text: err.response.data.message || "",
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="w-full h-full mt-14">
      <div className="flex justify-center">
        <div className="w-full md:w-2/5 px-8 bg-white lg:ml-4">
          <div className="rounded shadow p-6">
            <BaseInput
              label="Your company's name"
              classExtend="w-full"
              onChange={(e) => setCompanyName(e.target.value)}
            />

            <div>
              <div className="text-gray-400 leading-7 mb-2">Service</div>
              <select
                id="service"
                name="service"
                className="h-11 w-full px-4 bg-white rounded border border-orange-400"
                onChange={(e) => setService(e.target.value)}
              >
                {SERVICES.map((service) => (
                  <option>{service.label}</option>
                ))}
              </select>
            </div>

            <BaseInput
              label="Address"
              classExtend="w-full mt-3"
              onChange={(e) => setAddress(e.target.value)}
            />

            <BaseInput
              label="City"
              classExtend="w-full mt-3"
              onChange={(e) => setCountry(e.target.value)}
            />

            <BaseInput
              label="Quantity"
              classExtend="w-full mt-3"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />

            {quantity < 1 && <p className="text-red-500">More than!</p>}

            <div className="flex justify-between mt-3">
              <DateTimePicker
                label="Time Start"
                classExtend="w-[190px]"
                initialValue={new Date()}
                isValidDate={(currentDate, selectedDate) => {
                  return currentDate.isAfter(moment(selectedDate));
                }}
                onChange={(time) => setTimeStart(time)}
              />

              <DateTimePicker
                label="Time End"
                classExtend="w-[190px]"
                initialValue={moment(new Date()).add(
                  23 - new Date().getHours(),
                  "hours"
                )}
                isValidDate={(currentDate, selectedDate) => {
                  return currentDate.isAfter(moment(selectedDate));
                }}
                onChange={(time) => setTimeEnd(time)}
              />
            </div>

            {!isValid && (
              <div className="text-red-500">
                "Start time must be earlier than end time"
              </div>
            )}

            {totalAmount && quantity > 0 && (
              <div className="mt-6 ml-2 font-medium">
                Total amount: {amountFormatting(totalAmount)}
              </div>
            )}

            <BaseButton
              className="mt-8 flex pb-4 bg-[#C7923E]"
              disabled={!isValid || quantity < 1}
              onClick={handleCreateNewBooking}
              content={"Submit"}
            />
          </div>
        </div>
      </div>
      <SweetAlert2
        didClose={() => setSwal({ ...swal, show: false })}
        {...swal}
      />
    </div>
  );
}

// Nếu bookingTime từ 1 trở lên thì tách ra thành nhiều object, mỗi object là timing của 1 ngày booking
const formatDataBooking = (numberOfDayWorking, timeStart, timeEnd) => {
  // Convert number to String: 5 --> [1, 2, 3, 4, 5]
  let arr = Array.from({ length: numberOfDayWorking + 1 }, (index) => index);

  if (numberOfDayWorking === 0)
    return [
      {
        time_start: moment(timeStart).format("YYYY-MM-DD HH:mm:ss"),
        time_end: moment(timeEnd).format("YYYY-MM-DD HH:mm:ss"),
      },
    ];

  return arr.map((e, index) => {
    if (index === 0) {
      return {
        time_start: moment(timeStart).format("YYYY-MM-DD HH:mm:ss"),
        time_end: moment(timeEnd)
          .subtract(numberOfDayWorking, "days")
          .format("YYYY-MM-DD HH:mm:ss"),
      };
    } else if (index > 0 && index < numberOfDayWorking) {
      return {
        time_start: moment(timeStart)
          .add(index, "days")
          .format("YYYY-MM-DD HH:mm:ss"),
        time_end: moment(timeEnd)
          .subtract(numberOfDayWorking - index, "days")
          .format("YYYY-MM-DD HH:mm:ss"),
      };
    } else if (index === numberOfDayWorking) {
      return {
        time_start: moment(timeStart)
          .add(index, "days")
          .format("YYYY-MM-DD HH:mm:ss"),
        time_end: moment(timeEnd).format("YYYY-MM-DD HH:mm:ss"),
      };
    }
  });
};

export default NewBooking;
