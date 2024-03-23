import "./contact-us.css";
import React, { useRef } from 'react';
import emailjs from "@emailjs/browser"


const ContactUs = () =>{
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return(
    <div className="container">
      <div className="contact-container text">
          <div className="text-wrapper">
            <h1 className="page-heading">Connect With Us</h1>
            <p className="sub-heading">Craving to chat about your dining desires or have a special event in mind? Drop us a line using the form below and we'll be delighted to serve you!"</p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label>Full Name<span className="required">*</span></label>
            <input type="text" id="fullname" name="fullname"placeholder="John Doe" required/>
          </div>
          <div className="form-group">
            <label >Email<span className="required">*</span></label>
            <input type="text" id="email" name="email" placeholder="John@example.com" 
            pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" required/>
          </div>
          <div className="form-group">
            <label >Phone Number<span className="required">*</span></label>
            <input type="tel" id="phoneNumber" placeholder="6471234567" name="phoneNumber" pattern="[0-9]{10}" required />
          </div>
          <div className="form-group">
            <label>Message<span className="required">*</span></label>
            <textarea id="message" name="message" rows="5" placeholder="How can we help you?" cols="50" required></textarea>
          </div>
          <div className="form-group">
          <button className="btn-send" type="=submit">Send Message</button>
          </div>
          </form>
          
      </div>
    </div>
  )
}

export default ContactUs