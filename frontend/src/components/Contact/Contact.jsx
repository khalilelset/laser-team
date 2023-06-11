import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitContactForm } from "../../redux/actions/ContactActions";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const loading = useSelector((state) => state.loading);
  const success = useSelector((state) => state.success);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      fullName,
      email,
      subject,
      message,
    };
    dispatch(submitContactForm(formData));
  };
  return (
    <div>
      <section id="contact">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-8 mx-auto text-center">
              <h3 class="text-primary">CONTACT</h3>
              <h1>Get In Touch</h1>
              <p>
                The contact section on a craft website is where customers can
                find information on how to get in touch with the brand. you can
                also help to establish trustby a clear way for customers to
                communicate.
              </p>
            </div>
          </div>
          {success && (
            <div className="alert alert-success" role="alert">
              Form submitted successfully
            </div>
          )}
          {error && (
            <div className="alert alert-danger" role="alert">
              {error._message}
            </div>
          )}
          <form onSubmit={handleSubmit} class="row g-3 justify-content-center">
            <div class="col-md-5">
              <input
                type="text"
                class="form-control"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div class="col-md-5">
              <input
                type="text"
                class="form-control"
                placeholder="Enter E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div class="col-md-10 d-grid">
              <button className="btn btn-primary" disabled={loading}>
                {loading ? "Submitting..." : "Contact"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
