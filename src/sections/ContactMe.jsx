import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_user_id"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong!");
        }
      );
  };

  return (
    <section
      id="contact"
      className="pt-0 pb-24 px-6 md:px-24 bg-gray-100 dark:bg-[#0f172a] text-gray-900 dark:text-white transition-all duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 inline-block border-b-4 border-blue-500 pb-1">
          Contact Me
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white dark:bg-[#1e293b] shadow-md rounded-xl p-8 space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-gray-900 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
