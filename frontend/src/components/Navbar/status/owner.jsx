import React, { useState, useEffect, useRef } from "react";
import OwnerDropDownProfile from "../UserNavBar/dropDownMenu";
import { Link } from "react-router-dom";
import HomeDropDown from "../UserNavBar/HomeDropDown";

const OwnerNavbar = () => {
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
                            <a className="nav-link" href="/">
                                Home
                            </a>
                            <div className="HomeDropDown-content">
                                <HomeDropDown />
                            </div>
                        </li>
                        {shouldDisplayAdditionalElement && (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#services">
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#features">
                                        Features
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/#team">
                                        Team
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/#contact">
                                        Contact
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/adminprofile">
                                        Profile
                                    </a>
                                </li>
                            </>
                        )}
                        <li className="nav-item">
                            <a className="nav-link" href="/StorePage">
                                Store
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/AllCrafts">
                                Crafts
                            </a>
                        </li>


                        {/* To add elements from the avatar dropdown list in the menu on mobile screen (<991px) */}
                        {shouldDisplayAdditionalElement && (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="/MyProducts">
                                        My Products
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/MyCrafts">
                                        My Crafts
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Log out
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
                    <div style={{ maxWidth: "60px" }}>
                        <img
                            className="img"
                            src={require("../../../assets/images/navbar/ProfileImage.png")}
                            alt="Profile Image"
                            onClick={() => setOpenProfile((prev) => !prev)}
                        />


                        {/* To make dropdown Open and close on click on the avatar */}
                        {/* To add an element to the dropdown, go to <DropDownProfile/> */}
                        {openProfile && <OwnerDropDownProfile />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default OwnerNavbar;