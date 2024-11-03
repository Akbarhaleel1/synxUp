'use client';

import React from 'react';
import { Search } from 'lucide-react';
import NavBar from '../../components/NavBar';

const UserForm = () => {
  return (
    <div className="flex min-h-screen bg-[#040B1A]">
      {/* Sidebar */}
      <NavBar/>


      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Top search bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <span className="text-white text-lg">Add User</span>
            <div className="w-64">
              <div className="flex items-center space-x-2 rounded bg-[#0A1528] px-3 py-2">
                <Search size={16} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search for..."
                  className="w-full bg-transparent text-sm text-gray-400 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="space-y-6">
          {/* Credentials Section */}
          <div className="mb-8">
            <h2 className="text-white text-sm mb-4">Credentials</h2>
            <div className="space-y-2">
              <div className="text-gray-400 text-sm flex items-center space-x-2">
                <span className="w-4 h-4 flex items-center justify-center text-purple-500">✓</span>
                <span>Personal Information</span>
              </div>
              <div className="text-gray-400 text-sm flex items-center space-x-2">
                <span className="w-4 h-4 flex items-center justify-center">✓</span>
                <span>Team</span>
              </div>
              <div className="text-gray-400 text-sm flex items-center space-x-2">
                <span className="w-4 h-4 flex items-center justify-center">✓</span>
                <span>Billing</span>
              </div>
              <div className="text-gray-400 text-sm flex items-center space-x-2">
                <span className="w-4 h-4 flex items-center justify-center">✓</span>
                <span>Notifications</span>
              </div>
            </div>
          </div>

          {/* Personal Information Form */}
          <div className="bg-[#0A1528] rounded-lg p-6">
            <h2 className="text-white text-sm mb-4">Personal Information</h2>
            <p className="text-gray-500 text-xs mb-6">Lorem ipsum dolor sit amet consectetur adipisicing</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm mb-2">Full Name</label>
                <input 
                  type="text"
                  placeholder="John Carter"
                  className="w-full bg-[#061126] border border-[#162036] rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Email address</label>
                <input 
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-[#061126] border border-[#162036] rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Password</label>
                <input 
                  type="password"
                  placeholder="*********"
                  className="w-full bg-[#061126] border border-[#162036] rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Photo</label>
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-purple-500 flex items-center justify-center">
                    <img src="/api/placeholder/64/64" alt="Profile" className="h-16 w-16 rounded-full" />
                  </div>
                  <div className="h-16 w-16 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Click the purple dot to set your photo</p>
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Short description</label>
                <textarea 
                  placeholder="Write a short bio about you..."
                  rows="4"
                  className="w-full bg-[#061126] border border-[#162036] rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Basic Information Form */}
          <div className="bg-[#0A1528] rounded-lg p-6">
            <h2 className="text-white text-sm mb-4">Basic Information</h2>
            <p className="text-gray-500 text-xs mb-6">Lorem ipsum dolor sit amet consectetur adipisicing</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm mb-2">Phone</label>
                <input 
                  type="tel"
                  placeholder="(555) 000 - 0000"
                  className="w-full bg-[#061126] border border-[#162036] rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Position</label>
                <input 
                  type="text"
                  placeholder="CEO & Founder"
                  className="w-full bg-[#061126] border border-[#162036] rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Location</label>
                <input 
                  type="text"
                  placeholder="New York, NY"
                  className="w-full bg-[#061126] border border-[#162036] rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Website</label>
                <input 
                  type="url"
                  placeholder="example.com"
                  className="w-full bg-[#061126] border border-[#162036] rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>
          {/* Team information Form */}
          <div className="bg-[#0A1528] rounded-lg p-6">
            <h2 className="text-white text-sm mb-4">Team information</h2>
            <p className="text-gray-500 text-xs mb-6">Lorem ipsum dolor sit amet consectetur adipisicing</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm mb-2">Team Name</label>
                <input 
                  type="tel"
                  placeholder="(555) 000 - 0000"
                  className="w-full bg-[#061126] border border-[#162036] rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Rank</label>
                <input 
                  type="text"
                  placeholder="CEO & Founder"
                  className="w-full bg-[#061126] border border-[#162036] rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Office</label>
                <input 
                  type="text"
                  placeholder="New York, NY"
                  className="w-full bg-[#061126] border border-[#162036] rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">mail</label>
                <input 
                  type="url"
                  placeholder="example.com"
                  className="w-full bg-[#061126] border border-[#162036] rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;