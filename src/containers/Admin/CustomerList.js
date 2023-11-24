import { useEffect, useState } from "react";

import helloAdmin from "../../assets/helloAdmin.png";
import moment from "moment";
import { getCustomerList } from "../../utils/admin";

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

  useEffect(() => {
    getCustomerList()
      .then(
        (res) => res?.data && res?.data.length > 0 && setCustomerList(res?.data)
      )
      .catch((err) => console.error("ERROR: ", err));
  }, []);

  const BodyTable = () =>
    customerList.map((customer) => (
      <BodyTableRow
        key={customer.customer_id}
        name={customer.firstname + " " + customer.firstname}
        gender={customer.gender}
        phone={customer.phone}
        dob={moment(customer.dob).format("DD-MM-YYY")}
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
    </div>
  );
}

const BodyTableRow = ({ name, gender, phone, dob }) => {
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
        <td className="py-3 border-b border-gray-300">
          <button className="bg-yellow-500 hover:bg-yellow-300 text-white py-1 px-2 rounded-full text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
          <button className="bg-red-500 hover:bg-red-300 text-white py-1 px-2 rounded-full text-xs ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default CustomerList;
