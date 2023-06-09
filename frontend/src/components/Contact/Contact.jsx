import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-8 mx-auto text-center">
              <h6 class="text-primary">CONTACT</h6>
              <h1>Get In Touch</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur nisi necessitatibus
                repellat distinctio eveniet eaque fuga in cumque optio
                consectetur harum vitae debitis sapiente praesentium aperiam aut
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
