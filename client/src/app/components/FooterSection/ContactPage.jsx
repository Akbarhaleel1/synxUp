// components/FooterSection/ContactPage.jsx
'use client';

import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="py-16 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#260AFC]">
          Start Your Project Today!
        </h2>

        <div className="grid md:grid-cols-2 gap-8 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all mt-8">
          {/* Form Section */}
          <div className="p-8">
            <div className="mb-6">
              <h3 className="text-xl text-white font-semibold mb-2">
                Let's connect constellations
              </h3>
              <p className="text-gray-400 text-sm">
                Fill out our contact form, and we'll be in touch to schedule a quick call or answer any questions. Let's bring your vision to life with development solutions built for your success.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="bg-white/10 text-white rounded-lg p-3 w-full outline-none border border-white/10 focus:border-purple-500/50 transition-colors placeholder-gray-400"
                />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="bg-white/10 text-white rounded-lg p-3 w-full outline-none border border-white/10 focus:border-purple-500/50 transition-colors placeholder-gray-400"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-white/10 text-white rounded-lg p-3 w-full outline-none border border-white/10 focus:border-purple-500/50 transition-colors placeholder-gray-400"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-white/10 text-white rounded-lg p-3 w-full outline-none border border-white/10 focus:border-purple-500/50 transition-colors placeholder-gray-400"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className="bg-white/10 text-white rounded-lg p-3 w-full outline-none border border-white/10 focus:border-purple-500/50 transition-colors resize-none placeholder-gray-400"
              />

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center group"
              >
                Request 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/50 to-black z-10" />
            <img
              src="https://i.postimg.cc/dtsKKxDD/pexels-olia-danilevich-4974920.jpg"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 text-white z-20">
              <p className="text-lg">
                Where innovation meets integrity – let's bring your vision to life with a commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;