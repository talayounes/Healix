import React from "react";
import "./App.css";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const existingAppointments = [{ date: "2025-07-02", time: "10:00" }];

    const booked = existingAppointments.some(app => app.date === date && app.time === time);

    if (!email.includes("@")) {
      emailError.style.display = "block";
      return;
    } else {
      emailError.style.display = "none";
    }

    if (booked) {
      alert("Sorry, this time slot is already taken. Please choose another time.");
      return;
    }

    // Show Success Modal
    document.getElementById("successModal").style.display = "flex";
  };

  const closeModal = () => {
    document.getElementById("successModal").style.display = "none";
  };

  return (
    <div className="container">
      <div className="description">
        <h2>Make An Appointment</h2>
        <p>
          Schedule an appointment with our expert doctors across multiple
          departments. Choose your preferred date and time.
        </p>
      </div>

      <div className="form-container">
        <form id="appointmentForm" onSubmit={handleSubmit}>
          <div className="form-grid">
            <select id="department">
              <option value="">Choose Department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Pediatrics">Pediatrics</option>
            </select>
            <select id="doctor">
              <option value="">Select Doctor</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
            </select>
            <input type="text" id="name" placeholder="Your Name" />
            <input type="email" id="email" placeholder="Your Email" />
            <input type="date" id="date" />
            <input type="time" id="time" />
            <p className="error" id="emailError">
              Please enter a valid email.
            </p>
            <button type="submit" className="btn">
              Make An Appointment
            </button>
          </div>
        </form>
      </div>

      {/* Video background */}
      <div className="video-background">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7dIGU2w-sRg?start=171&end=225&autoplay=1&mute=1&loop=1&playlist=7dIGU2w-sRg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Success Modal */}
      <div id="successModal" className="modal">
        <div className="modal-content">
          <div className="smiley">😊</div>
          <h3>Appointment Approved!</h3>
          <p>Check your inbox for more info.</p>
          <button className="btn-close" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

