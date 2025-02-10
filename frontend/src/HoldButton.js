import React, { useState, useRef } from "react";
import "./HoldButton.css"; // Import the external CSS file

const HoldButton = () => {
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  const startHold = () => {
    let startTime = Date.now();
    timerRef.current = setInterval(() => {
      let elapsed = Date.now() - startTime;
      let percentage = (elapsed / 3000) * 100;
      if (percentage >= 100) {
        clearInterval(timerRef.current);
        window.location.href = "about:blank"; // Redirects to a blank page
      }
      setProgress(percentage);
    }, 50);
  };

  const cancelHold = () => {
    clearInterval(timerRef.current);
    setProgress(0);
  };

  return (
    <div className="button-container">
      <button
        onMouseDown={startHold}
        onMouseUp={cancelHold}
        onMouseLeave={cancelHold}
        className="hold-button"
      >
        EMERGENCY
        <div className="fill" style={{ width: `${progress}%` }}></div>
      </button>
    </div>
  );
};

export default HoldButton;
