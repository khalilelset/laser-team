import React, { useState, useEffect, useRef } from "react";
import DropDownProfile from "./dropDownMenu";

const Navbar = () => {
  const [shouldDisplayAdditionalElement, setShouldDisplayAdditionalElement] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setShouldDisplayAdditionalElement(window.innerWidth <= 991);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.classList.contains("img")
      ) {
        setOpenProfile(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (


    // NavBar
    <nav className="navbar navbar-expand-lg py-3 sticky-top navbar-light bg-white">
      <div className="container">


        {/* To add a logo to the NavBar */}
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
          <ul className="navbar-nav ms-auto" ref={dropdownRef}>


            {/* To add an element to the NavBar */}
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home Page
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Store
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Crafts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Vendors
              </a>
            </li>


            {/* To add elements from the avatar dropdown list in the menu on mobile screen (<991px) */}
            {shouldDisplayAdditionalElement && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#Profile">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#MyCard">
                    My Card
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#MyProducts">
                    My Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#MyCrafts">
                    My Crafts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Login">
                    Log out
                  </a>
                </li>
              </>
            )}
          </ul>


          {/* NavBar avatar */}
          <button className="btn btn-primary ms-lg-3 button">Join Us</button>
          <div style={{ maxWidth: "70px" }}>
            <img
              className="img"
              src={require("../../../assets/images/navbar/ProfileImage.png")}
              alt="Profile Image"
              onClick={() => setOpenProfile((prev) => !prev)}
            />


            {/* To make dropdown Open and close on click on the avatar */}
            {/* To add an element to the dropdown, go to <DropDownProfile/> */}
            {openProfile && <DropDownProfile />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
