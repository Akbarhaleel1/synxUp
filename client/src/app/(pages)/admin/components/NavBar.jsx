// 'use client'
// import { Search } from 'lucide-react'
// import React, { useState } from 'react'

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false)

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen)
//     }
//     return (
//         <div className="w-64 bg-[#141B2D] p-6">
//             <div className="mb-8">
//                 {/* <h1 className="text-2xl font-medium text-[#FF4C9D]">SynX UP</h1> */}
//                 <img src="https://i.postimg.cc/TYQghNSb/synx-up-01-Yb-N9-XRn8-LOi5-J9-Qb.png" alt="logo" />
//             </div>

//             {/* Search Bar */}
//             <div className="mb-8">
//                 <div className="flex items-center space-x-2 rounded-md bg-[#1A2235] px-3 py-2">
//                     <Search size={18} className="text-gray-400" />
//                     <input
//                         type="text"
//                         placeholder="Search for..."
//                         className="w-full bg-transparent text-sm text-gray-400 focus:outline-none"
//                     />
//                 </div>
//             </div>

//             {/* Navigation */}
//             <div className="space-y-1">
//                 <div className="relative">
//                     {/* Button */}
//                     <div
//                         className="group flex cursor-pointer items-center rounded-md bg-[#252E42] px-3 py-2"
//                         onClick={toggleDropdown}
//                     >
//                         <div className="mr-3 h-1.5 w-1.5 rounded-full bg-[#FF4C9D]"></div>
//                         <span className="text-sm text-white">Dashboard</span>
//                         <svg
//                             className={`ml-2 h-4 w-4 text-white transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                         >
//                             <path
//                                 fillRule="evenodd"
//                                 d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01.02-1.06z"
//                                 clipRule="evenodd"
//                             />
//                         </svg>
//                     </div>

//                     {/* Dropdown */}
//                     {isOpen && (
//                         <div className="absolute mt-2 w-48 rounded-md bg-[#252E42] shadow-lg">
//                             <ul className="py-1">
//                                 <li className="px-4 py-2 hover:bg-[#2F3A56] cursor-pointer text-white">Dashboard</li>
//                                 <li className="px-4 py-2 hover:bg-[#2F3A56] cursor-pointer text-white">User Management</li>
//                             </ul>
//                         </div>
//                     )}
//                 </div>

//                 <div className="mb-2 px-4 pt-4 text-xs font-medium uppercase text-gray-500">
//                     Project Updates
//                 </div>

//                 <div className="group flex cursor-pointer items-center rounded-md px-3 py-2">
//                     <span className="text-sm text-gray-400">Reports</span>
//                 </div>

//                 <div className="mb-2 px-4 pt-4 text-xs font-medium uppercase text-gray-500">
//                     Features
//                 </div>

//                 <div className="group flex cursor-pointer items-center rounded-md px-3 py-2">
//                     <span className="text-sm text-gray-400">Users</span>
//                 </div>

//                 <div className="mb-2 px-4 pt-4 text-xs font-medium uppercase text-gray-500">
//                     Settings
//                 </div>

//                 {/* Admin Section */}
//                 <div className="flex items-center space-x-2 rounded-md px-3 py-2">
//                     <div className="h-8 w-8 rounded-full bg-purple-500"></div>
//                     <div className="flex-1">
//                         <div className="text-sm text-gray-400">Admin</div>
//                         <div className="text-xs text-gray-500">Account settings</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default NavBar


'use client'
import { Search, Menu, X } from 'lucide-react'
import React, { useState } from 'react'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const Sidebar = () => (
        <div className="h-screen bg-[#141B2D] p-6">
            <div className="mb-8">
                <img src="https://i.postimg.cc/TYQghNSb/synx-up-01-Yb-N9-XRn8-LOi5-J9-Qb.png" alt="logo" />
            </div>

            {/* Search Bar */}
            <div className="mb-8">
                <div className="flex items-center space-x-2 rounded-md bg-[#1A2235] px-3 py-2">
                    <Search size={18} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search for..."
                        className="w-full bg-transparent text-sm text-gray-400 focus:outline-none"
                    />
                </div>
            </div>

            {/* Navigation */}
            <div className="space-y-1">
                <div className="relative">
                    {/* Button */}
                    <div
                        className="group flex cursor-pointer items-center rounded-md bg-[#252E42] px-3 py-2"
                        onClick={toggleDropdown}
                    >
                        <div className="mr-3 h-1.5 w-1.5 rounded-full bg-[#FF4C9D]"></div>
                        <span className="text-sm text-white">Dashboard</span>
                        <svg
                            className={`ml-2 h-4 w-4 text-white transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>

                    {/* Dropdown */}
                    {isOpen && (
                        <div className="absolute mt-2 w-48 rounded-md bg-[#252E42] shadow-lg">
                            <ul className="py-1">
                                <li className="px-4 py-2 hover:bg-[#2F3A56] cursor-pointer text-white">Dashboard</li>
                                <li className="px-4 py-2 hover:bg-[#2F3A56] cursor-pointer text-white">User Management</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="mb-2 px-4 pt-4 text-xs font-medium uppercase text-gray-500">
                    Project Updates
                </div>

                <div className="group flex cursor-pointer items-center rounded-md px-3 py-2">
                    <span className="text-sm text-gray-400">Reports</span>
                </div>

                <div className="mb-2 px-4 pt-4 text-xs font-medium uppercase text-gray-500">
                    Features
                </div>

                <div className="group flex cursor-pointer items-center rounded-md px-3 py-2">
                    <span className="text-sm text-gray-400">Users</span>
                </div>

                <div className="mb-2 px-4 pt-4 text-xs font-medium uppercase text-gray-500">
                    Settings
                </div>

                {/* Admin Section */}
                <div className="flex items-center space-x-2 rounded-md px-3 py-2">
                    <div className="h-8 w-8 rounded-full bg-purple-500"></div>
                    <div className="flex-1">
                        <div className="text-sm text-gray-400">Admin</div>
                        <div className="text-xs text-gray-500">Account settings</div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            {/* Mobile Menu Button */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-md bg-[#141B2D] text-white hover:bg-[#252E42]"
                >
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Sidebar for desktop */}
            <div className="hidden lg:block w-64">
                <Sidebar />
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out`}
            >
                <div className="relative w-64 h-full">
                    <Sidebar />
                </div>
                {/* Overlay */}
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 ${
                        isSidebarOpen ? 'block' : 'hidden'
                    } lg:hidden`}
                    onClick={toggleSidebar}
                />
            </div>
        </>
    )
}

export default NavBar