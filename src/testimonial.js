import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const Testimonials = () => {
  return (
    <div className="container my-5">
      {/* Heading */}
      <h2 className="text-center mb-4" style={{ color: "navy" }}>
        What Our Users Say
      </h2>

      {/* Carousel with Testimonials */}
      <Carousel
        indicators={true}
        interval={3000}
        pause="hover"
        className="shadow"
        nextIcon={
          <span
            aria-hidden="true"
            className="carousel-control-next-icon"
            style={{ filter: "invert(1%) sepia(20%) saturate(8%) hue-rotate(214deg) brightness(50%) contrast(70%)" }}
          />
        }
        prevIcon={
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon"
            style={{ filter: "invert(1%) sepia(20%) saturate(8%) hue-rotate(214deg) brightness(50%) contrast(70%)" }}
          />
        }
      >
        {/* Testimonial 1 */}
        <Carousel.Item>
          <div
            className="d-flex flex-column justify-content-center align-items-center p-4"
            style={{
              backgroundColor: "rgba(226, 226, 255, 0.877)",
              borderRadius: "15px",
              padding: "20px",
            }}
          >
            <p className="text-center fs-5">
              "Healthify has revolutionized how I manage my health. The online
              consultation feature saved me so much time!"
            </p>
            <h5 className="text-muted mt-3">- Maria Khan</h5>
          </div>
        </Carousel.Item>

        {/* Testimonial 2 */}
        <Carousel.Item>
          <div
            className="d-flex flex-column justify-content-center align-items-center p-4"
            style={{
              backgroundColor: "rgba(226, 226, 255, 0.877)",
              borderRadius: "15px",
              padding: "20px",
            }}
          >
            <p className="text-center fs-5">
              "Booking lab tests and getting results through Healthify is super easy. A one-stop solution for healthcare!"
            </p>
            <h5 className="text-muted mt-3">- Ahmed Raza</h5>
          </div>
        </Carousel.Item>

        {/* Testimonial 3 */}
        <Carousel.Item>
          <div
            className="d-flex flex-column justify-content-center align-items-center p-4"
            style={{
              backgroundColor: "rgba(226, 226, 255, 0.877)",
              borderRadius: "15px",
              padding: "20px",
            }}
          >
            <p className="text-center fs-5">
              "I can now book appointments with trusted doctors without the hassle of waiting in long queues. Highly recommended!"
            </p>
            <h5 className="text-muted mt-3">- Ayesha Iqbal</h5>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonials;
