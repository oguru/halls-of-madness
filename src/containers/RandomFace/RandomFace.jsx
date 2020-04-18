import React, { useState } from "react";
import styles from "./RandomFace.module.scss";
import Face from "../../components/Face";
import Eye from "../../components/Eye";

const RandomFace = props => {
  const { stopClickMe, clickMeStatus, oh, eyeAngle, face, leftEyePos, rightEyePos, leftEye, rightEye, leftText, rightText } = props;

  // const { sheaFace, mattFace, liamFace } = randomFace;

  const [currentAngle, changeAngle] = useState(0);

  const [ohPlaying, updatePlaying] = useState([]);

  const [currentSound, changeSound] = useState()

  const checkAngle = () => (currentAngle === eyeAngle ? 0 : eyeAngle);

  const setLeftAngle = { transform: `rotate(${currentAngle}deg)` };

  const setRightAngle = { transform: `rotate(${-currentAngle}deg)` };

  // const playOh = () => {
  //   let currentOhSounds = ohPlaying;
  //   const randomOh = Math.floor(Math.random() * oh.length);

  //   if (ohPlaying.length > 0) {
  //     ohPlaying[0].stop();
  //     currentOhSounds = [oh[randomOh]];
  //     // .push(oh[randomOh])
  //     currentOhSounds[0].play();
  //     updatePlaying(currentOhSounds);
  //   }
  //   else {
  //     oh[randomOh].play();
  //     currentOhSounds = [oh[randomOh]];
  //     updatePlaying(currentOhSounds);
  //   }
  // }

  // const playOh = () => {
  //   let currentOhSounds = ohPlaying;
  //   const randomOh = Math.floor(Math.random() * oh.length);

  //   if (ohPlaying.length > 2) {
  //     ohPlaying[0].stop();
  //     currentOhSounds = [currentOhSounds[1], currentOhSounds[2], oh[randomOh]];
  //     // .push(oh[randomOh])
  //     console.log(currentOhSounds);
  //     // currentOhSounds[2].play();
  //     updatePlaying(currentOhSounds);
  //     ohPlaying[2].play();
  //   }
  //   else {
  //     // oh[randomOh].play();
  //     currentOhSounds.push(oh[randomOh]);
  //     currentOhSounds[currentOhSounds.length - 1].play();
  //     updatePlaying(currentOhSounds);
  //   }
  // }
  const playOh = () => {
    const randomOh = Math.floor(Math.random() * oh.length);
    oh[randomOh].play();
  }

  let backgroundStyle;

  clickMeStatus === true ? backgroundStyle = styles.showFaces : backgroundStyle = styles.hideFaces;

  return (
    <>
      <section className={backgroundStyle}>
        <div className={styles.faceDefault} onClick={() => {
          changeAngle(checkAngle());
          playOh();
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
      </section>
    </>
  );
};

export default RandomFace;

// {
// transform: [{ rotate: '90deg'}]
// <div className={styles.leftEye} style={{transform: rotate(currentAngle)}}>
