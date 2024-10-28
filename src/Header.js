import { defaultState } from "./utils";

export default function Header({ setGameState }) {
  return (
    <div className="header-container">
      <h1 className="header">Roll the dice 🎲</h1>
      <button
        className="restart-btn"
        onClick={() => setGameState(defaultState)}
      >
        Restart game
      </button>
    </div>
  );
}
