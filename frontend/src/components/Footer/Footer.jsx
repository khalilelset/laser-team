import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="footer-top">
          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-4">
                <img class="logo" src="img/logo-white.svg" alt="" />
              </div>
              <div class="col-lg-2">
                <h5 class="text-white">Brand</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2">
                <h5 class="text-white">More</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="#">FAQ's</a>
                  </li>
                  <li>
                    <a href="#">Privacy & Policy</a>
                  </li>
                  <li>
                    <a href="#">Warranty</a>
                  </li>
                  <li>
                    <a href="#">Shipment</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4">
                <h5 class="text-white">Contact</h5>
                <ul class="list-unstyled">
                  <li>Address: 2715 Ash Dr. San Jose, South Dakota 83475</li>
                  <li>Email: jackson.graham@example.com</li>
                  <li>Phone: (603) 555-0123</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom py-3">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <p class="mb-0">
                  © 2020 copyright all right reserved | Designed with{" "}
                  <i class="bx bx-heart text-danger"></i> by
                  <a
                    href="https://www.youtube.com/channel/UCYMEEnLzGGGIpQQ3Nu_sBsQ"
                    class="text-white"
                  >
                    SA7MAN
                  </a>
                </p>
              </div>
              <div class="col-md-6">
                <div class="social-icons">
                  <a href="#">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-instagram-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;