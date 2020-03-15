import React from "react";
import styles from "./Eye.module.scss";

const Eye = props => {
  const { type } = props;

  let eye;

  switch (type) {
    case "sheaLeft":
      eye = <p className={`${styles.sheaLeft} ${styles.eye}`}></p>;
      break;
    case "sheaRight":
      eye = <p className={`${styles.sheaRight} ${styles.eye}`}></p>;
      break;
    case "liamLeft":
      eye = <p className={`${styles.liamLeft} ${styles.eye}`}></p>;
      break;
    case "liamRight":
      eye = <p className={`${styles.liamRight} ${styles.eye}`}></p>;
      break;
    case "mattLeft":
      eye = <p className={`${styles.mattLeft} ${styles.eye}`}></p>;
      break;
    case "mattRight":
      eye = <p className={`${styles.mattRight} ${styles.eye}`}></p>;
      break;
  }

  return <>{eye}</>;
};

export default Eye;
