import React from "react";
import styles from "./Face.module.scss";

const Face = props => {
  const { face } = props;

  return <img src={face} alt={face} className={styles.face} />;
};

export default Face;
