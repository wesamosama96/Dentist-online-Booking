import styles from "./Contact.module.css";
import { useState } from "react";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch("http://localhost:8000/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log(data);

      alert("Message Sent Successfully");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <div className={styles.formWrapper}>

      <h2 className={styles.formTitle}>Send us a message</h2>

      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">

        {/* Name */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className={`form-control ${styles.contactInput}`}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={`form-control ${styles.contactInput}`}
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className={`form-control ${styles.contactInput}`}
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className={`form-control ${styles.contactTextarea}`}
        />

        {/* Button */}
        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>

      </form>

    </div>
  );
}