"use client"
import React, { useState } from "react";

const ContactFormSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if all fields are filled
    if (form.name && form.email && form.message) {
      // Set loading state
      setIsLoading(true);
      
      // Simulate API call (replace with actual API call)
      setTimeout(() => {
        // handle form submission (e.g., send to API)
        console.log("Form submitted:", form);
        setIsSubmitted(true);
        setIsLoading(false);
        
        // Reset form
        setForm({ name: "", email: "", message: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="bg-[#222] text-white p-8 rounded shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-medium mb-2">LET&rsquo;S TALK HERE</h2>
      <p className="mb-6 text-gray-200 text-sm">Feel free to send us a message</p>
      
      {isSubmitted ? (
        <div className="mb-4 p-4 bg-green-600 text-white rounded text-center">
          <p className="font-medium">Thank you for your message!</p>
          <p className="text-sm">We&rsquo;ll get back to you soon.</p>
        </div>
      ) : null}
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 text-black bg-white focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 text-black bg-white focus:outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 text-black bg-white focus:outline-none min-h-[100px]"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 rounded font-medium mt-2 cursor-pointer ${isLoading ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'} text-white`}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactFormSection;