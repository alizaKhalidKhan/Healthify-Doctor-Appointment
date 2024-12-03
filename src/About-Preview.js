import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import doctorImage from './Capture.PNG'; 


const AboutPreview = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "navy" }}>
        About Us
      </h2>
      <div className="row align-items-center"
      style={{
        backgroundColor: "rgba(226, 226, 255, 0.877)",
        borderRadius: "10px",
        paddingRight: "30px",
        paddingTop: "20px",
        paddingLeft: "20px",
        textAlign: "justify",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }}
      >
        {/* Left Side: Image */}
        <div className="col-md-6">
          <img
            src={doctorImage} // Image path
            alt="Doctor"
            className="img-fluid rounded"
            style={{ maxHeight: "800px", objectFit: "cover" }}
          />
        </div>

        {/* Right Side: Text and Button */}
        <div className="col-md-6">
          <p>
          Healthify is your ultimate solution for modern healthcare needs. Our platform seamlessly connects patients with a network of experienced and trusted doctors, making healthcare more accessible than ever. Whether you're looking for a routine check-up, specialized consultations, or immediate healthcare advice, Healthify offers a comprehensive range of services to meet your needs.
          </p>
          <p>
          We understand that managing health can be time-consuming and stressful, which is why we've simplified appointment booking, allowing you to book, reschedule, or cancel appointments with just a few clicks. With Healthify, you can easily find doctors that match your needs, without the hassle of long waiting times or crowded clinics.
          </p>
          <p>
          In addition, we prioritize the privacy and security of your health data. Our platform ensures that your personal health information is protected with the latest encryption technologies, giving you peace of mind. Whether you're consulting a doctor online or booking a lab test, your data is always safe with us.At Healthify, we're committed to revolutionizing healthcare by bringing trusted healthcare services to your fingertips. Our mission is to make healthcare more efficient, accessible, and convenient for everyone, empowering you to take control of your health journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;
