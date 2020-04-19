import React, { useState, useEffect } from "react";
import "./App.css";
import styles from "./App.module.scss";
import border from "./assets/grunge-frame.png";
import Dashboard from "./containers/Dashboard";
import audio from "./assets/audio/audio.js";

function App() {
  const [randomNum, changeNumber] = useState(0);
  const [startVisibility, changeVisibility] = useState(styles.startBtnInit);
  const [bgOverlayStatus, changeBgOverlay] = useState(styles.bgOverlayOn);
  const [clickMeStatus, changeClickMeStatus] = useState(false);

  //get random number from API
  useEffect(() => {
    fetch(
      "https://www.random.org/integers/?num=1&min=15&max=22&col=1&base=10&format=plain&rnd=new"
    )
      .then(result => result.json())
      .then(result => changeNumber(result))
      .catch(error => console.log(error));
  }, []);

  //method to create sounds
  function sound(src, vol) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.sound.volume = vol;
    document.body.appendChild(this.sound);
    this.play = function () {
      this.sound.play();
    };
    this.stop = function () {
      this.sound.pause();
    };
  }

  let welcome = new sound(audio.intro.welcome, 0.5);
  let lightning = new sound(audio.intro.lightning, 0.4);
  let laugh = new sound(audio.intro.laugh, 0.5);

  const clickMe = audio.clickMe.map(audio => new sound(audio, 0.5));
  const oh = audio.oh.map(audio => new sound(audio, 0.5));

  //button to start init sounds, clickme sounds, and to bring faces into view
  const handleClick = () => {
    changeVisibility(styles.startBtnClicked);
    welcome.play();
    lightning.play();
    setTimeout(() => {
      laugh.play();
      changeVisibility(styles.startBtnDisplayNone);
      changeBgOverlay(styles.bgOverlayOff);
    }, 3700);
    setTimeout(() => {
      changeClickMeStatus(true);
    }, 8000);
  };

  //play the selected clickme sound
  const playClickMe = index => {
    clickMe[index].play();
  };

  let soundLoop;

  // clickme sound loop
  const playRandomClickMe = () => {
    const randomClickMe = Math.floor(Math.random() * clickMe.length);
    playClickMe(randomClickMe);
    let randTime = Math.ceil(Math.random() * (2500 - 1000) + 1000);
    soundLoop = setTimeout(() => {
      playRandomClickMe();
    }, randTime);
  };

  //to break clickme sound loop
  const stopClickMe = () => clearTimeout(soundLoop);

  if (clickMeStatus === true) {
    playRandomClickMe();
  }

  return (
    <>
      <span></span>
      <img src={border} className={styles.mainPage} alt="border" />
      <h1 className={startVisibility}>Halls of Madness</h1>
      {/* prettier-ignore */}
      <h2 className={startVisibility}>Enter &#8202; at your own peril...</h2>
      <button onClick={() => handleClick()} className={startVisibility}>
        Start
      </button>
      <section className={styles.dashboardContainer}>
        <Dashboard
          clickMeStatus={clickMeStatus}
          stopClickMe={stopClickMe}
          oh={oh}
          number={randomNum}
        />
      </section>
      <section className={`${styles.bgOverlay} ${bgOverlayStatus}`}></section>
    </>
  );
}

export default App;
