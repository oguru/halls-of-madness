import React, { useState } from "react";
import styles from "./SheaFace.module.scss";
import Face from "../../components/Face";
import Eye from "../../components/Eye";

const SheaFace = props => {
  const {eyeAngle} = props;

  // const angle = eyeAngle

  const [currentAngle, changeAngle] = useState(0)

  const checkAngle = eyeAngle => eyeAngle === eyeAngle ? 0 : eyeAngle;

  return (
    <>
      <div className={styles.face} onClick={changeAngle(checkAngle(eyeAngle))} >
        <Face />
        <div className={styles.leftEye} style={transform([{ rotateX: '45deg' }, { rotateZ: '0.785398rad' }])}>
          <Eye type={"sheaLeft"}/>
        </div>
        <div className={styles.rightEye}>
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
