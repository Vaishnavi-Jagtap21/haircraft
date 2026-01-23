import React from "react";
import Sidebar from "./Pages/Sidebar";
import Overview from "./Pages/Overview";
import Services from "./Pages/Services";
import Appointments from "./Pages/Appointments";
import History from "./Pages/History";
import Users from "./Pages/Users";

import { useStore } from "../../../Store/Store";
import Navbar from "../../Navbar";

const AdminDashboard = () => {
  const { openTabId } = useStore();

  return (
    <div className="min-h-screen bg-[#fffaf4] pt-20">
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <Navbar />
        {openTabId === 1 && <Overview />}
        {openTabId === 2 && <Services />}
        {openTabId === 3 && <Appointments />}
        {openTabId === 4 && <History />}
        {openTabId === 5 && <Users />}
      </div>

      <Sidebar />
    </div>
  );
};

export default AdminDashboard;
