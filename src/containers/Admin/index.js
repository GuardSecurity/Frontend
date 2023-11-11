import React, { useState } from "react";
import User from "./Guards";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("guards");

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
              activeTab === "guards" ? "bg-[#C7923E] text-white" : ""
            }`}
            onClick={() => handleTabClick("guards")}
          >
            Guards
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
        {activeTab === "guards" && <User />}
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
