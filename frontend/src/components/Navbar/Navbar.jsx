import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-3 sticky-top navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src="img/logo-dark.svg" alt="" />
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Team
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
<<<<<<< HEAD
          <button className="btn btn-primary ms-lg-3 button">Join Us</button>
=======
          <button className="btn btn-primary ms-lg-3">login</button>
>>>>>>> 48cf31029cc72aecfa2ea49d58abe53aca4db178
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
