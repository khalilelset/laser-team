import React from "react";
import lg from '../../assets/img/lg1.png'

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="footer-top">
          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-4">
                {/* <img class="logo" src="img/logo-white.svg" alt="" /> */}
                <img className="logo" src={lg} alt="" />
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
                  <li>Address:223 , LaSer , Azme , 3345</li>
                  <li>Email: TripoliStore1@gmail.com</li>
                  <li>Phone: (961) 71-740318</li>
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
                  © 2023 copyright all right reserved | Designed with{" "}
                  <i class="bx bx-heart text-danger"></i> by
                  <a
                    href=""
                    class="text-white"
                  >
                    KHALED
                  </a>
                </p>
              </div>
              <div class="col-md-6">
                <div class="social-icons">
                  <a href="#">
                    <img src={process.env.PUBLIC_URL + '/img/face.png'} style={{borderRadius:'100%' , height:'100%'}}/>
                  </a>
                  <a href="#">
                  <img src={process.env.PUBLIC_URL + '/img/insta.png'} style={{borderRadius:'100%' , height:'100%'}}/>
                  </a>
                  <a href="#">
                  <img src={process.env.PUBLIC_URL + '/img/twitter.png'} style={{borderRadius:'100%' , height:'100%'}}/>
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
