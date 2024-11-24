import React from "react";
import Sidebar from "../../components/common/sidebar/sidebar.jsx";
import dashimg from "../../assets/dashimg.png";
import styles from "./dashboard.module.css";
import Main from "../dashboard/main/main.jsx";
import DashboardCard from "./DashboardCard.jsx";
import UserOverview from "./UserOverview.jsx";
import Navbar from "../../components/common/navbar/navbar.jsx";
import ViewData from "./ViewData.jsx";
import Charts from "./Charts.jsx";

const Dashboard = () => {
  return (
    <div className={styles["container-full"]}>
      <Navbar />

      <img
        src={dashimg}
        className={styles["background-image"]}
        alt="Dashboard Background"
      />

      <div className={styles.overlay}></div>

      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className="d-flex">
        <DashboardCard />
      </div>
      <UserOverview />
      <ViewData />

      <Charts />
    </div>
  );
};

export default Dashboard;
