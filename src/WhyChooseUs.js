import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const WhyChooseUs = () => {
  return (
    <div
      className="container my-5"
      style={{
        padding: "20px",
      }}
    >
      {/* Heading */}
      <h2 className="text-center mb-4" style={{ color: "navy" }}>
        Why Choose Healthify
      </h2>

      {/* Features */}
      <div className="row">
        <div className="col-md-6">
          {/* Verified Doctors */}
          <div
            className="d-flex align-items-start mb-3"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "15px", borderRadius: "8px" , backgroundColor: "rgba(226, 226, 255, 0.877)"}}
          >
            <i className="bi bi-person-check-fill fs-2 text-primary me-3"></i>
            <div>
              <h5 style={{ color: "navy" }}>Verified Doctors</h5>
              <p>Access a network of experienced and trusted medical professionals.</p>
            </div>
          </div>

          {/* Online Consultations */}
          <div
            className="d-flex align-items-start mb-3"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "15px", borderRadius: "8px" , backgroundColor: "rgba(226, 226, 255, 0.877)"}}
          >
            <i className="bi bi-laptop-fill fs-2 text-primary me-3"></i>
            <div>
              <h5 style={{ color: "navy" }}>Online Consultations</h5>
              <p>Get expert advice from the comfort of your home.</p>
            </div>
          </div>
        {/* Interface */}
          <div
            className="d-flex align-items-start mb-3"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "15px", borderRadius: "8px" , backgroundColor: "rgba(226, 226, 255, 0.877)"}}
          >
            <i className="bi bi-phone-fill fs-2 text-primary me-3"></i>
            <div>
              <h5 style={{ color: "navy" }}>User Friendly Interface</h5>
              <p> Our platform is designed with simplicity in mind, making it easy for everyone to navigate and book appointments effortlessly.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          {/* Hassle-Free Appointments */}
          <div
            className="d-flex align-items-start mb-3"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "15px", borderRadius: "8px" , backgroundColor: "rgba(226, 226, 255, 0.877)"}}
          >
            <i className="bi bi-calendar-check-fill fs-2 text-primary me-3"></i>
            <div>
              <h5 style={{ color: "navy" }}>Hassle-Free Appointments</h5>
              <p>Book, reschedule, or cancel appointments in just a few clicks.</p>
            </div>
          </div>

          {/* Data Security */}
          <div
            className="d-flex align-items-start mb-3"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "15px", borderRadius: "8px" , backgroundColor: "rgba(226, 226, 255, 0.877)" }}
          >
            <i className="bi bi-shield-lock-fill fs-2 text-primary me-3"></i>
            <div>
              <h5 style={{ color: "navy" }}>Data Security</h5>
              <p>Your health data is private and secure with us.</p>
            </div>
          </div>
          {/* Availability */}
          <div
            className="d-flex align-items-start mb-3"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "15px", borderRadius: "8px" , backgroundColor: "rgba(226, 226, 255, 0.877)" }}
          >
            <i className="bi bi-clock-fill fs-2 text-primary me-3"></i>
            <div>
              <h5 style={{ color: "navy" }}>24/7 Accessibility</h5>
              <p>Book appointments anytime, anywhere. Our platform is accessible 24/7 to ensure that healthcare is just a click away.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
