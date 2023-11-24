import React, { useState } from "react";

import GuardList from "./GuardList";
import CustomerList from "./CustomerList";
import BookingList from "./BookingList";

import BaseButton from "../../components/Button";
import { useAuth } from "../../hooks/Auth";

import "./styles.css";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("customers");

  const { logout } = useAuth();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen">
      <div className="w-52">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="h-1/2">
          <ul>
            <li
              className={`p-4 cursor-pointer ${
                activeTab === "customers" ? "bg-[#C7923E] text-white" : ""
              }`}
              onClick={() => handleTabClick("customers")}
            >
              Customers
            </li>
            <li
              className={`p-4 cursor-pointer ${
                activeTab === "guards" ? "bg-[#C7923E] text-white" : ""
              }`}
              onClick={() => handleTabClick("guards")}
            >
              Guards
            </li>
            <li
              className={`p-4 cursor-pointer ${
                activeTab === "bookings" ? "bg-[#C7923E] text-white" : ""
              }`}
              onClick={() => handleTabClick("bookings")}
            >
              Bookings
            </li>
          </ul>
          <div className="h-full flex justify-center items-end">
            <BaseButton
              className="mt-2 flex justify-center items-center bg-[#C7923E]"
              content={"Logout"}
              onClick={logout}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        {activeTab === "customers" && <CustomerList />}
        {activeTab === "guards" && <GuardList />}
        {activeTab === "bookings" && <BookingList />}
      </div>
    </div>
  );
};

export default Admin;
