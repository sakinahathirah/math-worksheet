import { useQuiz } from "../contexts/QuizContext";
import questions from "../data/questions";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/result.css"

const Result = () => {
  const { score, resetQuiz } = useQuiz();
  const location = useLocation();
  const userName = location.state?.userName || "Player"; 

  const [badge, setBadge] = useState("");
  
  useEffect(() => {
    if (score >= 10) setBadge("Gold");
    else if (score >= 7) setBadge("Silver");
    else setBadge("Bronze");
  }, [score]);

  return (
    <div className="result-page">
      <div className="confetti-wrapper">
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
      </div>

      <h1 className="result-title">🎉 Well done, {userName}!</h1>

      <div className="score-card">
        <h2 className="score">{score} / {questions.length}</h2>
        <div className={`badge ${badge.toLowerCase()}`}>
          {badge === "Gold" && "⭐ Gold"}
          {badge === "Silver" && "⭐ Silver"}
          {badge === "Bronze" && "⭐ Bronze"}
        </div>
      </div>

      <div className="fun-fact">
        <p>Fun Fact: Did you know your brain uses about 20% of your body's energy?</p>
        <p>Keep practicing, you're getting smarter every step! 🚀</p>
      </div>

      <div className="result-buttons">
        <Link to="/">
          <button className="result-btn" onClick={resetQuiz}>Try Again 🔄</button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
