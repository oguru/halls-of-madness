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
  const { stopClickMe, clickMeStatus, number, oh } = props;

  let faceArray = [];

  //gets n number of random eyes and faces
  for (let i = 0; i < number; i++) {
    let randomFace;
    let leftEyePos;
    let rightEyePos;

    const getRandomFace = Math.floor(Math.random() * 3);

    //if statement to initialise with one of each face and original eyes, then continue to random
    if (i === 0) {
      randomFace = shea;
      leftEyePos = "sheaLeft";
      rightEyePos = "sheaRight";
    } else if (i === 1) {
      randomFace = matt;
      leftEyePos = "mattLeft";
      rightEyePos = "mattRight";
    } else if (i === 2) {
      randomFace = liam;
      leftEyePos = "liamLeft";
      rightEyePos = "liamRight";
    } else {
      switch (getRandomFace) {
        case 0:
          randomFace = shea;
          leftEyePos = "sheaLeft";
          rightEyePos = "sheaRight";
          break;
        case 1:
          randomFace = matt;
          leftEyePos = "mattLeft";
          rightEyePos = "mattRight";
          break;
        default:
          randomFace = liam;
          leftEyePos = "liamLeft";
          rightEyePos = "liamRight";
          break;
      }
    }

    let getLeftEye = Math.floor(Math.random() * 3);
    let leftText;
    let getRightEye = Math.floor(Math.random() * 3);
    let rightText;

    switch (getLeftEye) {
      case 0:
        getLeftEye = sheaLeft;
        leftText = "sheaLeft";
        break;
      case 1:
        getLeftEye = mattLeft;
        leftText = "mattLeft";
        break;
      default:
        getLeftEye = liamLeft;
        leftText = "liamLeft";
        break;
    }

    switch (getRightEye) {
      case 0:
        getRightEye = sheaRight;
        rightText = "sheaRight";
        break;
      case 1:
        getRightEye = mattRight;
        rightText = "mattRight";
        break;
      default:
        getRightEye = liamRight;
        rightText = "liamRight";
        break;
    }

    // create face array to print
    faceArray.push(
      <RandomFace
        key={`rand${faceArray.length}`}
        clickMeStatus={clickMeStatus}
        stopClickMe={stopClickMe}
        oh={oh}
        face={randomFace}
        leftEyePos={leftEyePos}
        rightEyePos={rightEyePos}
        leftEye={getLeftEye}
        rightEye={getRightEye}
        leftText={leftText}
        rightText={rightText}
        eyeAngle={Math.floor(Math.random() * (360 - 1)) + 20}
      />
    );
  }

  return <section className={styles.dashboard}>{faceArray}</section>;
};

export default Dashboard;
