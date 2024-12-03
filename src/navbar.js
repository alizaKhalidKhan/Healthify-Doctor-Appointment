import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Website Name */}
        <a className="navbar-brand fw-bold heading" href="/">
          HEALTHIFY
        </a>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {/* Navbar Pages */}
            {["Home", "About Us", "Our Services", "Contact Us", "Book An Appointment"].map((page, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="nav-link text-black"
                  href={`#${page.toLowerCase().replace(/ /g, "-")}`}
                  style={{ transition: "color 0.3s ease" }}
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>

          {/* Login/Signup Button */}
          <button className="btn btn-primary fw-bold button">
            Login/Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
