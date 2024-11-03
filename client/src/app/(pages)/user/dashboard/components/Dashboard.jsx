//     'use client'
//     import React, { useState } from 'react';
// import { Search, Plus, ShoppingCart, Zap, Bell, Settings, ChevronDown } from 'lucide-react';

// const DashboardPage = () => {
//   const [hoveredStat, setHoveredStat] = useState(null);

//   const sidebarItems = [
//     { icon: () => <div className="w-5 h-5 grid place-items-center"><div className="w-4 h-4 border-2 border-[#6C7275] flex-shrink-0" /></div>, label: 'Dashboard', active: true },
//     { icon: Settings, label: 'Project Status' },
//     { icon: Bell, label: 'Notifications' },
//     { icon: () => <div className="w-5 h-5 grid place-items-center"><div className="w-3 h-3 border-2 rounded-full border-[#6C7275]" /></div>, label: 'Analytics' },
//     { icon: () => <div className="w-5 h-5 grid place-items-center"><div className="w-4 h-3 border-l-2 border-b-2 border-[#6C7275]" /></div>, label: 'Chat' }
//   ];

//   const stats = [
//     { 
//       icon: () => <div className="text-2xl font-bold text-emerald-400">$</div>,
//       value: '1,000', 
//       trend: '+1.2%', 
//       label: 'This Month',
//       color: 'from-emerald-500/20 to-emerald-500/5'
//     },
//     { 
//       icon: () => <div className="text-2xl font-bold text-purple-400">○</div>,
//       value: '125K', 
//       trend: '+2.12%', 
//       label: 'Total Earning',
//       color: 'from-purple-500/20 to-purple-500/5'
//     },
//     { 
//       icon: () => <div className="text-2xl font-bold text-blue-400">○</div>,
//       value: '64K', 
//       trend: '+12.5%', 
//       label: 'All Users',
//       color: 'from-blue-500/20 to-blue-500/5'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
//       {/* Sidebar */}
//       <div className="fixed left-0 top-0 h-full w-72 bg-gray-800/50 backdrop-blur-xl p-8 border-r border-white/5">
//         <div className="mb-12">
//           <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
//             SynX UP
//           </h1>
//         </div>

//         <nav className="space-y-2">
//           {sidebarItems.map((item, index) => (
//             <div
//               key={index}
//               className={`flex items-center space-x-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
//                 item.active 
//                   ? 'bg-gradient-to-r from-gray-700/80 to-gray-700/40 shadow-lg' 
//                   : 'hover:bg-gray-700/30'
//               }`}
//             >
//               {typeof item.icon === 'function' ? <item.icon /> : <item.icon className="w-5 h-5 text-gray-400" />}
//               <span className="text-sm text-gray-300">{item.label}</span>
//             </div>
//           ))}
//         </nav>

//         {/* User Profile */}
//         <div className="absolute bottom-8 left-8 right-8">
//           <div className="p-4 rounded-xl bg-gray-700/30 backdrop-blur-sm flex items-center space-x-3 cursor-pointer hover:bg-gray-700/50 transition-colors duration-300">
//             <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 p-[2px]">
//               <div className="h-full w-full rounded-full bg-gray-800" />
//             </div>
//             <div className="flex-1">
//               <div className="text-sm font-medium text-gray-200">John Doe</div>
//               <div className="text-xs text-gray-400">Premium User</div>
//             </div>
//             <ChevronDown className="w-4 h-4 text-gray-400" />
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="ml-72 p-8">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <div className="space-y-1">
//             <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
//               Dashboard
//             </h2>
//             <p className="text-sm text-gray-400">Welcome back! Here's your account overview</p>
//           </div>

//           <div className="flex space-x-4">
//             <div className="relative group">
//               <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-xl blur group-hover:opacity-75 transition-opacity duration-300" />
//               <div className="relative flex items-center bg-gray-800/80 rounded-xl px-4 py-2 backdrop-blur-sm border border-white/5">
//                 <Search className="h-4 w-4 text-gray-400 mr-2" />
//                 <input
//                   type="text"
//                   placeholder="Search anything..."
//                   className="bg-transparent border-none focus:outline-none text-sm w-64 text-gray-300 placeholder-gray-500"
//                 />
//               </div>
//             </div>

//             <button className="relative group overflow-hidden rounded-xl">
//               <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 blur group-hover:opacity-75 transition-opacity duration-300" />
//               <div className="relative flex items-center space-x-2 bg-gray-800/80 px-4 py-2 backdrop-blur-sm border border-white/5 rounded-xl group-hover:border-white/10 transition-colors duration-300">
//                 <Plus className="h-4 w-4" />
//                 <span className="text-sm">New Product</span>
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* Project Card */}
//         <div className="relative group mb-8">
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl transition-all duration-300 group-hover:opacity-75" />
//           <div className="relative bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-white/5 group-hover:border-white/10 transition-all duration-300">
//             <div className="flex justify-between items-center">
//               <div className="max-w-lg">
//                 <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                   Premium Features
//                 </h3>
//                 <p className="text-sm text-gray-400 mb-6 leading-relaxed">
//                   Unlock the full potential with our premium account! Get access to exclusive features,
//                   advanced analytics, and priority support. Upgrade now and experience the difference!
//                 </p>
//                 <div className="flex space-x-4">
//                   <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity duration-300">
//                     <ShoppingCart className="h-4 w-4" />
//                     <span>Upgrade Now</span>
//                   </button>
//                   <button className="flex items-center space-x-2 bg-gray-700/50 rounded-xl px-6 py-3 text-sm font-medium hover:bg-gray-700/70 transition-colors duration-300">
//                     <Zap className="h-4 w-4" />
//                     <span>View Features</span>
//                   </button>
//                 </div>
//               </div>
//               <div className="relative w-80 h-80">
//                 <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-pulse">
//                   <div className="absolute inset-8 bg-gray-800 rounded-full flex items-center justify-center">
//                     <div className="w-40 h-40 relative animate-float">
//                       <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-sm" />
//                       <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full blur-sm" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-3 gap-6">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="relative group"
//               onMouseEnter={() => setHoveredStat(index)}
//               onMouseLeave={() => setHoveredStat(null)}
//             >
//               <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl transition-opacity duration-300 ${hoveredStat === index ? 'opacity-100' : 'opacity-50'}`} />
//               <div className="relative bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300">
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="h-12 w-12 rounded-xl bg-gray-700/50 flex items-center justify-center">
//                     <stat.icon />
//                   </div>
//                   <div className="flex items-center space-x-2 text-sm">
//                     <span className="text-emerald-400">{stat.trend}</span>
//                     <span className="text-gray-400">{stat.label}</span>
//                   </div>
//                 </div>
//                 <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                   {stat.value}
//                 </div>
//                 <button className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-300">
//                   View Details →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;


'use client'
import React, { useState } from 'react';
import { Search, Plus, ShoppingCart, Zap, Bell, Settings, ChevronDown, Menu, X } from 'lucide-react';
import Sidebar from '../../components/Nav';
const DashboardPage = () => {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const stats = [
    { 
      icon: () => <div className="text-2xl font-bold text-emerald-400">$</div>,
      value: '1,000', 
      trend: '+1.2%', 
      label: 'This Month',
      color: 'from-emerald-500/20 to-emerald-500/5'
    },
    { 
      icon: () => <div className="text-2xl font-bold text-purple-400">○</div>,
      value: '125K', 
      trend: '+2.12%', 
      label: 'Total Earning',
      color: 'from-purple-500/20 to-purple-500/5'
    },
    { 
      icon: () => <div className="text-2xl font-bold text-blue-400">○</div>,
      value: '64K', 
      trend: '+12.5%', 
      label: 'All Users',
      color: 'from-blue-500/20 to-blue-500/5'
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-white/5"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar - Desktop */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-72 bg-gray-800/50 backdrop-blur-xl p-8 border-r border-white/5">
        <div className="mb-12">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
            SynX UP
          </h1>
        </div>

        <Sidebar/>

        {/* User Profile */}
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
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-xl z-40 transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-8">
          <div className="mb-12">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              SynX UP
            </h1>
          </div>
          <Sidebar mobile />
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-72 p-4 sm:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Dashboard
            </h2>
            <p className="text-sm text-gray-400">Welcome back! Here's your account overview</p>
          </div>

          <div className="flex flex-col sm:flex-row w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative group w-full sm:w-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-xl blur group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative flex items-center bg-gray-800/80 rounded-xl px-4 py-2 backdrop-blur-sm border border-white/5 w-full">
                <Search className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="bg-transparent border-none focus:outline-none text-sm w-full text-gray-300 placeholder-gray-500"
                />
              </div>
            </div>

            <button className="relative group overflow-hidden rounded-xl w-full sm:w-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 blur group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center space-x-2 bg-gray-800/80 px-4 py-2 backdrop-blur-sm border border-white/5 rounded-xl group-hover:border-white/10 transition-colors duration-300 w-full">
                <Plus className="h-4 w-4" />
                <span className="text-sm">New Product</span>
              </div>
            </button>
          </div>
        </div>

        {/* Project Card */}
        <div className="relative group mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl transition-all duration-300 group-hover:opacity-75" />
          <div className="relative bg-gray-800/50 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/5 group-hover:border-white/10 transition-all duration-300">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="max-w-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Premium Features
                </h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  Unlock the full potential with our premium account! Get access to exclusive features,
                  advanced analytics, and priority support. Upgrade now and experience the difference!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity duration-300 w-full sm:w-auto">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Upgrade Now</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-gray-700/50 rounded-xl px-6 py-3 text-sm font-medium hover:bg-gray-700/70 transition-colors duration-300 w-full sm:w-auto">
                    <Zap className="h-4 w-4" />
                    <span>View Features</span>
                  </button>
                </div>
              </div>
              <div className="relative w-60 h-60 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-pulse">
                  <div className="absolute inset-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-32 lg:w-40 h-32 lg:h-40 relative animate-float">
                      <div className="absolute top-0 right-0 w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-sm" />
                      <div className="absolute bottom-0 left-0 w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full blur-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl transition-opacity duration-300 ${hoveredStat === index ? 'opacity-100' : 'opacity-50'}`} />
              <div className="relative bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gray-700/50 flex items-center justify-center">
                    <stat.icon />
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-emerald-400">{stat.trend}</span>
                    <span className="text-gray-400">{stat.label}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <button className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-300">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;