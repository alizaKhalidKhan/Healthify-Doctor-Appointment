import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurServices.css'; // Link the CSS file for additional styling

function OurServices() {
  return (
    <div className="container our-services">
      {/* Our Services Section */}
      <section className="service-section text-center">
        <h2 className="mb-4">Our Services</h2>
        <div className="service-info">
          <p>
            We are an online platform that provides a convenient and hassle-free way to book doctor appointments online. Our platform allows you to book appointments with specialized and general doctors, making it easy for you to get the medical care you need. Whether you're looking for a general check-up or specialized treatment, our platform provides you with a wide range of options to choose from. Our goal is to make healthcare more accessible and convenient for everyone.
          </p>
        </div>
      </section>
    </div>
  );
}

export default OurServices;
