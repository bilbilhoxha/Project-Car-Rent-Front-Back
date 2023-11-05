import React, { useRef } from 'react';
import './contact.css';

export const Contact = () => {
  const form = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('http://localhost:8080/send-email', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle success, show confirmation to the user
        event.target.reset();
      } else {
        // Handle error
        console.error('Error sending email');
      }
    } catch (error) {
      // Handle network error
      console.error('Network error:', error);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} ref={form}>
          <div className="form-group">
            <label htmlFor="name">First Name</label>
            <input type="text" id="name" name="firstname" placeholder="Your First Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" placeholder="Your Last Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="Your Phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Your Message" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="map">
        <iframe
          title="Map Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11983.87328724194!2d19.8200087!3d41.3313022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa049d820de5de59c!2selectronic%20service%20albania!5e0!3m2!1sen!2s!4v1630866917496!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
        ></iframe>
        {/* ... (Google Maps or other map integration) ... */}
      </div>
    </div>
  );
};

export default Contact;
