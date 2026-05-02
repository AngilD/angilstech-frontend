import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

      {/* Form */}
      <div className="bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full">
            Send Message
          </button>

        </form>
      </div>

      {/* Company Details */}
      <div className="bg-gray-50 shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Company Details</h2>

        <p className="mb-4"><strong>Phone:</strong> +254 726 302 779</p>
        <p className="mb-4"><strong>Email:</strong> info@angilstech.com</p>
        <p className="mb-4"><strong>Location:</strong> Nairobi, Kenya</p>
        <p className="mb-6"><strong>Hours:</strong> Mon - Fri, 8AM - 5PM</p>

        <a
          href="https://wa.me/2547XXXXXXXX?text=Hello%20AngilsTech"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Chat on WhatsApp
        </a>
      </div>

    </div>
  );
}
