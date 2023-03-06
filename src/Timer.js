import React from "react";
import { useState, useEffect } from "react";

const TimerSection = () => {
  let time = 15;
  const [seconds, setSeconds] = useState(time * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) setSeconds(seconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  function resolveDebts() {}
  function newDebt() {}
  function reset() {
    setSeconds(time * 60);
  }

  return (
    <div>
      <div style={{ height: 60 }} className="timer">
        <p>
          {String(Math.floor(seconds / 60)).padStart(2, "0")}:
          {String(seconds % 60).padStart(2, "0")}
        </p>
      </div>
      <div className="container" style={{ height: 40 }}>
        <button onClick={reset}>Reset</button>
        <button onClick={resolveDebts}>Resolve Debts</button>
        <button onClick={newDebt}>New Debt</button>
      </div>
    </div>
  );
};

export default TimerSection;
