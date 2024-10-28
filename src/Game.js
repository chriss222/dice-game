import { useState, useEffect, useRef } from "react";

export default function Game({ above, result, value, setValue }) {
  const isValid = above ? result > value : result < value;
  const resultRef = useRef(null);

  useEffect(() => {
    if (!result) return;
    resultRef.current.classList.remove("reveal");
    void resultRef.current.offsetWidth;
    resultRef.current.classList.add("reveal");
  }, [result]);

  return (
    <div className="board">
      <div className="range">
        <div
          style={{
            transform: `translateX(${result}%)`,
            color: `${isValid ? "#00e701" : "#e9113c"}`,
          }}
          className="dice-result"
        >
          <div className={`result`} ref={resultRef}>
            {result?.toFixed(2)}
          </div>
        </div>
        <div className="steps">
          {[0, 25, 50, 75, 100].map((val) => (
            <div key={val} className="step-val" style={{ left: `${val}%` }}>
              {val}
            </div>
          ))}
        </div>
        <div className="range-content">
          {above ? (
            <>
              <div style={{ width: `${value}%` }} className="lower bar" />
              <div
                style={{ width: `${100 - value}%` }}
                className="higher bar"
              />
            </>
          ) : (
            <>
              <div style={{ width: `${value}%` }} className="higher bar" />
              <div style={{ width: `${100 - value}%` }} className="lower bar" />
            </>
          )}
        </div>
        <input
          className="slider"
          min={2}
          max={98}
          type={"range"}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
