import React from 'react';
import './AboutUs.css';  // We will link the CSS here
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
  return (
    <div className='container'>
      <h2 className="text-center mb-4" style={{ color: "navy" }}>
        Meet Our Expert Doctors
      </h2>
      <p className='para'>
          At Healthify, we are devoted to delivering compassionate, personalized care, combined with the latest medical advancements. Our mission is to enhance the health and well-being of every patient we serve, with a deep commitment to providing the highest standards of medical care. From preventative care to specialized treatments, we are here for you every step of the way on your healthcare journey.
        </p>
      {/* About Us Section */}
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src="/images/dc1.webp" className="card-img-top" alt="Doctor 1" />
            <div className="card-body">
              <h5 className="card-title">Dr. Alexandera</h5>
              <p className="card-text">
                Dr. Alexandera is a renowned specialist in cardiology with over 15 years of experience in treating heart-related conditions. His approach combines advanced technology with compassionate care.
              </p>
              <button className="btn btn-primary button ">Contact</button> {/* Button added */}
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="/images/dc23.webp" className="card-img-top" alt="Doctor 2" />
            <div className="card-body">
              <h5 className="card-title">Dr. Jane Smith</h5>
              <p className="card-text">
                Dr. Jane Smith is an expert in family medicine. She has dedicated her career to promoting health through education and preventive care, ensuring that every family member receives exceptional care.
              </p>
              <button className="btn btn-primary button">Contact</button> {/* Button added */}
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="/images/dc2.avif" className="card-img-top" alt="Doctor 3" />
            <div className="card-body">
              <h5 className="card-title">Dr. Marium Ali</h5>
              <p className="card-text">
                Dr. Marium Ali is a leading surgeon specializing in orthopedic treatments. His dedication to patient recovery and well-being has earned him the trust of hundreds of patients.
              </p>
              <button className="btn btn-primary button">Contact</button> {/* Button added */}
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="/images/dc3.png" className="card-img-top" alt="Doctor 4" />
            <div className="card-body">
              <h5 className="card-title">Dr. Sarah Lee</h5>
              <p className="card-text">
                Dr. Sarah Lee is a highly skilled dermatologist who has worked extensively in diagnosing and treating various skin conditions. Her approach emphasizes personalized care for each patient.
              </p>
              <button className="btn btn-primary button">Contact</button> {/* Button added */}
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="/images/r3.png" className="card-img-top" alt="Doctor 5" />
            <div className="card-body">
              <h5 className="card-title">Dr. Zaviyar sultan</h5>
              <p className="card-text">
                Dr. Zaviyar is a highly experienced neurologist specializing in treating disorders of the nervous system. His empathetic approach and expertise make him a trusted medical professional.
              </p>
              <button className="btn btn-primary button">Contact</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="/images/dd.webp" className="card-img-top" alt="Doctor 5" />
            <div className="card-body">
              <h5 className="card-title">Dr. Raeed Sultan</h5>
              <p className="card-text">
                Dr. Raeed is an expert oncologist with extensive experience in cancer diagnosis and treatment. He is dedicated to advancing patient care and providing hope to families.
              </p>
              <button className="btn btn-primary button">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
