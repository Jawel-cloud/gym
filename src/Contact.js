import React, { useState } from 'react';
function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      // add code to send formData to your server or email
    }
  
    return (
      <div className='contact__container'>
          <div>
            <section>
    <h2>Contact</h2>
    <p>Phone: 555-555-5555</p>
    <p>Email: gym@example.com</p>
    <p>Address: 123 Main St, Anytown USA</p>
    </section>
    <section>
    <h2>Hours of Operation:</h2>
    <p>Monday - Friday: 6:00am - 9:00pm</p>
    <p>Saturday: 8:00am - 5:00pm</p>
    <p>Sunday: 10:00am - 3:00pm</p>
    </section>
  </div>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} value={formData.name} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} value={formData.email} />
        </label>
        <label>
          Message:
          <textarea name="message" onChange={handleChange} value={formData.message} />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      </div>
    );
  }
  export default Contact;