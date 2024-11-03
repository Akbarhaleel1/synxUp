'use client';

import React, { useState } from 'react';
import { Search, MoreHorizontal, Edit, Trash2, UserPlus } from 'lucide-react';
import NavBar from '../../components/NavBar';

const UserManagement = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const users = [
        {
            name: 'John Carter',
            email: 'john@google.com',
            role: 'Admin',
            status: 'Active',
            lastActive: '2 minutes ago',
            avatar: '/api/placeholder/32/32'
        },
        {
            name: 'Sophie Rivers',
            email: 'sophie@microsoft.com',
            role: 'Editor',
            status: 'Offline',
            lastActive: '2 hours ago',
            avatar: '/api/placeholder/32/32'
        },
        {
            name: 'Alex Martinez',
            email: 'alex@apple.com',
            role: 'User',
            status: 'Active',
            lastActive: '5 minutes ago',
            avatar: '/api/placeholder/32/32'
        },
        {
            name: 'Emma Wilson',
            email: 'emma@netflix.com',
            role: 'Editor',
            status: 'Active',
            lastActive: 'Just now',
            avatar: '/api/placeholder/32/32'
        }
    ];

    return (
        <div className="flex min-h-screen bg-[#0B0F19]">
            {/* <div className="w-64 bg-[#141B2D] p-6">
                <div className="mb-8">
                    <img src="https://i.postimg.cc/TYQghNSb/synx-up-01-Yb-N9-XRn8-LOi5-J9-Qb.png" alt="logo" />
                </div>

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

                <div className="space-y-1">
                    <div className="relative">
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

                        {isOpen && (
                            <div className="absolute mt-2 w-48 rounded-md bg-[#252E42] shadow-lg">
                                <ul className="py-1">
                                    <li className="px-4 py-2 hover:bg-[#2F3A56] cursor-pointer text-white">Dashboard</li>
                                    <li className="px-4 py-2 hover:bg-[#2F3A56] cursor-pointer text-white">User Management</li>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
            </div> */}

<NavBar/>

            {/* Main Content */}
            <div className="flex-1 p-8">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-medium text-white">User Management</h1>
                        <p className="text-sm text-gray-400">Manage and monitor user activities</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300">
                            <Search size={16} />
                            <span>Search Users</span>
                        </button>
                        <button className="flex items-center space-x-2 rounded-lg bg-[#FF4C9D] px-4 py-2 text-sm text-white">
                            <UserPlus size={16} />
                            <span>Add User</span>
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="mb-8 grid grid-cols-4 gap-4">
                    <div className="rounded-lg bg-[#141B2D] p-4">
                        <div className="mb-6 flex items-center justify-between">
                            <span className="text-sm text-gray-400">Total Users</span>
                            <MoreHorizontal size={20} className="text-gray-400" />
                        </div>
                        <div className="text-2xl font-semibold text-white">2,543</div>
                        <div className="text-sm text-green-500">+12.5%</div>
                    </div>

                    <div className="rounded-lg bg-[#141B2D] p-4">
                        <div className="mb-6 flex items-center justify-between">
                            <span className="text-sm text-gray-400">Active Now</span>
                            <MoreHorizontal size={20} className="text-gray-400" />
                        </div>
                        <div className="text-2xl font-semibold text-white">1,853</div>
                        <div className="text-sm text-green-500">+5.2%</div>
                    </div>

                    <div className="rounded-lg bg-[#141B2D] p-4">
                        <div className="mb-6 flex items-center justify-between">
                            <span className="text-sm text-gray-400">New Users</span>
                            <MoreHorizontal size={20} className="text-gray-400" />
                        </div>
                        <div className="text-2xl font-semibold text-white">223</div>
                        <div className="text-sm text-green-500">+18.3%</div>
                    </div>

                    <div className="rounded-lg bg-[#141B2D] p-4">
                        <div className="mb-6 flex items-center justify-between">
                            <span className="text-sm text-gray-400">Banned Users</span>
                            <MoreHorizontal size={20} className="text-gray-400" />
                        </div>
                        <div className="text-2xl font-semibold text-white">23</div>
                        <div className="text-sm text-red-500">+2.1%</div>
                    </div>
                </div>

                {/* Users Table */}
                <div className="rounded-lg bg-[#141B2D] p-6">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-lg font-medium text-white">Recent Users</h2>
                        <div className="flex items-center space-x-2">
                            <button className="text-sm text-gray-400 hover:text-white">View All</button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-700">
                                    <th className="pb-4 text-left text-sm font-medium text-gray-400">User</th>
                                    <th className="pb-4 text-left text-sm font-medium text-gray-400">Role</th>
                                    <th className="pb-4 text-left text-sm font-medium text-gray-400">Status</th>
                                    <th className="pb-4 text-left text-sm font-medium text-gray-400">Last Active</th>
                                    <th className="pb-4 text-right text-sm font-medium text-gray-400">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index} className="border-b border-gray-700">
                                        <td className="py-4">
                                            <div className="flex items-center space-x-3">
                                                <img
                                                    src={user.avatar}
                                                    alt={user.name}
                                                    className="h-8 w-8 rounded-full"
                                                />
                                                <div>
                                                    <div className="text-sm font-medium text-white">{user.name}</div>
                                                    <div className="text-sm text-gray-400">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <span className="text-sm text-gray-300">{user.role}</span>
                                        </td>
                                        <td className="py-4">
                                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                user.status === 'Active' 
                                                    ? 'bg-green-500/10 text-green-500' 
                                                    : 'bg-gray-500/10 text-gray-400'
                                            }`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="py-4">
                                            <span className="text-sm text-gray-400">{user.lastActive}</span>
                                        </td>
                                        <td className="py-4 text-right">
                                            <div className="flex items-center justify-end space-x-2">
                                                <button className="rounded p-1 text-gray-400 hover:bg-gray-700 hover:text-white">
                                                    <Edit size={16} />
                                                </button>
                                                <button className="rounded p-1 text-gray-400 hover:bg-gray-700 hover:text-white">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;