import React from "react";
import styles from "./Face.module.scss";
// import shea from "../../assets/shea.png";
// import matt from "../../assets/matt.png";
// import liam from "../../assets/liam.png";

const Face = (props) => {
  const {face} = props;
  let selectedFace;

  let randomFace;

  const getRandomFace = Math.floor(Math.random() * 3)

  // switch (true) {
  //   // case (i===0):
  //   //   randomFace = shea
  //   //   break;
  //   // case (i===1):
  //   //   randomFace = matt
  //   //   break;
  //   // case (i===2):
  //   //   randomFace = liam
  //   //   break;
  //   case (getRandomFace === 0):
  //     return <img src={shea} alt="shea" />
  //   case (getRandomFace === 1):
  //     return <img src={matt} alt="matt" />
  //   default: 
  //   return <img src={liam} alt="liam" />
  //   break;
  // }  


//   const printFace = () =>


//   // if (face === "shea") {
//   //   selectedFace = shea;
//   // }
//   // else if (face === "matt") {
//   //   selectedFace = matt;
//   // }
//   // else {
//   //   selectedFace = liam;
//   // }

//   // console.log(selectedFace);
  
// console.log(face);


  return (
    <>
      <img src={face} alt="liam" className={styles.face} />
    </>
  );
};

export default Face;
