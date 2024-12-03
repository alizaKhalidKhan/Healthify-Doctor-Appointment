import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import Navbar from "./navbar.js";
import Caraousel from "./caraousel.js";
import AboutPreview from "./About-Preview.js";
import OurServices from "./OurServices.js";
import Testimonials from "./testimonial.js";
import WhyChooseUs from "./WhyChooseUs.js";
import ContactUs from "./contactus.js";
import Footer from "./footer.js";
import Experts from "./experts.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Caraousel />
        <AboutPreview />
        <OurServices />
        <WhyChooseUs />
        <Experts />
        <Testimonials />
        <ContactUs />
        <Footer />

      </div>
    </Router>
  );
}

export default App;
