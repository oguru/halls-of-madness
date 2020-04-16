import React from "react";
import styles from "./Dashboard.module.scss";
import RandomFace from "../RandomFace";
import shea from "../../assets/shea.png";
import matt from "../../assets/matt.png";
import liam from "../../assets/liam.png";
import sheaLeft from "../../assets/shea-left.png";
import sheaRight from "../../assets/shea-right.png";
import mattLeft from "../../assets/matt-left.png";
import mattRight from "../../assets/matt-right.png";
import liamLeft from "../../assets/liam-left.png";
import liamRight from "../../assets/liam-right.png";

const Dashboard = props => {
  const { stopClickMe, changeClickMeStatus, number, oh } = props;

  let faceArray = [
    // <RandomFace 
    //   face={shea}
    //   leftEyePos = "sheaLeft"
    //   rightEyePos = "sheaRight"
    //   leftEye = {sheaLeft}
    //   rightEye = {sheaRight}
    //   eyeAngle={Math.floor(Math.random() * (360 - 1)) + 1} />,
    // <RandomFace 
    //   face={matt} 
    //   leftEyePos = "mattLeft"
    //   rightEyePos = "mattRight"
    //   leftEye = {mattLeft}
    //   rightEye = {mattRight}
    //   eyeAngle={Math.floor(Math.random() * (360 - 1)) + 1} />,
    // <RandomFace 
    //   face={liam} 
    //   leftEyePos = "liamLeft"
    //   rightEyePos = "liamRight"
    //   leftEye = {liamLeft}
    //   rightEye = {liamRight}
    //   eyeAngle={Math.floor(Math.random() * (360 - 1)) + 1} />
  ];

  for (let i = 0; i < number; i++) {

    let randomFace;
    let leftEyePos;
    let rightEyePos

    const getRandomFace = Math.floor(Math.random() * 3)

    if (i === 0) {
      randomFace = shea
      leftEyePos = "sheaLeft"
      rightEyePos = "sheaRight"
    }
    else if (i === 1) {
      randomFace = matt
      leftEyePos = "mattLeft"
      rightEyePos = "mattRight"
    }
    else if (i === 2) {
      randomFace = liam
      leftEyePos = "liamLeft"
      rightEyePos = "liamRight"
    }
    else {
      switch (getRandomFace) {

        case (0):
          randomFace = shea
          leftEyePos = "sheaLeft"
          rightEyePos = "sheaRight"
          break;
        case (1):
          randomFace = matt
          leftEyePos = "mattLeft"
          rightEyePos = "mattRight"
          break;
        default:
          randomFace = liam
          leftEyePos = "liamLeft"
          rightEyePos = "liamRight"
          break;
      }
    }

    let getLeftEye = Math.floor(Math.random() * 3);
    let leftText;
    let getRightEye = Math.floor(Math.random() * 3);
    let rightText;

    switch (getLeftEye) {
      case (0):
        getLeftEye = sheaLeft;
        leftText = "sheaLeft"
        break;
      case (1):
        getLeftEye = mattLeft;
        leftText = "mattLeft"
        break;
      case (2):
        getLeftEye = liamLeft;
        leftText = "liamLeft"
        break;
    }

    switch (getRightEye) {
      case (0):
        getRightEye = sheaRight;
        rightText = "sheaRight"
        break;
      case (1):
        getRightEye = mattRight;
        rightText = "mattRight"
        break;
      case (2):
        getRightEye = liamRight;
        rightText = "liamRight"
        break;
    }


    faceArray.push(
      <RandomFace
        changeClickMeStatus={changeClickMeStatus}
        stopClickMe={stopClickMe}
        oh={oh}
        face={randomFace}
        leftEyePos={leftEyePos}
        rightEyePos={rightEyePos}
        leftEye={getLeftEye}
        rightEye={getRightEye}
        leftText={leftText}
        rightText={rightText}
        eyeAngle={Math.floor(Math.random() * (360 - 1)) + 20} />
    );
  }

  return (
    <>
      {/* <h1>Halls of Madness</h1> */}
      <section className={styles.dashboard}>{faceArray}</section>
    </>
  );
};

export default Dashboard;
