import React from "react";
import styles from "./SheaFace.module.scss";
import Face from "../../components/Face";
import Eye from "../../components/Eye";

const SheaFace = props => {
  return (
    <>
      <div className={styles.face}>
        <Face />
        <span className={styles.leftEye}>
          <Eye type={"sheaLeft"} />
        </span>
        <span className={styles.rightEye}>
          <Eye type={"sheaRight"} />
        </span>
      </div>
    </>
  );
};

export default SheaFace;
