import React, { useState } from "react";

import GuardList from "./GuardList";
import CustomerList from "./CustomerList";
import BookingList from "./BookingList";
import Dashboard from "./Dashboard";

import BaseButton from "../../components/Button";
import { useAuth } from "../../hooks/Auth";

import NewsList from "./NewsList";
import Quantity from "./Detail/Quatity";
import IcNoti from "../../assets/notification-svgrepo-com.svg";

import "./styles.css";
import AdminNotification from "./Detail/AdminNotification";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("quantity");
  const [showNotificationPopup, setShowNotificationPopup] = useState(false); // Step 1


  const { logout } = useAuth();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowNotificationPopup(false);
  };

  return (
<<<<<<< HEAD
    <div className="flex h-screen">
      <div className="w-52">
        <div className="p-6">
          <h1 className="text-2xl font-bold"
          >
            Dashboard
          </h1>
=======
    <div className='flex h-screen'>
      {/* <img src={helloAdmin} className='w-full' /> */}
      <div
        className={`absolute cursor-pointer top-10 right-[50px] p-3 flex justify-end  ${
          activeTab === 'notifications' ? 'bg-[#C7923E] text-white rounded-full' : ''
        }`}
        onClick={() => {
          setShowNotificationPopup(!showNotificationPopup);
        }}
      >
        <img src={IcNoti} height={'32px'} width={'32px'} />
        
        {showNotificationPopup && (
            <div className='absolute bg-white p-4 rounded-lg shadow-lg mt-10'>
              <AdminNotification handleTabClick={handleTabClick} />
            </div>
          )}
      </div>
      <div className='w-52'>
        <div className='p-6'>
          <h1 className='text-2xl font-bold'>Dashboard</h1>
>>>>>>> f3ee0549a0149341fa4465b2585ca268333a0dad
        </div>
        <div className='h-1/2'>
          <ul className='h-1/2'>
            <li
              className={`p-4 cursor-pointer ${activeTab === 'quantity' ? 'bg-[#C7923E] text-white' : ''}`}
              onClick={() => handleTabClick('quantity')}
            >
              Quantity
            </li>

            <li
              className={`p-4 cursor-pointer ${activeTab === 'customers' ? 'bg-[#C7923E] text-white' : ''}`}
              onClick={() => handleTabClick('customers')}
            >
              Customers
            </li>

            <li
              className={`p-4 cursor-pointer ${activeTab === 'guards' ? 'bg-[#C7923E] text-white' : ''}`}
              onClick={() => handleTabClick('guards')}
            >
              Guards
            </li>

            <li
              className={`p-4 cursor-pointer ${activeTab === 'bookings' ? 'bg-[#C7923E] text-white' : ''}`}
              onClick={() => handleTabClick('bookings')}
            >
              Bookings
            </li>
<<<<<<< HEAD
            <li
              className={`p-4 cursor-pointer ${
                activeTab === "dashboard" ? "bg-[#C7923E] text-white" : ""
              }`}
              onClick={() => handleTabClick("dashboard")}
            >
              Dashboard
=======

            <li
              className={`p-4 cursor-pointer ${activeTab === 'news' ? 'bg-[#C7923E] text-white' : ''}`}
              onClick={() => handleTabClick('news')}
            >
              News
>>>>>>> f3ee0549a0149341fa4465b2585ca268333a0dad
            </li>
          </ul>
          <div className='h-[100%] flex justify-center items-end'>
            <BaseButton className='flex justify-center items-center bg-[#C7923E]' content={'Logout'} onClick={logout} />
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className="bg-gray-100">
        {activeTab === "customers" && <CustomerList />}
        {activeTab === "guards" && <GuardList />}
        {activeTab === "bookings" && <BookingList />}
        {activeTab === "dashboard" && <Dashboard />}
=======
      <div className='bg-gray-100 w-full'>
        {activeTab === 'quantity' && <Quantity setShowNotificationPopup={setShowNotificationPopup} />}
        {activeTab === 'customers' && <CustomerList setShowNotificationPopup={setShowNotificationPopup} />}
        {activeTab === 'guards' && <GuardList setShowNotificationPopup={setShowNotificationPopup} />}
        {activeTab === 'bookings' && <BookingList setShowNotificationPopup={setShowNotificationPopup} />}
        {activeTab === 'news' && <NewsList setShowNotificationPopup={setShowNotificationPopup} />}
        {/* {activeTab === 'notifications' && <AdminNotification handleTabClick={handleTabClick} />} */}
>>>>>>> f3ee0549a0149341fa4465b2585ca268333a0dad
      </div>
    </div>
  );
};

export default Admin;
