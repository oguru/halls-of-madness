import React from "react";
import styles from "./Eye.module.scss";

const Eye = props => {
  const { leftEye, rightEye, leftText, rightText } = props;

  let eyeImage;

  leftEye ? (eyeImage = leftEye) : (eyeImage = rightEye);

  return (
    <>
      <img
        src={eyeImage}
        alt={eyeImage}
        className={`${styles.eyeSize} ${styles[leftText]} ${styles[rightText]}`}
      />
    </>
  );
};

export default Eye;
