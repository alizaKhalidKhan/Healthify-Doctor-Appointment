import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel Content */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/1.jpg" className="d-block w-100" alt="Slide 1" />
          <div className="carousel-text-overlay">
            <h1>Welcome to Healthify- Book your health, anytime, anywhere. </h1>
            <p>Find trusted doctors and schedule your appointments with ease at Healthify.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/2.webp" className="d-block w-100" alt="Slide 2" />
          <div className="carousel-text-overlay">
            <h1>Simplify Your Healthcare Journey</h1>
            <p>Easily find the best doctors, book appointments, and take charge of your health with Healthify.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/3.jpg" className="d-block w-100" alt="Slide 3" />
          <div className="carousel-text-overlay">
            <h1>Trusted by Thousands of Patients</h1>
            <p>Join our community of satisfied users who rely on Healthify for their health and wellness needs.</p>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
