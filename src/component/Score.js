import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionData";   

const Score = () => {
    const {score, setScore, setGameState} = useContext(DataContext);

    const RestartQuiz = () => {
        setScore(0);
        setGameState("menu");
    }

    return (
        <div className="score">
            <h1>Your Score</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={RestartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default Score;