import React, { useState, useRef } from "react";

const Button = () => {
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
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#12143e",
      margin: "0"
    }}>
      <button
        onMouseDown={startHold}
        onMouseUp={cancelHold}
        onMouseLeave={cancelHold}
        style={{
          width: "400px",
          height: "100px",
          border: "5px solid red",
          color: "white",
          fontSize: "50px",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "bold",
          borderRadius: "50px",
          background: "red",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
          position: "relative",
          overflow: "hidden"
        }}
      >
        EMERGENCY
        <div style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          backgroundColor: "red",
          width: `${progress}%`,
          transition: "width 0.1s"
        }}></div>
      </button>
    </div>
  );
};

export default Button;

