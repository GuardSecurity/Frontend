import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import moment from "moment";

import helloAdmin from "../../assets/helloAdmin.png";
import { getGuardById, getGuardList } from "../../utils/admin";
import GuardDetail from "./Detail/GuardDetail";

const HEADER_TABLE = ["Image", "Name", "Gender", "Phone", "Date of birth", ""];

const HeaderTable = HEADER_TABLE.map((header, index) => (
  <th className="border-b border-gray-300 bg-slate-200 py-3" key={`${header}`}>
    <div className={`${index < 2 && "ml-2"} flex`}>{header}</div>
  </th>
));

function GuardList() {
  const [guardList, setGuardList] = useState([]);
  const [isDisplayPopup, setDisplayPopup] = useState(false);
  const [guardDetail, setGuardDetail] = useState({});

  const handleDisplayDetail = async (guardId) => {
    try {
      const res = await getGuardById({ guardId });
      setGuardDetail(res.data);
    } catch (error) {
      console.error(console.error());
    }
    setDisplayPopup(true);
  };

  useEffect(() => {
    getGuardList()
      .then(
        (res) => res?.data && res?.data.length > 0 && setGuardList(res?.data)
      )
      .catch((err) => console.error("ERROR: ", err));
  }, []);

  const BodyTable = () =>
    guardList.map((guard) => (
      <BodyTableRow
        key={guard.guard_id}
        guardId={guard.guard_id}
        name={guard.firstname + " " + guard.firstname}
        gender={guard.gender}
        phone={guard.phone}
        dob={moment(guard.dob).format("DD-MM-YYY")}
        handleDisplayDetail={handleDisplayDetail}
      />
    ));

  return (
    <div>
      <img src={helloAdmin} className="w-full" />
      <div className="flex justify-center w-full mt-4">
        <table className="w-[98%] bg-white border border-gray-300">
          <thead>
            <tr className="border border-gray-300 ">{HeaderTable}</tr>
          </thead>
          {guardList.length > 0 && <BodyTable />}
        </table>
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
            <GuardDetail details={guardDetail} />
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
  guardId,
  name,
  gender,
  phone,
  dob,
  handleDisplayDetail,
}) => {
  return (
    <tbody>
      <tr>
        <td className="py-3 border-b border-gray-300 pl-2">
          <img
            src="https://source.unsplash.com/random"
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
          />
        </td>
        <td className="py-3 border-b border-gray-300 pl-2">{name}</td>
        <td className="py-3 border-b border-gray-300">
          {gender ? "Male" : "Female"}
        </td>
        <td className="py-3  border-b border-gray-300">{phone}</td>
        <td className="py-3 border-b border-gray-300">{dob}</td>
        <td
          className="py-3 border-b border-gray-300"
          onClick={() => handleDisplayDetail(guardId)}
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

export default GuardList;
