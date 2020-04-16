import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.scss";
import border from "./assets/grunge-frame.png"
import Dashboard from "./containers/Dashboard";
import audio from "./assets/audio/audio.js";

function App() {

  let fetchedNum;
  let playStatus;
  let startBtn;

  const [randomNum, changeNumber] = useState(0);
  const [appStarted, startApp] = useState(false);
  const [appShown, appVisibility] = useState();
  const [startVisibility, changeVisibility] = useState(styles.startBtnInit);
  const [bgOverlayStatus, changeBgOverlay] = useState(styles.bgOverlayOn);
  const [clickMeStatus, changeClickMeStatus] = useState(false);


  useEffect(() => {
    fetch('https://www.random.org/integers/?num=1&min=15&max=22&col=1&base=10&format=plain&rnd=new')
      .then(result => result.json())
      .then(result => {
        fetchedNum = result;
        updateNum()
        // updateNum(result) ??
      })
      .catch(error => console.log(error));
    // let welcome = new sound(audio.intro.welcome, 0.5);
    // let lightning = new sound(audio.intro.lightning, 0.4);
    // let laugh = new sound(audio.intro.laugh, 0.5);
    // appStarted === true ? appVisibility = startAppFunc() : null;
    startBtn = styles.startBtnInit;

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

  const clickMe = audio.clickMe.map(audio => new sound(audio, 0.5));
  const oh = audio.oh.map(audio => new sound(audio, 0.5));



  // for (let i = 0; i < audio.clickMe.length; i++)

  // const startClickMeSounds

  const handleClick = () => {
    startApp(true);
    playStatus = "";
    changeVisibility(styles.startBtnClicked);
    changeBgOverlay(styles.bgOverlayOff);
    // welcome.play();
    // lightning.play();
    // setTimeout(() => {
    // laugh.play();
    playStatus = { display: `none` };
    // }, 4200);
    setTimeout(() => {
      changeClickMeStatus(true)
    }, 3000);
  }

  const playClickMe = (index) => clickMe[index].play();

  let soundLoop;

  const playRandomClickMe = () => {
    const randomClickMe = Math.floor(Math.random() * clickMe.length);
    playClickMe(randomClickMe);
    let randTime = Math.ceil(Math.random() * (2500 - 1000) + 1000);
    soundLoop = setTimeout(() => {
      playRandomClickMe()
    }, randTime);
  }

  const stopClickMe = () => clearTimeout(soundLoop);

  if (clickMeStatus === true) {
    playRandomClickMe();
  }

  return (
    <>
      <span></span>
      <img src={border} className={styles.mainPage} />
      <button onClick={() => handleClick()} className={startVisibility} style={playStatus}>Start</button>
      <section className={styles.dashboardContainer}>
        <Dashboard changeClickMeStatus={changeClickMeStatus} stopClickMe={stopClickMe} oh={oh} number={randomNum} />
      </section>
      <section className={`${styles.bgOverlay} ${bgOverlayStatus}`}>
      </section>
    </>
  );
}

export default App;
