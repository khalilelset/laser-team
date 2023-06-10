import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-8 mx-auto text-center">
              <h3 class="text-primary">CONTACT</h3>
              <h1>Get In Touch</h1>
              <p>
              The contact section on a craft website is where customers can find information on how to get in touch with the brand.
              you can also help to establish trustby a clear way for customers to communicate.
              </p>
            </div>
          </div>

          <form action="" class="row g-3 justify-content-center">
            <div class="col-md-5">
              <input type="text" class="form-control" placeholder="Full Name" />
            </div>
            <div class="col-md-5">
              <input
                type="text"
                class="form-control"
                placeholder="Enter E-mail"
              />
            </div>
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Subject"
              />
            </div>
            <div class="col-md-10">
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                class="form-control"
                placeholder="Enter Message"
              ></textarea>
            </div>
            <div class="col-md-10 d-grid">
              <button class="btn btn-primary">Contact</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
