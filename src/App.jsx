import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./containers/Dashboard";

function App() {
  // let randomNum;

  // const createFaces = number => {
  //   <Dashboard number={number} />;
  // };

  // fetch("https://csrng.net/csrng/csrng.php?min=1&max=100")
  //   .then(result => {
  //     randomNum = result[0].random;
  //     return createFaces(randomNum);
  //   })
  //   .catch(error => console.log(error));

  return (
    <>
      <Dashboard number={5} />
    </>
  );
}

export default App;
