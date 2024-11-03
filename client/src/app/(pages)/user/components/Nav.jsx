'use client'
import React from 'react';
import { useRouter, usePathname } from 'next/navigation'; // Import the path hook
import { Settings, Bell, ChevronDown } from 'lucide-react';

const Sidebar = ({ mobile = false }) => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  const sidebarItems = [
    { 
      icon: () => <div className="w-5 h-5 grid place-items-center">
        <div className="w-4 h-4 border-2 border-[#6C7275] flex-shrink-0" />
      </div>, 
      label: 'Dashboard', 
      route: '/user/dashboard', 
    },
    { icon: Settings, label: 'Project Status', route: '/user/projectStatus' },
    { icon: Bell, label: 'Notifications', route: '/notifications' },
    { 
      icon: () => <div className="w-5 h-5 grid place-items-center">
        <div className="w-3 h-3 border-2 rounded-full border-[#6C7275]" />
      </div>, 
      label: 'Analytics', 
      route: '/analytics'
    },
    { 
      icon: () => <div className="w-5 h-5 grid place-items-center">
        <div className="w-4 h-3 border-l-2 border-b-2 border-[#6C7275]" />
      </div>, 
      label: 'Docs', 
      route: '/user/projectDocs'
    },
    { 
      icon: () => <div className="w-5 h-5 grid place-items-center">
        <div className="w-4 h-3 border-l-2 border-b-2 border-[#6C7275]" />
      </div>, 
      label: 'Chat', 
      route: '/user/chat'
    },  
  ];

  const UserProfile = () => (
    <div className="absolute bottom-8 left-8 right-8">
      <div className="p-4 rounded-xl bg-gray-700/30 backdrop-blur-sm flex items-center space-x-3 cursor-pointer hover:bg-gray-700/50 transition-colors duration-300">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 p-[2px]">
          <div className="h-full w-full rounded-full bg-gray-800" />
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-gray-200">John Doe</div>
          <div className="text-xs text-gray-400">Premium User</div>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );

  return (
    <div className={`${mobile ? 'w-full' : 'fixed left-0 top-0 h-full w-72'} bg-gray-800/50 backdrop-blur-xl p-8 border-r border-white/5`}>
      <div className="mb-12">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
          SynX UP
        </h1>
      </div>

      <nav className="space-y-2">
        {sidebarItems.map((item, index) => {
          const isActive = pathname === item.route; // Determine if the route is active
          return (
            <div
              key={index}
              onClick={() => item.route && router.push(item.route)} // Navigate to the route if it exists
              className={`flex items-center space-x-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-gray-700/80 to-gray-700/40 shadow-lg' 
                  : 'hover:bg-gray-700/30'
              }`}
            >
              {typeof item.icon === 'function' ? <item.icon /> : <item.icon className="w-5 h-5 text-gray-400" />}
              <span className="text-sm text-gray-300">{item.label}</span>
            </div>
          );
        })}
      </nav>

      {!mobile && <UserProfile />}
    </div>
  );
};

export default Sidebar;
