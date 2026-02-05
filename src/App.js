import { useState } from 'react';
import Menu from './component/Menu';
import Quiz from './component/Quiz';
import Score from './component/Score';
import './App.css';

function App() {
  const [gameState, setGameState] = useState("menu");
  return (
    <div className="App">
      <h1>Web Development Quiz</h1>
      {gameState === "menu" && <Menu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "score" && <Score />}
    </div>
  );
}

export default App;
