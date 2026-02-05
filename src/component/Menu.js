import { useContext } from "react";
import { DataContext } from "../App";

const Menu = () => {
    const { setGameState } = useContext(DataContext);
    return (
        <div className="menu">
            <h1>Menu Component</h1>
            <button onClick={() => setGameState("quiz")}>Start Quiz</button>
        </div>
    )
}

export default Menu;