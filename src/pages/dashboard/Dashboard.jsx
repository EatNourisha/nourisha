import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Layout from "../../components/sidebar/Layout";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-layout-overall">
      <Sidebar />
      <div className="right-content">
        <Layout />
      </div>
    </div>
  );
};

export default Dashboard;
