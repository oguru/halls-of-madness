import React, { useState } from "react";
import styles from "./RandomFace.module.scss";
import Face from "../../components/Face";
import Eye from "../../components/Eye";

const RandomFace = props => {
  const {
    stopClickMe,
    clickMeStatus,
    oh,
    eyeAngle,
    face,
    leftEyePos,
    rightEyePos,
    leftEye,
    rightEye,
    leftText,
    rightText,
  } = props;

  const [currentAngle, changeAngle] = useState(0);

  const checkAngle = () => (currentAngle === eyeAngle ? 0 : eyeAngle);

  const setLeftAngle = { transform: `rotate(${currentAngle}deg)` };
  const setRightAngle = { transform: `rotate(${-currentAngle}deg)` };

  //Play a random "oh" sound
  const playOh = () => {
    const randomOh = Math.floor(Math.random() * oh.length);
    oh[randomOh].play();
  };

  let backgroundStyle;

  //show faces once start button is clicked
  clickMeStatus === true
    ? (backgroundStyle = styles.showFaces)
    : (backgroundStyle = styles.hideFaces);

  return (
    <>
      <section className={backgroundStyle}>
        <div
          className={styles.faceDefault}
          onClick={() => {
            changeAngle(checkAngle());
            playOh();
            stopClickMe();
          }}>
          <Face face={face} />
          <div
            style={setLeftAngle}
            className={`${styles[leftEyePos]} ${styles.eye}`}>
            <Eye leftEye={leftEye} leftText={leftText} />
          </div>
          <div
            style={setRightAngle}
            className={`${styles[rightEyePos]} ${styles.eye}`}>
            <Eye leftEye={rightEye} rightText={rightText} />
          </div>
        </div>
      </section>
    </>
  );
};

export default RandomFace;
