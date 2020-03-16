import React from "react";
import styles from "./Dashboard.module.scss";
import SheaFace from "../SheaFace";

const Dashboard = props => {
  const { number } = props;

  let faceArray = [];

  for (let i = 0; i < number; i++) {
    faceArray.push(
      <SheaFace eyeAngle={Math.floor(Math.random() * (360 - 1)) + 1} />
    );
  }

  return (
    <>
      <section className={styles.dashboard}>{faceArray}</section>
    </>
  );
};

export default Dashboard;
