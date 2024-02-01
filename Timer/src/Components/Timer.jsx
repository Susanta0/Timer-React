import { useState, useEffect } from "react";
const Timer = () => {
  const [count, setCount] = useState(20);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timerId;
    if (count > 0 && isActive) {
      timerId = setInterval(() => {
        setCount((pre) => pre - 1);
      }, 1000);
    }
    return () => clearTimeout(timerId);
  }, [isActive, count]);

  return (
    <>
      <div className="timerContainer">
        <p>
          Count decreasing : <strong>{count}</strong>
        </p>
        <div className="buttonContainer">
          <button onClick={() => setCount(20)}>Reset</button>
          <button onClick={() => setIsActive(false)}>Pause</button>
          <button onClick={() => setIsActive(true)}>Resume</button>
        </div>
      </div>
    </>
  );
};

export default Timer;
