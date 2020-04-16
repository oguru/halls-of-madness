import React, { useState } from "react";
import styles from "./RandomFace.module.scss";
import Face from "../../components/Face";
import Eye from "../../components/Eye";

const RandomFace = props => {
  const { stopClickMe, changeClickMeStatus, oh, eyeAngle, face, leftEyePos, rightEyePos, leftEye, rightEye, leftText, rightText } = props;

  // const { sheaFace, mattFace, liamFace } = randomFace;

  const [currentAngle, changeAngle] = useState(0);

  const checkAngle = () => (currentAngle === eyeAngle ? 0 : eyeAngle);

  const setLeftAngle = { transform: `rotate(${currentAngle}deg)` };

  const setRightAngle = { transform: `rotate(${-currentAngle}deg)` };

  const playOh = () => {
    const randomOh = Math.floor(Math.random() * oh.length);
    oh[randomOh].play();
  }

  return (
    <>
      <div className={styles.faceDefault} onClick={() => {
        changeAngle(checkAngle());
        playOh();
        changeClickMeStatus(false);
        stopClickMe();
      }}>
        <Face face={face} />
        <div style={setLeftAngle} className={`${styles[leftEyePos]} ${styles.eye}`} >

          <Eye leftEye={leftEye} leftText={leftText} />
        </div>
        <div style={setRightAngle} className={`${styles[rightEyePos]} ${styles.eye}`}>
          <Eye leftEye={rightEye} rightText={rightText} />
        </div>
      </div>
    </>
  );
};

export default RandomFace;

// {
// transform: [{ rotate: '90deg'}]
// <div className={styles.leftEye} style={{transform: rotate(currentAngle)}}>
