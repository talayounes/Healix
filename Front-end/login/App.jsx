import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./App.css"; // Your CSS for styles

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    dob: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, dob, role } = formData;
    if (!username || !email || !password || !dob || !role) {
      alert("Please fill in all fields.");
    } else {
      alert(
        `Signup Successful!\nUsername: ${username}\nEmail: ${email}\nDOB: ${dob}\nRole: ${role}`
      );
    }
  };

  return (
    <div className="signup-page">
      <div className="waves">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
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
          <input
            type="date"
            id="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <select
            id="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select account type</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
            <option value="admin">Administrator</option>
          </select>

          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/Login" className="login-link">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default App;
