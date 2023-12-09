import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SweetAlert2 from "react-sweetalert2";
import moment from "moment";
import Popup from "reactjs-popup";

import { attendance, getDetailBookingOneDay } from "../../utils/booking";
import { amountFormatting, dateFormatting } from "../../utils/formatHelper";
import BaseButton from "../../components/Button";
import TimeRangeDataBooking from "../../components/TimeRangeDataBooking/TimeRangeDataBooking";
import Review from "../../components/Review/Review";

export default function EventDetail() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const companyName = localStorage.getItem("companyName");
  const customerIdOfBooking = localStorage.getItem("customerIdOfBooking");
  const start = localStorage.getItem("start");
  const end = localStorage.getItem("end");

  const navigate = useNavigate();

  const { userId, role } = userData;

  const rolePosition = role === 2 ? "customer" : role === 3 && "guard";

  const bookingName = `${
    role === 2 ? userId : role === 3 && customerIdOfBooking
  }${companyName}`;

  const [bookingDetail, setBookingDetail] = useState({});
  const [guardStatus, setGuardStatus] = useState("");
  const [guardId, setGuardId] = useState("");
  const [swal, setSwal] = useState({});
  const [isDisplayPopup, setDisplayPopup] = useState(false);

  useEffect(() => {
    const params = {
      bookingname: bookingName,
      time_start: new Date(start.toString()).toISOString(),
      time_end: new Date(end.toString()).toISOString(),
    };

    getDetailBookingOneDay({ params, role: rolePosition })
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

  const handleRating = async () => {
    setDisplayPopup(true);
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
      status: status === null ? 0 : status,
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

        <Descriptions
          title="Booking date"
          content={dateFormatting(bookingDetail.booking_date)}
          className="mt-4"
        />

        {role === 2 && (
          <>
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

      <div className="flex justify-center mt-20">
        {role === 2 && (
          <div className="w-full flex-col">
            <div className="flex justify-center">
              <div class="grid grid-cols-5 gap-5 w-4/5 h-26">
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
                <div className="flex justify-center w-28" />

                {bookingDetail?.guard?.map((guard, index) => (
                  <>
                    <div className="flex justify-center"></div>
                    <div className="flex justify-center">{guard.firstname}</div>
                    <div className="flex justify-center">{guard.lastname}</div>
                    <div className="flex justify-around items-center w-48 mb-2">
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

                    {moment(end).isBefore(new Date()) && (
                      <BaseButton
                        content="Rating"
                        className="bg-blue-500 ml-8 text-sm"
                        onClick={handleRating}
                      />
                    )}

                    <Popup
                      open={isDisplayPopup}
                      onClose={() => isDisplayPopup && setDisplayPopup(false)}
                      modal
                      {...{
                        contentStyle: {
                          width: "60%",
                          borderRadius: 4,
                          padding: 20,
                        },
                      }}
                    >
                      <div className="content">
                        <Review
                          guard={guard}
                          customerId={userId}
                          bookingName={bookingName}
                          setDisplayPopup={setDisplayPopup}
                          setSwal={setSwal}
                        />
                      </div>
                    </Popup>
                  </>
                ))}
              </div>
            </div>

            {bookingDetail?.guard?.length && (
              <div className="flex justify-center mt-2">
                <BaseButton
                  content="Save"
                  className="bg-[#C7923E]"
                  onClick={handleAttendance}
                />
              </div>
            )}
          </div>
        )}

        {role === 3 && (
          <div className="flex w-full">
            <div className="w-1/3">
              <TimeRangeDataBooking
                className={"w-full mt-4"}
                dataBooking={[bookingDetail?.dataBooking]}
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
