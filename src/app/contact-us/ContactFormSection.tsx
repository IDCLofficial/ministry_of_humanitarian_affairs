"use client"
import React, { useState } from "react";

const ContactFormSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#222] text-white p-8 rounded shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-medium mb-2">LET&rsquo;S TALK HERE</h2>
      <p className="mb-6 text-gray-200 text-sm">We value your thoughts. If you have an idea, concern, or recommendation</p>
      {success && (
        <div className="text-green-600 text-sm mb-2">Thank you for contacting us! We will get back to you soon.</div>
      )}
      {error && (
        <div className="text-red-600 text-sm mb-2">{error}</div>
      )}
      <form className="space-y-4" onSubmit={async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        setLoading(true);
        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1500));
          setSuccess(true);
          setForm({ name: "", email: "", message: "" });
        } catch (err) {
          setError("Submission failed. Please try again.");
        } finally {
          setLoading(false);
        }
      }}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 text-black bg-white focus:outline-none"
          required
          disabled={loading}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 text-black bg-white focus:outline-none"
          required
          disabled={loading}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 text-black bg-white focus:outline-none min-h-[100px]"
          required
          disabled={loading}
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-medium mt-2 cursor-pointer flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <svg className="animate-spin h-4 w-4 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
          ) : null}
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactFormSection;