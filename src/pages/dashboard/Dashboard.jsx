import React from "react";76
import Sidebar from "../../components/sidebar/Sidebar";
import Layout from "../../components/sidebar/Layout";

const Dashboard = () => {
  return (
    <div className="flex w-[100vw]">
      <Sidebar />
      <div className="w-full">
        <Layout />
      </div>
    </div>
  );
};

export default Dashboard;
