import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useQuiz } from "../contexts/QuizContext";
import QuestionCard from "../components/Card/questionCard";
import ProgressBar from "../components/ProgressBar/progressBar";
import questions from "../data/questions"
import "../styles/quiz.css"

function Quiz(){

    const totalQuestions = questions.length;
    const { calculateScore } = useQuiz();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = questions[currentQuestionIndex];
    const navigate = useNavigate();
     const location = useLocation();
    const userName = location.state?.userName || "Player";

    const hanldeNextQuestion = () => {
        if(currentQuestionIndex+1 < totalQuestions) {
                    setCurrentQuestionIndex((current)=>current+1);
        } else{
            calculateScore(questions);
            navigate("/result");
        }
    }

     const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0){
            setCurrentQuestionIndex(current => (current - 1))
        }
    }

    return (
        <div className="quiz-page">
            <header className="quiz-header">
                <div className="user-info">
                    <img src="/avatar.png" alt="avatar" className="avatar"/>
                    <span className="user-name">{userName}</span>
                </div>
                <h1 className="quiz-title">Rounding Off Quiz</h1>
            </header>
        <ProgressBar current={currentQuestionIndex} total={totalQuestions} />
        <QuestionCard
            question={currentQuestion}
            onNext={hanldeNextQuestion}
            onPrevious={handlePreviousQuestion}
            isFirstQuestion={currentQuestionIndex === 0}
            isLastQuestion={currentQuestionIndex === (totalQuestions - 1)}
        />
        </div>
    );

}

export default Quiz;
