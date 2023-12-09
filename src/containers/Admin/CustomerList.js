import { useEffect, useState } from "react";

import helloAdmin from "../../assets/helloAdmin.png";
import moment from "moment";
import { getCustomerById, getCustomerList } from "../../utils/admin";
import Popup from "reactjs-popup";
import CustomerDetail from "./Detail/CustomerDetail";

const HEADER_TABLE = [
  "Image",
  "Name",
  "Gender",
  "Phone",
  "Date of birth",
  "Action",
];

const HeaderTable = HEADER_TABLE.map((header) => (
  <th className="border-b border-gray-300 bg-slate-200 py-3" key={`${header}`}>
    <div className="flex">{header}</div>
  </th>
));

function CustomerList() {
  const [customerList, setCustomerList] = useState([]);
  const [isDisplayPopup, setDisplayPopup] = useState(false);
  const [customerDetail, setCustomerDetail] = useState({});

  useEffect(() => {
    getCustomerList()
      .then(
        (res) => res?.data && res?.data.length > 0 && setCustomerList(res?.data)
      )
      .catch((err) => console.error("ERROR: ", err));
  }, []);

  const handleDisplayDetail = async (customerId) => {
    try {
      const res = await getCustomerById({ customerId });
      setCustomerDetail(res.data);
    } catch (error) {
      console.error(console.error());
    }
    setDisplayPopup(true);
  };

  const BodyTable = () =>
    customerList.map((customer) => (
      <BodyTableRow
        key={customer.customer_id}
        customerId={customer.customer_id}
        name={customer.firstname + " " + customer.firstname}
        gender={customer.gender}
        phone={customer.phone}
        dob={moment(customer.dob).format("DD-MM-YYY")}
        handleDisplayDetail={handleDisplayDetail}
      />
    ));

  return (
    <div>
      <img src={helloAdmin} className="w-full" />
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="border border-gray-300 ">{HeaderTable}</tr>
            </thead>
            {customerList.length > 0 && <BodyTable />}
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
            <CustomerDetail details={customerDetail} />
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

const BodyTableRow = ({
  customerId,
  name,
  gender,
  phone,
  dob,
  handleDisplayDetail,
}) => {
  return (
    <tbody>
      <tr>
        <td className="py-3 border-b border-gray-300 ml-4">
          <img
            src="https://source.unsplash.com/random"
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
          />
        </td>
        <td className="py-3 border-b border-gray-300">{name}</td>
        <td className="py-3 border-b border-gray-300">
          {gender ? "Male" : "Female"}
        </td>
        <td className="py-3  border-b border-gray-300">{phone}</td>
        <td className="py-3 border-b border-gray-300">{dob}</td>
        <td
          className="py-3 border-b border-gray-300"
          onClick={() => handleDisplayDetail(customerId)}
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
    </tbody>
  );
};

export default CustomerList;
