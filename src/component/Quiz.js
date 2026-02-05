import QuestionsData from "../data/QuestionData";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "./../App";

const Quiz = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const {score, setScore, setGameState} = useContext(DataContext);

  useEffect(() => {
    checkAnswer();
  }, [selectedAnswer]);

  const checkAnswer = () => {
    if (selectedAnswer !== "") {
      if (selectedAnswer === QuestionsData[currentQuestion].answer) {
        setScore(score + 1);
        nextQuestion();
        console.log("ตอบถูก +1 คะแนน");
      } else {
        nextQuestion();
        console.log("ตอบผิดไม่มีคะแนน T_T");
      }
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer("");
    if (currentQuestion === QuestionsData.length - 1) {
        setGameState("score");
    }else{
        setCurrentQuestion(currentQuestion + 1);
    }   
  };
  return (
    <div className="quiz">
      <h1>{QuestionsData[currentQuestion].question}</h1>
      <div className="choices">
        <button onClick={() => setSelectedAnswer("A")}>
          {QuestionsData[currentQuestion].A}
        </button>
        <button onClick={() => setSelectedAnswer("B")}>
          {QuestionsData[currentQuestion].B}
        </button>
        <button onClick={() => setSelectedAnswer("C")}>
          {QuestionsData[currentQuestion].C}
        </button>
        <button onClick={() => setSelectedAnswer("D")}>
          {QuestionsData[currentQuestion].D}
        </button>
      </div>
      <p>{`${currentQuestion + 1} / ${QuestionsData.length}`}</p>
    </div>
  );
};

export default Quiz;
