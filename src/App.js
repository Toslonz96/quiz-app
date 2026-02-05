import { createContext, useState } from "react";
import Menu from "./component/Menu";
import Quiz from "./component/Quiz";
import Score from "./component/Score";

import "./App.css";

export const DataContext = createContext();

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  
  return (
    <DataContext.Provider value={{ gameState, setGameState, score, setScore }}>
      <div className="App">
        <h1>Web Development Quiz</h1>
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "score" && <Score />}
      </div>
    </DataContext.Provider>
  );
}

export default App;
