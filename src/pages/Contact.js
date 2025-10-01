import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${form.name}`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required/>
        <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required/>
        <textarea placeholder="Message" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} required/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
