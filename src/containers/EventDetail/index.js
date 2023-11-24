import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SweetAlert2 from "react-sweetalert2";

import { attendance, getDetailBookingOneDay } from "../../utils/booking";
import { amountFormatting, dateFormatting } from "../../utils/formatHelper";
import BaseButton from "../../components/Button";

export default function EventDetail() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const companyName = localStorage.getItem("companyName");
  const start = localStorage.getItem("start");
  const end = localStorage.getItem("end");

  const navigate = useNavigate();

  const { userId, role } = userData;

  const bookingName = `${userId}${companyName}`;

  const [bookingDetail, setBookingDetail] = useState({});
  const [guardStatus, setGuardStatus] = useState("");
  const [guardId, setGuardId] = useState("");
  const [swal, setSwal] = useState({});

  useEffect(() => {
    const params = {
      bookingname: bookingName,
      time_start: new Date(start.toString()).toISOString(),
      time_end: new Date(end.toString()).toISOString(),
    };

    getDetailBookingOneDay({ params })
      .then((res) => {
        if (res?.data && res?.data.length > 0) {
          setBookingDetail(res?.data[0]);
          setGuardStatus(res?.data[0]?.guard?.map((g) => g.status));
          setGuardId(res?.data[0]?.guard?.map((g) => g.guard_id));
        }
      })
      .catch((err) => console.error("ERROR: ", err));
  }, []);

  const handleChangeStatus = (e, index) => {
    const guardStatusTmp = [...guardStatus];
    guardStatusTmp[index] = Number(e.target.value);

    setGuardStatus(guardStatusTmp);
  };

  const Descriptions = ({ title, content, className }) => (
    <div className={className}>
      <div className="font-medium">{title}</div>
      <div className="text-gray-500 mt-1">{content}</div>
    </div>
  );

  const handleAttendance = () => {
    const guard = guardStatus.map((status, index) => ({
      guard_id: guardId[index],
      status: status,
    }));

    const data = {
      customer_id: userId,
      bookingName,
      dataBooking: {
        time_start: new Date(start.toString()).toISOString(),
        time_end: new Date(end.toString()).toISOString(),
      },
      guard,
    };

    attendance({ data })
      .then((res) =>
        setSwal({
          show: true,
          text: res.data || "",
          icon: "success",
          didClose: () => navigate("../user-my-calendar"),
        })
      )
      .catch((err) =>
        setSwal({
          show: true,
          text: err.response.data.message || "",
          icon: "error",
        })
      );
  };

  return (
    <div class="w-full my-10 px-10">
      <div className="flex items-center">
        <div className="font-medium">{companyName}</div>
        <Link
          className="rounded-full bg-gray-500 py-2 px-3 ml-5 text-white font-medium"
          to="../user-my-calendar"
        >
          View calendar
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-5 py-6 mt-5">
        <Descriptions title="Service" content={bookingDetail.service} />
        <Descriptions
          title="Address"
          content={bookingDetail.address}
          className="mt-4"
        />
        <Descriptions
          title="Country"
          content={bookingDetail.country}
          className="mt-4"
        />
        {role === 2 && (
          <>
            <Descriptions
              title="Booking date"
              content={dateFormatting(bookingDetail.booking_date)}
              className="mt-4"
            />
            <Descriptions
              title="Payment status"
              content={bookingDetail.status === "1" ? "Unpaid" : "Paid"}
              className="mt-4"
            />
            <Descriptions
              title="Total amount"
              content={amountFormatting(bookingDetail.total_amount)}
              className="mt-4"
            />
          </>
        )}
      </div>
      <div className="bg-white rounded-lg shadow-lg px-5 py-6 mt-5">
        <div className="bg-green-300 w-24 py-1 flex justify-center font-medium rounded-2xl">
          {bookingDetail.quantity} Guard{bookingDetail.quantity > 1 && "s"}
        </div>
        {/* <Descriptions
          title="Do Quang Duy"
          content="Security"
          className="mt-4"
        />
        <Descriptions
          title="Do Quang Duy"
          content="Security"
          className="mt-4"
        /> */}
      </div>

      {/* {role === 2 && } */}
      <div className="flex justify-center mt-20">
        {/* <div class="grid grid-cols-3 gap-6 w-2/3 h-26">
          <div className="flex justify-center font-medium bg-gray-300">
            Date
          </div>
          <div className="flex justify-center font-medium bg-gray-300">
            Time
          </div>
          <div className="flex justify-center font-medium bg-gray-300">
            Customer
          </div>
          <div className="flex justify-center">05</div>
          <div className="flex justify-center">05</div>
          <div className="flex justify-center">05</div>
        </div> */}
        {role === 2 && (
          <div className="w-full flex-col">
            <div className="flex justify-center">
              <div class="grid grid-cols-4 gap-4 w-2/3 h-26">
                <div className="flex justify-center font-medium bg-gray-300">
                  Image
                </div>
                <div className="flex justify-center font-medium bg-gray-300">
                  First Name
                </div>
                <div className="flex justify-center font-medium bg-gray-300">
                  Last Name
                </div>
                <div className="flex justify-center font-medium bg-gray-300 w-48">
                  Attendance
                </div>

                {bookingDetail?.guard?.map((guard, index) => (
                  <>
                    <div className="flex justify-center"></div>
                    <div className="flex justify-center">{guard.firstname}</div>
                    <div className="flex justify-center">{guard.lastname}</div>
                    <div className="flex justify-around w-48">
                      <input
                        type="radio"
                        value={1}
                        checked={guardStatus[index] === 1}
                        onChange={(e) => handleChangeStatus(e, index)}
                      />
                      <label className="text-sm">Present</label>
                      <br />
                      <input
                        type="radio"
                        value={0}
                        checked={
                          guardStatus[index] === null ||
                          guardStatus[index] === 0
                        }
                        onChange={(e) => handleChangeStatus(e, index)}
                      />
                      <label className="text-sm">Absent</label>
                      <br />
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <BaseButton
                content="Save"
                className="bg-yellow-600"
                onClick={handleAttendance}
              />
            </div>
          </div>
        )}
      </div>
      <SweetAlert2
        didClose={() => setSwal({ ...swal, show: false })}
        {...swal}
      />
    </div>
  );
}
