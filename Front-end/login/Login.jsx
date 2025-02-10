import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./App.css"; // Import CSS for styles

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      alert("Please fill in all fields.");
    } else {
      alert(`Login Successful!\nEmail: ${email}`);
    }
  };

  return (
    <div className="login-page">
      <div className="waves">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="login-container">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Log In</button>
        </form>
        <p>
          Don't have an account? <Link to="/sign-up" className="login-link">Sign up</Link>
        </p>
        <p>
          <Link to="/forgot-password" className="forgot-password-link">Forgot password?</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
