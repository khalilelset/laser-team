import React from 'react'
import fc from '../../images/facebook-logo.png'
import tw from '../../images/twitter.png'
import it from '../../images/instagram2.png'
import { Link } from 'react-router-dom'
import newsletter from "../../images/newsletter.png";

const Footer = () => {
  return (
    // <footer>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-4 col-md-6">
    //         <h5>A propos</h5>
    //         <ul>
    //           <li><a href="#">Notre histoire</a></li>
    //           <li><a href="#">Notre équipe</a></li>
    //           <li><a href="#">Nos partenaires</a></li>
    //         </ul>
    //       </div>
    //       <div className="col-lg-4 col-md-6">
    //         <h5>Services</h5>
    //         <ul>
    //           <li><a href="#">Livraison</a></li>
    //           <li><a href="#">Retours</a></li>
    //           <li><a href="#">FAQ</a></li>
    //         </ul>
    //       </div>
    //       <div className="col-lg-4 col-md-6">
    //         <h5>Contactez-nous</h5>
    //         <ul>
    //           <li><a href="#">Email</a></li>
    //           <li><a href="#">Téléphone</a></li>
    //           <li><a href="#">Adresse</a></li>
    //         </ul>
    //       </div>
    //     </div>
    //     <hr />
    //     <p className="text-center">© 2023 Nom de votre entreprise. Tous droits réservés.</p>
    //   </div>
    // </footer>

    // <footer>
    //   <div className="social-media">
    //     <h1>Tripoli craft</h1>
        
    //     <a href="https://www.facebook.com"><img src={fc}/></a>
    //     <a href="https://www.twitter.com"><img src={tw}/></a>
    //     <a href="https://www.instagram.com"><img src={it}/></a>
    //   </div>
    //   <div className="contact">
    //     <h3>Contact Us</h3>
    //     <form>
    //       <label htmlFor="name">Name</label>
    //       <input type="text" id="name" name="name" placeholder="Enter your name" required />
    //       <label htmlFor="email">Email</label>
    //       <input type="email" id="email" name="email" placeholder="Enter your email" required />
    //       <label htmlFor="message">Message</label>
    //       <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
    //       <button type="submit" className='login-button-hero'>Send</button>
    //     </form>
    //   </div>
    // </footer>


<div className='footer-container'>
<footer className="py-4 blk1">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
              <Link to="login">  <img src={newsletter} alt="newsletter" /></Link>
                <h2 className="mb-0 decoration" style={{color:"#4cff1b"}}>Sign Up for vist store</h2>
              </div>
            </div>
            <div className="col-7">
            {/* <div className="input-group">
                
                </div> */}
            </div>
          </div>
        </div>
      </footer>
    <footer className="py-4 blk2">
    <div className="container-xxl">
      <div className="row">
        <div className="col-4 decoration">
          <h4 className="text-white mb-4"><Link to="/contact" style={{ textDecoration:'none' , color:'white'}}>Contact Us</Link></h4>
          <div>
            <address className="text-white fs-6 decoration">
              Hno : online <br /> Lebanon , Tripolie<br />
              PinCode: 131103
            </address>
            <a
              href="tel:+961 3 456 321"
              className="mt-3 d-block mb-1 text-white decoration"
            >   
              +91 8264954234
            </a>
            <a
              href="mailto:navdeepdahiya753@gmail.com"
              className="mt-2 d-block mb-0 text-white decoration"
            >
              LaserShop@gmail.com
            </a>
            <div className="social_icons d-flex align-items-center gap-30 mt-4">
              <a className="text-white " href="#">
                {/* <BsLinkedin className="fs-4" /> */} <img src={it}/>
              </a>
              <a className="text-white" href="#">
                {/* <BsInstagram className="fs-4" /> */}<img src={fc}/>
              </a>
              <a className="text-white" href="#">
                {/* <BsGithub className="fs-4" /> */}<img src={tw }/>
              </a>
            
            </div>
          </div>
        </div>
        <div className="col-3 decoration">
          <h4 className="text-white mb-4">Information</h4>
          <div className="footer-link d-flex flex-column">
            <Link to="/privacy-policy" className="text-white py-2 mb-1 decoration">
              Privacy Policy
            </Link>
            <Link to="/refund-policy" className="text-white py-2 mb-1 decoration" style={{ textDecoration:'none'}}>
              Refund Policy
            </Link>
            <Link to="/shipping-policy" className="text-white py-2 mb-1 decoration">
              Shipping Policy
            </Link>
            <Link to="/term-conditions" className="text-white py-2 mb-1 decoration">
              Terms & Conditions
            </Link>
            <Link className="text-white py-2 mb-1 decoration">Blogs</Link>
          </div>
        </div>
        <div className="col-3 decoration">
          <h4 className="text-white mb-4 ">Account</h4>
          <div className="footer-link d-flex flex-column">
            <Link className="text-white py-2 mb-1 decoration">About Us</Link>
            <Link className="text-white py-2 mb-1 decoration">Faq</Link>
            <Link to="/contact" className="text-white py-2 mb-1 decoration">Contact</Link>
          </div>
        </div>
        <div className="col-2 decoration">
          <h4 className="text-white mb-4">Quick Links</h4>
          <div className="footer-link d-flex flex-column decoration">
            <Link className="text-white py-2 mb-1 decoration">Laptops</Link>
            <Link className="text-white py-2 mb-1 decoration">Headphones</Link>
            <Link className="text-white py-2 mb-1 decoration">Tablets</Link>
            <Link className="text-white py-2 mb-1 decoration">Watch</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer className="py-4 blk3" >
  <div className="container-xxl">
    <div className="row">
      <div className="col-12">
        <p className="text-center mb-0 " style={{color:"black"}}>
          &copy; {new Date().getFullYear()}; Powered by Developer's LaSer
        </p>
      </div>
    </div>
  </div>
</footer>
</div>

  )
}

export default Footer
