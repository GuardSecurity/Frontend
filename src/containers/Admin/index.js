import React, { useState } from "react";
import User from "./User";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen">
      <div className="w-64">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <ul>
          <li
            className={`p-4 cursor-pointer ${
              activeTab === "dashboard" ? "bg-[#C7923E] text-white" : ""
            }`}
            onClick={() => handleTabClick("dashboard")}
          >
            Dashboard
          </li>
          <li
            className={`p-4 cursor-pointer ${
              activeTab === "messages" ? "bg-[#C7923E] text-white" : ""
            }`}
            onClick={() => handleTabClick("messages")}
          >
            Users
          </li>
          <li
            className={`p-4 cursor-pointer ${
              activeTab === "settings" ? "bg-[#C7923E] text-white" : ""
            }`}
            onClick={() => handleTabClick("settings")}
          >
            Salary
          </li>
        </ul>
      </div>
      <div className="flex-1 bg-gray-100">
        {activeTab === "dashboard" && <p>Dash</p>}
        {activeTab === "messages" && <User />}
        {activeTab === "settings" && (
          <div className="p-6">
            <h2 className="text-2xl font-bold">Settings Content</h2>
            <p>This is the content for the Settings tab.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
