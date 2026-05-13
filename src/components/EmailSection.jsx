import React from "react";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaCode
} from "react-icons/fa";

const EmailSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate email sending API like EmailJS or Resend
    console.log(formData);
    alert("Form submitted! (Add your email API integration)");
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
      {/* Background gradient circle */}
      <div className="absolute top-3/4 -left-4 h-80 w-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.6),transparent_70%)] blur-2xl -translate-x-2 -translate-y-1/2 z-0"></div>

      {/* Text content */}
      <div className="z-10 gap-y-2 flex flex-col items-center justify-center">
        <h5 className="text-4xl font-bold mt-4 mb-2 bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Let's Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities. My inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row justify-center gap-9 text-2xl">
          <a href="https://github.com/Neeraj-eng" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/neeraj-nagar-a83ab02a4" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://codolio.com/profile/neeraj_nagar" target="_blank" rel="noopener noreferrer">
            <FaCode />
          </a>
          <a
            href="tel:7440369385"
            className="hover:text-white transition-colors"
          >
            <FaPhone />
          </a>
        </div>
      </div>

      {/* Form */}
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-md font-medium">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@gmail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="text-white block mb-2 text-md font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Just saying hi"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="text-white block mb-2 text-md font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Let's talk about..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-4 w-full rounded-full text-white bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
