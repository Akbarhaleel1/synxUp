
'use client'
import React, { useState } from 'react';
import { Search, Plus, Smile, Paperclip, Send, Menu, ArrowLeft } from 'lucide-react';
import NavBar from '../../components/NavBar';

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMessages, setShowMessages] = useState(true);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const toggleMessages = () => setShowMessages(!showMessages);

  return (
    <div className="flex h-screen bg-[#0f1117]">
      {/* Sidebar - Hidden on mobile unless toggled */}
      <div className={`${showSidebar ? 'block' : 'hidden'} md:block`}>
        <NavBar />
      </div>

      {/* Messages Section */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="h-16 border-b border-gray-800 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-4">
            <button onClick={toggleSidebar} className="md:hidden text-gray-400">
              <Menu className="h-6 w-6" />
            </button>
            <h2 className="text-white">Messages</h2>
            <div className="hidden md:flex -space-x-2">
              {/* Active Users Avatars */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-purple-500 border-2 border-[#0f1117]" />
              ))}
            </div>
          </div>
          {/* Search Bar */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for..."
                className="w-48 md:w-64 bg-[#1a1b23] rounded-md py-2 px-4 pl-10 text-sm text-gray-300 focus:outline-none"
              />
            </div>
            <button className="bg-purple-500 text-white px-3 py-2 md:px-4 rounded-md text-sm whitespace-nowrap">
              Write message
            </button>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex flex-1 overflow-hidden">
          {/* Messages List - Full screen on mobile when shown */}
          <div className={`${showMessages ? 'block' : 'hidden'} md:block w-full md:w-80 border-r border-gray-800 ${showMessages ? 'md:block' : 'hidden'}`}>
            <div className="p-4 border-b border-gray-800 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <button onClick={toggleMessages} className="md:hidden text-gray-400">
                  <ArrowLeft className="h-6 w-6" />
                </button>
                <span className="text-white">Messages</span>
                <span className="bg-gray-700 text-xs text-white px-2 py-0.5 rounded-full">40</span>
              </div>
            </div>
            {/* Mobile Search */}
            <div className="p-4 md:hidden">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for..."
                  className="w-full bg-[#1a1b23] rounded-md py-2 px-4 pl-10 text-sm text-gray-300 focus:outline-none"
                />
              </div>
            </div>
            {/* Message Items */}
            <div className="space-y-2 p-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex space-x-3 p-3 hover:bg-[#262731] rounded-md cursor-pointer"
                  onClick={() => setShowMessages(false)}
                >
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <h3 className="text-white text-sm font-medium">Sophie Moore</h3>
                      <span className="text-gray-400 text-xs">5 min ago</span>
                    </div>
                    <p className="text-gray-400 text-sm truncate">Lorem ipsum dolor sit amet...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area - Hidden on mobile when messages list is shown */}
          <div className={`${!showMessages ? 'block' : 'hidden'} md:block flex-1 flex flex-col`}>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-800 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <button onClick={() => setShowMessages(true)} className="md:hidden text-gray-400">
                  <ArrowLeft className="h-6 w-6" />
                </button>
                <div className="w-10 h-10 rounded-full bg-purple-500" />
                <div>
                  <h3 className="text-white font-medium">Sophie Moore</h3>
                  <p className="text-gray-400 text-sm">@sophiemoore</p>
                </div>
              </div>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-md text-sm">
                Call Sophie
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
              {/* Message bubbles */}
              <div className="flex space-x-3">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex-shrink-0" />
                <div className="bg-[#1a1b23] rounded-lg p-4 max-w-[75%] md:max-w-md">
                  <p className="text-gray-300">Hello John! Hope you are doing well. I need your help with some reports, are you available for a call later today?</p>
                  <span className="text-gray-400 text-xs mt-2 block">10:40 AM</span>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <div className="bg-purple-500 rounded-lg p-4 max-w-[75%] md:max-w-md">
                  <p className="text-white">Hey Sophie! How are you?</p>
                  <span className="text-purple-200 text-xs mt-2 block">11:41 AM</span>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex items-center space-x-2 md:space-x-4">
                <div className="flex-1 bg-[#1a1b23] rounded-lg p-2 flex items-center">
                  <input
                    type="text"
                    placeholder="Type a message"
                    className="flex-1 bg-transparent text-gray-300 px-2 focus:outline-none"
                  />
                  <div className="flex items-center space-x-2 px-2">
                    <Smile className="h-5 w-5 text-gray-400 cursor-pointer" />
                    <Paperclip className="h-5 w-5 text-gray-400 cursor-pointer hidden md:block" />
                  </div>
                </div>
                <button className="bg-purple-500 p-2 rounded-lg">
                  <Send className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;