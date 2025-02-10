import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Verify() {
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verificationCode) {
      alert(`Verification code entered: ${verificationCode}`);
      // After successful verification, navigate to reset password page
      navigate("/reset-password");
    } else {
      alert("Please enter the verification code.");
    }
  };

  return (
    <div className="verify-page">
      <div className="verify-container">
        <h2>Enter Verification Code</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="verificationCode"
            placeholder="Enter verification code"
            value={verificationCode}
            onChange={handleChange}
            required
          />
          <button type="submit">Verify Code</button>
        </form>
        <p>
          Didn't receive the code? <a href="/forgot-password" className="resend-link">Resend</a>
        </p>
      </div>
    </div>
  );
}

export default Verify;
