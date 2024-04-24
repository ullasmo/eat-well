import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-image">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/vegetable-seller-2656030-2209982.png"
          alt="Contact"
        />
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
