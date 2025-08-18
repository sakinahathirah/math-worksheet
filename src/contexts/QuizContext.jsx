import { createContext, useContext, useState } from "react";
import questions from "../data/questions";

const QuizContext = createContext();

export const QuizProvider = ({children})=>{
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);

    const submitAnswer = (questionId, selectedOption) => {
    setAnswers((prev) => {
            const updatedAnswers = {
                ...prev,
                [questionId]: selectedOption
            };
            console.log('updatedAnswers',updatedAnswers)
            return updatedAnswers;
        });
    };

    const calculateScore = (questions) => {
        let newScore = 0;
        console.log('length',questions.length)
        questions.forEach((q) => {
            console.log('selectedAns',answers[q.id])
            console.log('correctAns',q.correctAnswer)
        if (answers[q.id] === q.correctAnswer) {
            newScore++;
            console.log('newScore: ', newScore)
        }
        });
        setScore(newScore);
        return newScore;
    };


     const resetQuiz = () => {
        setAnswers({});
        setScore(0);
    };


    return(
        <QuizContext.Provider 
            value={{
                score,
                answers,
                submitAnswer,
                calculateScore,
                resetQuiz
            }}
        >
            {children}
        </QuizContext.Provider>
    );

}

export const useQuiz = ()=>useContext(QuizContext);