export default function Controls({
  balance,
  betAmount,
  setBetAmount,
  gameError,
}) {
  return (
    <div className="controls-container">
      <div className="bet-controls">
        <div className="stat-container">
          <h2>Bet amount</h2> <p>{betAmount}</p>
        </div>
        <div className="stat-container">
          <h2>Balance</h2> <p>{balance.toFixed(2)}</p>
        </div>
      </div>
      <div className="input-container">
        <input
          className={`bet-input ${gameError ? "error" : ""}`}
          onChange={(e) => setBetAmount(e.target.value)}
          value={betAmount}
          onFocus={(e) => e.target.select()}
        />
        <button
          className="bet-control"
          onClick={() => setBetAmount(Math.max(betAmount / 2, 0.25))}
        >
          1/2
        </button>
        <button
          className="bet-control"
          onClick={() => {
            const doubleBet = betAmount * 2;
            setBetAmount(doubleBet < balance ? doubleBet : balance``);
          }}
        >
          2x
        </button>
      </div>
      {gameError && <div className="error">Balance too low</div>}
    </div>
  );
}
