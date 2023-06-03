import React from 'react'
import fc from '../../images/facebook-logo.png'
import tw from '../../images/twitter.png'
import it from '../../images/instagram.png'

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
    <footer>
      <div className="social-media">
        <h1>Tripoli craft</h1>
        
        <a href="https://www.facebook.com"><img src={fc}/></a>
        <a href="https://www.twitter.com"><img src={tw}/></a>
        <a href="https://www.instagram.com"><img src={it}/></a>
      </div>
      <div className="contact">
        <h3>Contact Us</h3>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
          <button type="submit" className='login-button-hero'>Send</button>
        </form>
      </div>
    </footer>


  )
}

export default Footer
