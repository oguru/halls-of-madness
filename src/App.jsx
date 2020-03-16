import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./containers/Dashboard";

function App() {
  let randomNum = 5;
  let createFaces;

  // const createFaces = number => {
  //   return <Dashboard number={number} />;
  // };

  // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  // const url = "https://csrng.net/csrng/csrng.php?min=1&max=100";

  // fetch(proxyUrl + url)
  //   .then(result => {
  //     randomNum = result[0].random;
  //     console.log(result[0]);

  createFaces = <Dashboard number={randomNum} />;
  //   })
  //   .catch(error => console.log(error));

  return (
    <>
      {/* <Dashboard number={5} /> */}
      {createFaces}
    </>
  );
}

export default App;
