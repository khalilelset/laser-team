import React, { useState, useEffect, useRef } from "react";
import OwnerNavbar from "../status/owner";
import ClientNavbar from "../status/client";
import GuestNavbar from "../status/guest";

const Navbar = () => {
  const [shouldDisplayAdditionalElement, setShouldDisplayAdditionalElement] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const dropdownRef = useRef(null);
  const user = window.localStorage.getItem("email");
  var access = 0;
  const status = window.localStorage.getItem("status");
  if (status === "owner") {
    access = 1;
  }
  else if (status === "client") {
    access = 2;
  }
  else {
    access = 0;
  }

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
    <>
      {access === 1 && <OwnerNavbar />}
      {access === 2 && <ClientNavbar />}
      {access === 0 && <GuestNavbar />}
      
    </>
  );
};

export default Navbar;