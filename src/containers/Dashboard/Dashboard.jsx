import React from "react";
import styles from "./Dashboard.module.scss";
import SheaFace from "../SheaFace";

const Dashboard = props => {
  const { number } = props;

  let faceArray = [];

  for (let i = 0; i < number; i++) {
    faceArray.push(<SheaFace />);
  }

  return (
    <>
      {console.log(faceArray)}

      <section className={styles.dashboard}>{faceArray}</section>
    </>
  );
};

export default Dashboard;
