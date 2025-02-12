import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import './index.css';
import { FaVideo, FaRobot, FaAmbulance, FaUserMd, FaDumbbell, FaCalendarAlt, FaFileMedical, FaMapMarkerAlt, FaCapsules, FaHospitalUser, FaHeartbeat, FaCog, FaBell } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  return (
    <Router>
      <div className="bg-navy-900 min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/files" element={<Files />} />
          <Route path="/video-call" element={<VideoCall />} />
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/pharmacies" element={<NearbyPharmacies />} />
          <Route path="/health-tracking" element={<HealthTracking />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navbar() {
  return (
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-blue-800 p-4 flex justify-between items-center text-white shadow-lg">
      <Link to="/" className="text-xl font-bold">Healix</Link>
      <div>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/signup" className="mr-4">Signup</Link>
        <Link to="/dashboard" className="mr-4">Dashboard</Link>
        <Link to="/profile" className="mr-4">Profile</Link>
        <Link to="/settings" className="mr-4"><FaCog className="mr-2" />Settings</Link>
        <Link to="/notifications" className="mr-4"><FaBell className="mr-2" />Notifications</Link>
        <Link to="/doctors" className="mr-4 flex items-center hover:text-gray-300"><FaUserMd className="mr-2" />Doctors</Link>
        <Link to="/fitness" className="mr-4 flex items-center hover:text-gray-300"><FaDumbbell className="mr-2" />Fitness</Link>
        <Link to="/appointments" className="mr-4 flex items-center hover:text-gray-300"><FaCalendarAlt className="mr-2" />Book Appointment</Link>
        <Link to="/files" className="mr-4 flex items-center hover:text-gray-300"><FaFileMedical className="mr-2" />Check Files</Link>
        <Link to="/video-call" className="mr-4 flex items-center hover:text-gray-300"><FaVideo className="mr-2" />Video Call</Link>
        <Link to="/ai-chat" className="mr-4 flex items-center hover:text-gray-300"><FaRobot className="mr-2" />AI Chat</Link>
        <Link to="/emergency" className="mr-4 bg-red-500 p-2 rounded flex items-center hover:bg-red-700"><FaAmbulance className="mr-2" />Emergency</Link>
        <Link to="/pharmacies" className="mr-4 flex items-center hover:text-gray-300"><FaCapsules className="mr-2" />Nearby Pharmacies</Link>
        <Link to="/health-tracking" className="mr-4 flex items-center hover:text-gray-300"><FaHeartbeat className="mr-2" />Health Tracking</Link>
      </div>
    </motion.nav>
  );
}

function Home() {
  return (
    <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mt-20">
      <h1 className="text-3xl font-bold">Welcome to Healix</h1>
      <p className="mt-4 text-gray-300">Your one-stop healthcare platform</p>
    </motion.div>
  );
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log(email, password);
  };

  return (
    <div className="mt-10 text-center">
      <h1 className="text-3xl font-bold">Login</h1>
      <form onSubmit={handleLogin} className="mt-6">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 mb-4 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 mb-4 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

function Signup() {
  return (
    <div className="mt-10 text-center">
      <h1 className="text-3xl font-bold">Signup</h1>
      <form className="mt-6">
        <input type="email" placeholder="Email" className="p-2 mb-4 rounded" />
        <input type="password" placeholder="Password" className="p-2 mb-4 rounded" />
        <button className="bg-blue-500 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}

function Dashboard() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mt-20">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4 text-gray-300">Welcome back! Here are your health stats.</p>
    </motion.div>
  );
}

function Profile() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mt-20">
      <h1 className="text-3xl font-bold">Profile</h1>
      <p className="mt-4 text-gray-300">Edit your personal information here.</p>
    </motion.div>
  );
}

function Settings() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mt-20">
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="mt-4 text-gray-300">Adjust your preferences and notifications.</p>
    </motion.div>
  );
}

function Notifications() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mt-20">
      <h1 className="text-3xl font-bold">Notifications</h1>
      <p className="mt-4 text-gray-300">Stay updated with the latest news and alerts.</p>
    </motion.div>
  );
}

function Doctors() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mt-20">
      <h1 className="text-3xl font-bold">Doctors</h1>
      <p className="mt-4 text-gray-300">Search and book consultations with doctors.</p>
      <input type="text" placeholder="Search Doctors" className="p-2 rounded" />
    </motion.div>
  );
}

function Fitness() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mt-20">
      <h1 className="text-3xl font-bold">Fitness</h1>
      <p className="mt-4 text-gray-300">Track your fitness goals and progress.</p>
    </motion.div>
  );
}

function Appointments() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mt-20">
      <h1 className="text-3xl font-bold">Appointments</h1>
      <p className="mt-4 text-gray-300">Book your next appointment with ease.</p>
    </motion.div>
  );
}

function Files() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mt-20">
      <h1 className="text-3xl font-bold">Medical Files</h1>
      <p className="mt-4 text-gray-300">Access your medical records here.</p>
    </motion.div>
  );
}

function VideoCall() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mt-20">
      <h1 className="text-3xl font-bold">Video Call</h1>
      <p className="mt-4 text-gray-300">Start a video consultation with a doctor.</p>
    </motion.div>
  );
}

function AIChat() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mt-20">
      <h1 className="text-3xl font-bold">AI Chat</h1>
      <p className="mt-4 text-gray-300">Chat with our AI assistant for health-related questions.</p>
    </motion.div>
  );
}

function Emergency() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mt-20">
      <h1 className="text-3xl font-bold">Emergency</h1>
      <p className="mt-4 text-gray-300">Call an ambulance in case of an emergency.</p>
    </motion.div>
  );
}

function NearbyPharmacies() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mt-20">
      <h1 className="text-3xl font-bold">Nearby Pharmacies</h1>
      <p className="mt-4 text-gray-300">Find pharmacies near you.</p>
    </motion.div>
  );
} /* General Styles */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #001f3d; /* Navy Blue Background */
  color: white;
}

h1, h2, h3, h4 {
  font-family: 'Segoe UI', sans-serif;
  font-weight: 600;
  color: #fff;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #d1d3d4; /* Lighter Text Color */
}

/* Navbar */
nav {
  background-color: #003f73; /* Darker Navy */
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

nav a {
  text-decoration: none;
  color: #f0f0f0;
  margin-right: 20px;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #47b8e0; /* Light Cyan Color */
}

nav .text-xl {
  font-size: 1.6rem;
  font-weight: bold;
}

nav .bg-red-500 {
  background-color: #e63946; /* Red for Emergency Button */
}

nav .bg-red-500:hover {
  background-color: #d62c1f;
}

/* Button Styles */
button {
  background-color: #47b8e0; /* Light Cyan Color */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

button:hover {
  background-color: #0396b1;
}

/* Container and Layout */
.container {
  width: 80%;
  margin: auto;
}

.text-center {
  text-align: center;
}

.mt-20 {
  margin-top: 2rem;
}

/* Hero Section */
.hero {
  background-color: #002c56; /* Slightly darker navy for contrast */
  padding: 80px 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.hero h1 {
  font-size: 3rem;
  color: #ffffff;
}

.hero p {
  font-size: 1.3rem;
  margin-top: 15px;
}

/* Form Styles */
input[type="text"],
input[type="email"],
input[type="password"],
textarea {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #003a5e;
  color: white;
  margin-bottom: 15px;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
textarea:focus {
  outline: none;
  border-color: #47b8e0;
}

form {
  width: 60%;
  margin: auto;
  background-color: #1c2c45;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

form input[type="submit"] {
  width: 100%;
  background-color: #47b8e0;
  padding: 12px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}

form input[type="submit"]:hover {
  background-color: #0396b1;
}

/* Cards and Sections */
.card {
  background-color: #003a5e;
  padding: 20px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.card h2 {
  font-size: 1.8rem;
  color: white;
}

.card p {
  font-size: 1.1rem;
  color: #ddd;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    width: 90%;
  }

  nav {
    flex-direction: column;
    align-items: flex-start;
  }

  nav a {
    margin-right: 0;
    margin-bottom: 10px;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  form {
    width: 90%;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem;
  }

  nav .text-xl {
    font-size: 1.4rem;
  }

  .card {
    padding: 15px;
  }
}

function HealthTracking() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mt-20">
      <h1 className="text-3xl font-bold">Health Tracking</h1>
      <p className="mt-4 text-gray-300">Monitor your health data.</p>
    </motion.div>
  );
}

export default App;
