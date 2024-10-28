import { useState } from "react";
import Game from "./Game";
import Stats from "./Stats";
import Controls from "./Controls";
import { rollRiggedDice, rollRandomDice, defaultState } from "./utils.js";
import "./styles.css";
import Header from "./Header";

export default function App() {
  const [gameState, setGameState] = useState(defaultState);

  const rollDice = () => {
    if (gameState.balance < gameState.betAmount)
      return setGameState({ ...gameState, gameError: true });
    // Rigged Roll 🤑🤑🤑
    /* const roll = rollRiggedDice(); */
    // Random Roll
    const roll = rollRandomDice();
    const winChance = gameState.above ? 100 - gameState.value : gameState.value;
    const multiplier = winChance > 0 ? (100 / winChance).toFixed(2) : 0;

    setGameState((prevState) => {
      const isWin =
        (prevState.above && roll > prevState.value) ||
        (!prevState.above && roll < prevState.value);

      return {
        ...prevState,
        result: roll,
        balance: isWin
          ? prevState.balance +
            prevState.betAmount * multiplier -
            prevState.betAmount
          : prevState.balance - prevState.betAmount,
      };
    });
  };

  console.log("VALUE: ", gameState.value);
  console.log("DICE ROLL: ", gameState.result);
  console.log("BALANCE: ", gameState.balance);
  console.log("BET AMOUNT: ", gameState.betAmount);

  return (
    <div className="App">
      <Header setGameState={setGameState} />
      <Game
        above={gameState.above}
        value={gameState.value}
        setValue={(value) =>
          setGameState((prevState) => ({ ...prevState, value }))
        }
        result={gameState.result}
      />
      <div className="player-container">
        <Controls
          balance={gameState.balance}
          betAmount={gameState.betAmount}
          gameError={gameState.gameError}
          setBetAmount={(betAmount) =>
            setGameState((prevState) => ({
              ...prevState,
              gameError: false,
              betAmount,
            }))
          }
        />
        <div className="player-dashboard">
          <button
            disabled={gameState.gameError}
            className="play-btn"
            onClick={rollDice}
          >
            BET
          </button>
          <Stats
            above={gameState.above}
            value={gameState.value}
            setAbove={(above) =>
              setGameState((prevState) => ({ ...prevState, above }))
            }
          />
        </div>
      </div>
    </div>
  );
}
