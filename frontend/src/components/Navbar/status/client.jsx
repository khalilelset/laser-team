import React, { useState, useEffect, useRef } from "react";
import ClientDropDownProfile from "../UserNavBar/ClientDropDownMenu";
import HomeDropDown from "../UserNavBar/HomeDropDown";
import { Link } from "react-router-dom";
import ShoppingCart from "../../ShoppingCart/ShoppingCart";

const ClientNavbar = () => {
  const [shouldDisplayAdditionalElement, setShouldDisplayAdditionalElement] =
    useState(false);
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
  //Start Code of getCartProduct
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const email = window.localStorage.getItem("email");
      const cleanedEmail = email.replace(/^"(.*)"$/, "$1");
      const response = await fetch(
        `http://localhost:4000/api/cart/getAllProduct/${cleanedEmail}`
      );
      const data = await response.json();
      if (Array.isArray(data)) {
        setProducts(data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  //End Code of getCartProduct

  // Start Code Of ShoppingCart Modal
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  // End Code Of ShoppingCart Modal

  return (
    // NavBar
    <nav className="navbar navbar-expand-lg py-3 sticky-top navbar-light bg-white">
      <div className="container">
        {/* To add a logo to the NavBar */}
       
        <h1 >Tripoli craft</h1>
       
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
            <li className="nav-item">
              <Link
                className="nav-link"
                variant="primary"
                onClick={handleOpenModal}
              >
                Shopping Cart
              </Link>
              <ShoppingCart
                show={showModal}
                onClose={handleCloseModal}
                products={products}
                style={{ width: "5000px" }}
              />
            </li>

            {/* To add elements from the avatar dropdown list in the menu on mobile screen (<991px) */}
            {shouldDisplayAdditionalElement && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/userprofile">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/MyCard">
                    My Card
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

          {/* NavBar avatar */}
          <div style={{ maxWidth: "60px" }}>
            <img
              className="img"
              src={require("../../../assets/images/navbar/ProfileImage.png")}
              alt="Profile Image"
              onClick={() => setOpenProfile((prev) => !prev)}
            />

            {/* To make dropdown Open and close on click on the avatar */}
            {/* To add an element to the dropdown, go to <DropDownProfile/> */}
            {openProfile && <ClientDropDownProfile />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ClientNavbar;
