import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [interest, setInterest] = useState('product');
  const [contact, setContact] = useState(null);
  const [newsletter, setNewsletter] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Message: ', message);
    console.log('Interest: ', interest);
    console.log('Contact: ', contact);
    console.log('Newsletter: ', newsletter);
    // TODO: Send these values to the server
  };

  const handleNewsletterChange = (event) => {
    if (event.target.checked) {
      setNewsletter([...newsletter, event.target.value]);
    } else {
      setNewsletter(newsletter.filter(item => item !== event.target.value));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Personal Information</legend>

        <p>
          <label htmlFor="name" className="required">Name</label>
          <input type="text" name="name" id="name" required autoFocus placeholder="Your name" 
                 value={name} onChange={e => setName(e.target.value)} />
        </p>

        <p>
          <label htmlFor="email" className="required">Email</label>
          <input type="email" name="email" id="email" required placeholder="your.email@example.com" 
                 value={email} onChange={e => setEmail(e.target.value)} />
        </p>
      </fieldset>

      <fieldset>
        <legend>Your Message and Preferences</legend>

        <p>
          <label htmlFor="message" className="required">Message</label>
          <textarea name="message" id="message" minLength="2" maxLength="250" required placeholder="Type your message here"
                    value={message} onChange={e => setMessage(e.target.value)}></textarea>
        </p>

        <div className="optional optional-field">
          <p>
            <label htmlFor="interest">Interest</label>
            <select name="interest" id="interest" 
                    value={interest} onChange={e => setInterest(e.target.value)}>
              <option value="product">Product Inquiry</option>
              <option value="support">Customer Support</option>
              <option value="careers">Careers</option>
              <option value="other">Other</option>
            </select>
          </p>

          <p>
            Contact Preference:
            <label htmlFor="phone">
              <input type="radio" name="contact" id="phone" value="Phone"
                     checked={contact === "Phone"} onChange={e => setContact(e.target.value)} /> Phone
            </label>
            <label htmlFor="email_contact">
              <input type="radio" name="contact" id="email_contact" value="Email"
                     checked={contact === "Email"} onChange={e => setContact(e.target.value)} /> Email
            </label>
          </p>

          <p>
            Newsletter Topics:
            <label htmlFor="updates">
              <input type="checkbox" name="newsletter[]" id="updates" value="updates"
                     checked={newsletter.includes("updates")} onChange={handleNewsletterChange} /> Product Updates
            </label>
            <label htmlFor="promotions">
              <input type="checkbox" name="newsletter[]" id="promotions" value="promotions"
                     checked={newsletter.includes("promotions")} onChange={handleNewsletterChange} /> Promotions
            </label>
            <label htmlFor="events">
              <input type="checkbox" name="newsletter[]" id="events" value="events"
                     checked={newsletter.includes("events")} onChange={handleNewsletterChange} /> Events
            </label>
          </p>
        </div>

      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
