import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./containers/Dashboard";

function App() {

  let fetchedNum;

  const [randomNum, changeNumber] = useState(0);

  useEffect(() => {
    fetch('https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new')
    .then(result => result.json())
    .then(result => {
        fetchedNum = result;
        updateNum()
        console.log(result);
      })
      .catch(error => console.log(error));
  }, []);
  

  const updateNum = () => changeNumber(fetchedNum);


  return (
    <>
      <Dashboard number={randomNum} />
    </>
  );
}

export default App;
