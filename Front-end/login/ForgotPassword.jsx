import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate is imported
import "./App.css"; // Optional, create this file for styling

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize navigate hook

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Verification code sent to: ${email}`);
      // After sending the verification code, navigate to the verify page
      navigate("/verify");
    } else {
      alert("Please enter your email.");
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Verification Code</button>
        </form>
        <p>
          Remember your password? <Link to="/login" className="back-to-login-link">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
