import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.scss";
import border from "./assets/grunge-frame.png"
import Dashboard from "./containers/Dashboard";
import audio from "./assets/audio/audio.js";

function App() {

  let fetchedNum;

  const [randomNum, changeNumber] = useState(0);
  const [appStarted, startApp] = useState({ display: `block` });

  useEffect(() => {
    fetch('https://www.random.org/integers/?num=1&min=15&max=22&col=1&base=10&format=plain&rnd=new')
      .then(result => result.json())
      .then(result => {
        fetchedNum = result;
        updateNum()
        // updateNum(result) ??
      })
      .catch(error => console.log(error));
    // welcome.play();
    // lightning.play();
    // setTimeout(() => {
    //   laugh.play();
    // }, 3300);
  }, []);

  const updateNum = () => changeNumber(fetchedNum);

  function sound(src, vol, delay) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.sound.volume = vol;
    document.body.appendChild(this.sound);
    this.play = function () {
      this.sound.play();
    }
    this.stop = function () {
      this.sound.pause();
    }
  }

  let welcome = new sound(audio.intro.welcome, 0.5);
  let lightning = new sound(audio.intro.lightning, 0.4);
  let laugh = new sound(audio.intro.laugh, 0.5);

  const clickMe = audio.clickMe.map(audio => new sound(audio, 0.5))
  console.log(clickMe);

  // for (let i = 0; i < audio.clickMe.length; i++)

  // const startClickMeSounds

  const handleClick = () => {
    startApp({ display: `none` })
  }


  return (
    <>
      <span></span>
      <img src={border} className={styles.mainPage} />
      <button onClick={() => handleClick()} style={appStarted}>Start</button>
      {/* <section className={styles.dashboardContainer}>
        <Dashboard number={randomNum} />
      </section> */}
    </>
  );
}

export default App;
