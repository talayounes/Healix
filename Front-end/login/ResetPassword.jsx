import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Optional, style it as per your design

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      alert("Please fill in both fields.");
    } else if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
    } else {
      alert("Password reset successful!");
      // After password is reset, navigate to the login page
      navigate("/login");
    }
  };

  return (
    <div className="reset-password-page">
      <div className="reset-password-container">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            id="newPassword"
            placeholder="Enter new password"
            value={newPassword}
            onChange={handleChangeNewPassword}
            required
          />
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
