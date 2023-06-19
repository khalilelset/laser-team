import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HomeDropDown from "../UserNavBar/HomeDropDown";

const GuestNavbar = () => {
    const [shouldDisplayAdditionalElement, setShouldDisplayAdditionalElement] = useState(false);
    const dropdownRef = useRef(null);
    const user = window.localStorage.getItem("email");

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
                    </ul>


                    {/* NavBar avatar */}
                    {!user ?
                        (<Link to="/login">
                            <button className="btn btn-primary ms-lg-3 button">Sign in</button>
                        </Link>) : (<span></span>)}

                </div>
            </div>
        </nav>
    );
};

export default GuestNavbar;