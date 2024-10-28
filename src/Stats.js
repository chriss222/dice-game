import reverse from "/public/assets/reverse_ico.png";

export default function Stats({ value, above, setAbove }) {
  const winChance = above ? 100 - value : value;
  const multiplier = winChance > 0 ? (100 / winChance).toFixed(2) : 0;

  return (
    <>
      <div className="stats-container">
        <div className="stat-container">
          <h2>Multiplier</h2>
          <p>{multiplier}</p>
        </div>
        <div className="stat-container">
          <h2>Roll over</h2>
          <p>{value}</p>
        </div>
        <div className="stat-container">
          <h2>Win Chance</h2> <p>{winChance}%</p>
        </div>
      </div>
      <button className="reverse-btn" onClick={() => setAbove(!above)}>
        {above ? "Switch to Roll Below" : "Switch to Roll Above"}{" "}
        <img height={20} width={20} src={reverse} />
      </button>
    </>
  );
}
