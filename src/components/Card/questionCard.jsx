
import { useQuiz } from "../../contexts/QuizContext";

function QuestionCard({question, onNext, onPrevious, isFirstQuestion, isLastQuestion}){
    const { answers, submitAnswer } = useQuiz();

    const handleSelect = (option) => {
        submitAnswer(question.id, option);
        if (!isLastQuestion) {
            onNext(); // auto next after selecting
        }
    }
	

    return (
        <div className="question-card">
            <h2 className="question-text">{question.question}</h2>
            <form className="options-container">
                {question.options.map((option, i) => (
                <label key={i} className="option">
                    <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={answers[question.id]  === option}
                    onChange={() => {
                        handleSelect(option);
                        e.currentTarget.blur(); 
                    }}
                    />
                    <span className="option-text">{option}</span>
                </label>
                ))}
            </form>

            <div className="navigation">
                {!isFirstQuestion && <button className="nav-btn prev-btn" onClick={onPrevious}>⬅️ Previous</button>}
                {!isLastQuestion ? (
                <button className="nav-btn next-btn" onClick={onNext}>Next ➡️</button>
                ) : (
                <button className="nav-btn submit-btn" onClick={onNext}>✅ Submit</button>
                )}
            </div>
            </div>
    );
}

export default QuestionCard;