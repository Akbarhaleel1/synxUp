

'use client'
import React, { useState } from 'react';
import { Search, Plus, ChevronDown, Menu, X } from 'lucide-react';
import Sidebar from '../../components/Nav';

const ChatInterface = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const messages = [
    { text: 'your project will complete soon......', reply: true },
    { text: 'when i got the project', reply: false },
    { text: 'maybe this week sir', reply: true },
    { text: 'ok cool pal...', reply: false }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex">
        {/* Sidebar - Using the existing component */}
        <div className="hidden lg:block">
          <Sidebar mobile={false} />
        </div>

        {/* Mobile Sidebar */}
        <div className={`
          lg:hidden fixed inset-0 z-40
          ${isSidebarOpen ? 'block' : 'hidden'}
        `}>
          <Sidebar mobile={true} />
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-8 right-8 text-gray-400"
          >
            <X size={24} />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-72">
          {/* Mobile Header */}
          <div className="lg:hidden p-8 flex items-center">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-400"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Header */}
          <div className="p-8 border-b border-white/5">
            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="text-2xl font-bold text-gray-100">Chat</h2>
              <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 w-full lg:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <input
                    type="text"
                    placeholder="Search chat..."
                    className="w-full sm:w-64 px-4 py-2 rounded-xl bg-gray-800/50 backdrop-blur-xl text-gray-100 text-sm border border-white/5 focus:outline-none focus:border-white/10"
                  />
                  <Search className="absolute right-3 top-2.5 text-gray-400" size={16} />
                </div>
                <button className="flex items-center justify-center space-x-2 px-4 py-2 rounded-xl bg-gray-800/50 backdrop-blur-xl text-gray-100 text-sm border border-white/5 hover:bg-gray-700/30 transition-colors duration-300">
                  <Plus size={16} />
                  <span>New Chat</span>
                </button>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-8 overflow-y-auto h-[calc(100vh-13rem)]">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.reply ? 'justify-start' : 'justify-end'} mb-6`}>
                {message.reply && (
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 p-[2px] mr-3 flex-shrink-0">
                    <div className="h-full w-full rounded-full bg-gray-800" />
                  </div>
                )}
                <div className={`rounded-xl p-4 max-w-[75%] break-words ${
                  message.reply 
                    ? 'bg-gray-800/50 backdrop-blur-xl border border-white/5' 
                    : 'bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 border border-white/5'
                }`}>
                  <p className="text-sm text-gray-100">{message.text}</p>
                  <span className="text-xs text-gray-400 mt-1 block text-right">
                    {message.reply ? 'Assistant' : 'You'}
                  </span>
                </div>
                {!message.reply && (
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 p-[2px] ml-3 flex-shrink-0">
                    <div className="h-full w-full rounded-full bg-gray-800" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-8 border-t border-white/5">
            <div className="flex items-center bg-gray-800/50 backdrop-blur-xl rounded-xl p-3 border border-white/5">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-transparent outline-none px-2 text-sm text-gray-100 placeholder-gray-400"
              />
              <button className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                <ChevronDown size={16} className="transform rotate-90" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;