import { useEffect, useState } from "react";
import SweetAlert2 from "react-sweetalert2";

import { amountFormatting, dateFormatting } from "../../../utils/formatHelper";
import TimeRangeDataBooking from "../../../components/TimeRangeDataBooking/TimeRangeDataBooking";
import {
  postAllocateGuard,
  getListGuardFree,
  getManagerBookingDetail,
  UpdateAllocateGuard,
} from "../../../utils/admin";
import BaseButton from "../../../components/Button";
import TableFreeGuards from "./TableFreeGuards";

const userData = JSON.parse(localStorage.getItem("userData"));

function BookingDetailManager({
  companyName,
  setDisplayPopup,
  activeLabel,
  setActiveLabel,
}) {
  const [booking, setBooking] = useState({});
  const [freeGuards, setFreeGuards] = useState([]);
  const [guardsAllocated, setGuardsAllocated] = useState([]);
  const [toggleGuardTable, setToggleGuardTable] = useState(
    activeLabel === "allocated"
  );
  const [swal, setSwal] = useState({});

  const numberLackGuard = booking.quantity - guardsAllocated.length;

  useEffect(() => {
    userData &&
      userData?.userId &&
      getManagerBookingDetail({
        bookingName: `${userData?.userId}${companyName}`,
      })
        .then((res) => setBooking(res?.data[0] || []))
        .catch((err) => console.error("ERROR: ", err));

    activeLabel !== "unpaid" &&
      userData &&
      userData?.userId &&
      getListGuardFree()
        .then((res) => setFreeGuards(res?.data || []))
        .catch((err) => console.error("ERROR: ", err));
  }, []);

  useEffect(() => {
    if (activeLabel === "allocated" && booking?.guard?.length > 0) {
      const formatGuardObj = booking?.guard.map((g) => ({
        guardId: g.guard_id,
        firstName: g.firstname,
        lastName: g.lastname,
      }));
      setGuardsAllocated(formatGuardObj);
    }
  }, [booking?.guard?.length]);

  const handleAllocateGuard = () => {
    setToggleGuardTable(!toggleGuardTable);

    if (
      toggleGuardTable &&
      guardsAllocated.length > 0 &&
      numberLackGuard === 0
    ) {
      const guardsAllocatedTmp = [...guardsAllocated];
      const formatObj = guardsAllocatedTmp.map((e) => e.guardId);

      activeLabel === "unallocated" &&
        postAllocateGuard({
          bookingName: `${userData?.userId}${companyName}`,
          data: { listguard: formatObj },
        })
          .then((res) => {
            setSwal({
              show: true,
              text: res.data || "",
              icon: "success",
              didClose: () => setDisplayPopup(false),
            });

            setActiveLabel("allocated");
          })
          .catch((err) =>
            setSwal({
              show: true,
              text: err.response.data.message || "",
              icon: "error",
            })
          );

      activeLabel === "allocated" &&
        UpdateAllocateGuard({
          bookingName: `${userData?.userId}${companyName}`,
          data: { listguard: formatObj },
        })
          .then((res) => {
            setSwal({
              show: true,
              text: res.data || "",
              icon: "success",
              didClose: () => setDisplayPopup(false),
            });
          })
          .catch((err) =>
            setSwal({
              show: true,
              text: err.response.data.message || "",
              icon: "error",
            })
          );
    }
  };

  const handleRemoveGuard = (guard) => {
    const arr = [...guardsAllocated];
    const indexOfGuardRemove = arr.indexOf(guard);
    arr.splice(indexOfGuardRemove, 1);
    setGuardsAllocated(arr);
  };

  const GuardComponent = () => {
    if (activeLabel === "unpaid") return null;
    return (
      <div className="flex w-1/2">
        <div className="grid grid-cols-1 gap-2 mt-4">
          <div className="flex justify-center items-center bg-gray-300 w-36 font-medium h-6">
            Guards
          </div>

          {(activeLabel === "unpaid" && freeGuards.length > 0) ||
            (guardsAllocated.length > 0 && (
              <div>
                {guardsAllocated.map((guard, index) => (
                  <div
                    key={`${index}key`}
                    className={`${index !== 0 && "mt-2"} flex`}
                  >
                    {guard.firstName + " " + guard.lastName}
                    <button
                      className="ml-2"
                      onClick={() => handleRemoveGuard(index, guard)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ))}

          {!guardsAllocated.length && numberLackGuard > 0 && (
            <div className="w-full text-yellow-600">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>

                <p className="ml-2">
                  Please allocate {numberLackGuard} guard
                  {numberLackGuard > 1 && "s"}!
                </p>
              </div>
            </div>
          )}

          <BaseButton
            content={`${toggleGuardTable ? "Save" : "Allocate"}`}
            className={`w-36 h-8 text-sm ${
              numberLackGuard !== 0 && toggleGuardTable
                ? "bg-gray-400"
                : "bg-yellow-600"
            }`}
            onClick={handleAllocateGuard}
            disabled={numberLackGuard !== 0 && toggleGuardTable}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <Descriptions title="Company name" content={companyName} />

        <Descriptions title="Address" content={booking.address} />

        <Descriptions
          title="Booking date"
          content={dateFormatting(booking.booking_date)}
        />

        <Descriptions title="Quantity" content={booking.quantity} />

        <Descriptions title="Service" content={booking.service} />

        <Descriptions
          title="Total amount"
          content={amountFormatting(booking.total_amount)}
        />
      </div>

      <div className="flex w-full mt-4">
        <div className="w-1/2">
          <TimeRangeDataBooking
            className={"w-full mt-4"}
            dataBooking={booking.dataBooking}
          />
        </div>

        <GuardComponent />
      </div>

      {toggleGuardTable && (
        <TableFreeGuards
          freeGuards={freeGuards}
          guardsAllocated={guardsAllocated}
          numberLackGuard={numberLackGuard}
          setGuardsAllocated={setGuardsAllocated}
        />
      )}

      <SweetAlert2
        didClose={() => setSwal({ ...swal, show: false })}
        {...swal}
      />
    </div>
  );
}

const Descriptions = ({ title, content }) => (
  <div className="flex ">
    <div className="font-medium">{title}</div>
    <div className="text-gray-500">: {content}</div>
  </div>
);

export default BookingDetailManager;
