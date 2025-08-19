
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/welcome.css"; 
import pencil from "../assets/animations/pencil.gif";
import music from "../assets/sounds/happy.mp3"

function Welcome() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const text = "Hi there! I'm Fin. Let's be friend. What's your name? 🥳";
  const audioRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 100); 
    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(err => {
        console.log("Autoplay blocked by browser:", err);
      });
    }
  }, []);

  const handleStart = () => {
    if (name.trim() === "") {
      alert("Hey! Please tell us your name first 🥳");
      return;
    }
    navigate("/quiz", { state: { userName: name } });
  };

  return (
    <div className="welcome-container">

        <h1 className="welcome-title">
            Rounding Off to the Nearest 10 – Fun Worksheet!
        </h1>

      <div className="confetti-wrapper">
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
      </div>

      <div className="mascot-container">
        <img
          src={pencil} 
          alt="Happy Pencil Mascot"
          className="mascot"
        />
        <div className="speech-bubble">
        {displayedText}
        <span className="cursor">|</span>
      </div>
        {/* <p className="mascot-text">{text}</p> */}
      </div>

      <input
        className="welcome-input"
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button className="welcome-btn" onClick={handleStart}>
        Start Quiz 🚀
      </button>

      <p className="welcome-footer">Copyright © www.mathinenglish.com</p>

      <audio ref={audioRef} src="/music.mp3" autoPlay loop />

    </div>
  );
}

export default Welcome;
