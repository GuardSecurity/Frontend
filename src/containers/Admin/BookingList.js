import { useEffect, useState } from "react";

import helloAdmin from "../../assets/helloAdmin.png";
import moment from "moment";
import { getBookingList } from "../../utils/admin";
import BaseButton from "../../components/Button";
import { amountFormatting } from "../../utils/formatHelper";
import BookingDetailManager from "./Detail/BookingDetailManager";
import Popup from "reactjs-popup";

import "./styles.css";

const HEADER_TABLE = [
  "Company Name",
  "Address",
  "Quantity",
  "Total Amount",
  "Booking date",
  "",
];

const HeaderTable = HEADER_TABLE.map((header) => (
  <th className="border-b border-gray-200 bg-slate-100 py-3" key={`${header}`}>
    {header}
  </th>
));

function BookingList() {
  const [activeLabel, setActiveLabel] = useState("unallocated");
  const [bookingList, setBookingList] = useState([]);
  const [isDisplayPopup, setDisplayPopup] = useState(false);
  const [selectedCompanyName, setSelectedCompanyName] = useState("");

  useEffect(() => {
    getBookingList("getBookingPayment")
      .then((res) => setBookingList(res?.data || []))
      .catch((err) => console.error("ERROR: ", err));
  }, []);

  const handleDisplayBooking = (status) => {
    let typeBooking;

    // STATUS = 2
    if (status === "unallocated") typeBooking = "getBookingPayment";
    // STATUS = 1
    if (status === "unpaid") typeBooking = "getBookingNotPayment";
    // STATUS = 0 (DONE)
    if (status === "allocated") typeBooking = "getBookingDone";

    getBookingList(typeBooking)
      .then((res) => setBookingList(res?.data || []))
      .catch((err) => console.error("ERROR: ", err));

    setActiveLabel(status);
  };

  const handleDisplayDetail = (companyName) => {
    setDisplayPopup(true);
    setSelectedCompanyName(companyName);
  };

  const BodyTable = () =>
    bookingList.map((booking) => (
      <tbody>
        <BodyTableRow
          key={booking.customer_id}
          companyName={booking.companyname}
          address={booking.address}
          quantity={booking.quantity}
          totalAmount={booking.total_amount}
          bookingDate={booking.booking_date}
          status={booking.status}
        />
      </tbody>
    ));

  const BodyTableRow = ({
    companyName,
    address,
    quantity,
    totalAmount,
    bookingDate,
    status,
  }) => {
    return (
      <tr>
        <td className="py-3 border-b border-gray-300 bg-yellow-50 pl-2">
          {companyName}
        </td>
        <td className="py-3 border-b border-gray-300 pl-2">{address}</td>
        <td className="py-3 border-b border-gray-300 flex justify-center">
          {quantity}
        </td>
        <td className="py-3 border-b border-gray-300 ml-4">
          {amountFormatting(totalAmount)}
        </td>
        <td className="py-3 border-b border-gray-300 flex justify-center">
          {moment(bookingDate).format("DD-MM-YYY")}
        </td>
        <td className="py-3 border-b border-gray-300">{status}</td>
        <td
          className="py-3 border-b border-gray-300"
          onClick={() => handleDisplayDetail(companyName)}
        >
          <button className="hover:bg-blue-100 text-blue-700 rounded-full text-xs ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <img src={helloAdmin} className="w-full" />
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="w-96 flex justify-around items-center py-4 ml-16">
            <BaseButton
              content="Unallocated"
              className={`rounded-3xl ${
                activeLabel === "unallocated"
                  ? "bg-[#C7923E] font-medium w-32"
                  : "bg-[#cebca3] text-sm h-8"
              }`}
              onClick={() => handleDisplayBooking("unallocated")}
            />
            <BaseButton
              content="Allocated"
              className={`rounded-3xl ${
                activeLabel === "allocated"
                  ? "bg-[#C7923E] font-medium w-32"
                  : "bg-[#cebca3] text-sm h-8"
              }`}
              onClick={() => handleDisplayBooking("allocated")}
            />
            <BaseButton
              content="Unpaid"
              className={`rounded-3xl ${
                activeLabel === "unpaid"
                  ? "bg-[#C7923E] font-medium w-32"
                  : "bg-[#cebca3] text-sm h-8 w-10"
              }`}
              onClick={() => handleDisplayBooking("unpaid")}
            />
          </div>

          <table className="w-[98%] ml-[1%] bg-white border border-gray-300">
            <thead>
              <tr className="border border-gray-300 ">{HeaderTable}</tr>
            </thead>
            {bookingList.length > 0 && <BodyTable />}
          </table>
        </div>
      </div>
      <Popup
        open={isDisplayPopup}
        onClose={() => isDisplayPopup && setDisplayPopup(false)}
        modal
        {...{
          contentStyle: { width: "80%", borderRadius: 4, padding: 20 },
        }}
      >
        <div>
          <div className="content">
            <BookingDetailManager
              companyName={selectedCompanyName}
              activeLabel={activeLabel}
              setDisplayPopup={setDisplayPopup}
              setActiveLabel={setActiveLabel}
            />
          </div>
          <div className="w-full flex justify-center mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded-sm"
              onClick={() => setDisplayPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default BookingList;
