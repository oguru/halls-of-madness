import React, { useState } from "react";
import styles from "./SheaFace.module.scss";
import Face from "../../components/Face";
import Eye from "../../components/Eye";

const SheaFace = props => {
  const { eyeAngle } = props;

  const [currentAngle, changeAngle] = useState(0);

  const checkAngle = () => (currentAngle === eyeAngle ? 0 : eyeAngle);

  const setLeftAngle = { transform: `rotate(${currentAngle}deg)` };

  const setRightAngle = { transform: `rotate(${-currentAngle}deg)` };

  return (
    <>
      <div className={styles.face} onClick={() => changeAngle(checkAngle())}>
        <Face />
        <div style={setLeftAngle} className={styles.leftEye}>
          <Eye type={"sheaLeft"} />
        </div>
        <div style={setRightAngle} className={styles.rightEye}>
          <Eye type={"sheaRight"} />
        </div>
      </div>
    </>
  );
};

export default SheaFace;

// {
// transform: [{ rotate: '90deg'}]
// <div className={styles.leftEye} style={{transform: rotate(currentAngle)}}>
