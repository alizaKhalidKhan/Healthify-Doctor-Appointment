import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Footer = () => {
  return (
    <footer class="custom-footer">
  <div class="container">
      <div class="row">
          <div class="col-md-4">
              <h5>About Us</h5>
              <p>Healthify is a cutting-edge platform designed to bridge the gap between patients and healthcare providers. From booking appointments with top specialists to accessing online consultations and health resources, we’re here to make healthcare simpler and accessible for everyone.</p>
          </div>
          <div class="col-md-4">
              <h5>Quick Links</h5>
              <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">About Us</a></li>
                  <li><a href="">Our Services</a></li>
                  <li><a href="">Contact Us</a></li>
                  <li><a href="">Book An appointment</a></li>
              </ul>
          </div>
          <div class="col-md-4">
              <h5>Contact Us</h5>
              <p>Email: info@Healthify.com</p>
              <p>Phone: (123) 456-7890</p>
          </div>
      </div>
      <div class="text-center mt-4">
          <p>&copy; 2024 Healthify. All Rights Reserved.</p>
      </div>
  </div>
</footer>
  );
};

export default Footer;
