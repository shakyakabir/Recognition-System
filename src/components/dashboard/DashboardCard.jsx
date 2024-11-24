import React from "react";
import Sidebar from "../../components/common/sidebar/sidebar.jsx";
import styles from "./dashboard.module.css";

const DashboardCard = () => {
  return (
    <>
      <div className={styles.datacard}>
        <p className={styles.InfoCard}> TODAY'S SENSIOR</p>
        <h6 className={styles.InfoCardPrice}>3505 PERSON</h6>

        <p className="mt-3">
          <span className={styles.financialperformance}>+3.48%</span>
          <span className={styles.ProfitLossNotifier}>Since last month</span>
        </p>
      </div>

      <div className={styles.datacard1}>
        <p className={styles.InfoCard}> TODAY'S SENSIOR</p>
        <h6 className={styles.InfoCardPrice}>3505 PERSON</h6>

        <p className="mt-3">
          <span className={styles.financialperformance}>+3.48%</span>
          <span className={styles.ProfitLossNotifier}>Since last month</span>
        </p>
      </div>

      <div className={styles.datacard2}>
        <p className={styles.InfoCard}> TODAY'S SENSIOR</p>
        <h6 className={styles.InfoCardPrice}>3505 PERSON</h6>

        <p className="mt-3">
          <span className={styles.financialperformance}>+3.48%</span>
          <span className={styles.ProfitLossNotifier}>Since last month</span>
        </p>
      </div>
    </>
  );
};
export default DashboardCard;
