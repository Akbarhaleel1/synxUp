'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Search, Settings, Users, MoreHorizontal } from 'lucide-react';
import NavBar from '../../components/NavBar';

// Dynamically import Recharts components with no SSR
const LineChart = dynamic(
    () => import('recharts').then((mod) => mod.LineChart),
    { ssr: false }
);

const Line = dynamic(
    () => import('recharts').then((mod) => mod.Line),
    { ssr: false }
);

const BarChart = dynamic(
    () => import('recharts').then((mod) => mod.BarChart),
    { ssr: false }
);

const Bar = dynamic(
    () => import('recharts').then((mod) => mod.Bar),
    { ssr: false }
);

const XAxis = dynamic(
    () => import('recharts').then((mod) => mod.XAxis),
    { ssr: false }
);

const YAxis = dynamic(
    () => import('recharts').then((mod) => mod.YAxis),
    { ssr: false }
);

const Tooltip = dynamic(
    () => import('recharts').then((mod) => mod.Tooltip),
    { ssr: false }
);

const ResponsiveContainer = dynamic(
    () => import('recharts').then((mod) => mod.ResponsiveContainer),
    { ssr: false }
);

const revenueData = [
    { month: 'Jan', revenue: 0, expenses: 0 },
    { month: 'Feb', revenue: 25000, expenses: 20000 },
    { month: 'Mar', revenue: 45000, expenses: 50000 },
    { month: 'Apr', revenue: 35000, expenses: 80000 },
    { month: 'May', revenue: 75000, expenses: 65000 },
    { month: 'Jun', revenue: 85000, expenses: 75000 },
    { month: 'Jul', revenue: 125000, expenses: 85000 },
    { month: 'Aug', revenue: 165000, expenses: 95000 },
    { month: 'Sep', revenue: 200000, expenses: 90000 },
    { month: 'Oct', revenue: 220000, expenses: 85000 },
    { month: 'Nov', revenue: 235000, expenses: 80000 },
    { month: 'Dec', revenue: 240800, expenses: 75000 },
];

const visitorData = Array(30).fill(0).map((_, i) => ({
    day: i + 1,
    visitors: Math.floor(Math.random() * 100) + 300
}));

const Dashboard = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="flex min-h-screen flex-col lg:flex-row bg-[#0B0F19]">
            {/* Sidebar */}
            <NavBar />

            {/* Main Content */}
            <div className="flex-1 p-4 lg:p-8 pt-16 lg:pt-8"> {/* Added top padding for mobile to account for hamburger menu */}
                {/* Header */}
                <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                    <div>
                        <h1 className="text-xl lg:text-2xl font-medium text-white">Welcome back, Admin</h1>
                        <p className="text-sm text-gray-400">Here you can check the project improvements</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                        <button className="flex items-center justify-center space-x-2 rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300">
                            Export data
                        </button>
                        <button className="flex items-center justify-center space-x-2 rounded-lg bg-[#FF4C9D] px-4 py-2 text-sm text-white">
                            Create report
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Pageviews */}
                    <div className="rounded-lg bg-[#141B2D] p-4">
                        <div className="mb-6 flex items-center justify-between">
                            <span className="text-sm text-gray-400">Pageviews</span>
                            <MoreHorizontal size={20} className="text-gray-400" />
                        </div>
                        <div className="text-2xl font-semibold text-white">50.8K</div>
                        <div className="text-sm text-green-500">+8.2%</div>
                    </div>

                    {/* Monthly Users */}
                    <div className="rounded-lg bg-[#141B2D] p-4">
                        <div className="mb-6 flex items-center justify-between">
                            <span className="text-sm text-gray-400">Monthly users</span>
                            <MoreHorizontal size={20} className="text-gray-400" />
                        </div>
                        <div className="text-2xl font-semibold text-white">23.6K</div>
                        <div className="text-sm text-red-500">-14.2%</div>
                    </div>

                    {/* New Sign Ups */}
                    <div className="rounded-lg bg-[#141B2D] p-4">
                        <div className="mb-6 flex items-center justify-between">
                            <span className="text-sm text-gray-400">New sign ups</span>
                            <MoreHorizontal size={20} className="text-gray-400" />
                        </div>
                        <div className="text-2xl font-semibold text-white">756</div>
                        <div className="text-sm text-green-500">+2.1%</div>
                    </div>

                    {/* Subscriptions */}
                    <div className="rounded-lg bg-[#141B2D] p-4">
                        <div className="mb-6 flex items-center justify-between">
                            <span className="text-sm text-gray-400">Subscriptions</span>
                            <MoreHorizontal size={20} className="text-gray-400" />
                        </div>
                        <div className="text-2xl font-semibold text-white">2.3K</div>
                        <div className="text-sm text-green-500">+4.3%</div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Revenue Chart */}
                    <div className="lg:col-span-2 rounded-lg bg-[#141B2D] p-4 lg:p-6">
                        <div className="mb-2">
                            <div className="mb-1 text-sm text-gray-400">Total revenue</div>
                            <div className="text-2xl font-semibold text-white">$240.8K</div>
                            <div className="text-sm text-green-500">+8.5%</div>
                        </div>
                        <div className="mb-6 flex flex-wrap items-center gap-4">
                            <div className="flex items-center space-x-2">
                                <div className="h-3 w-3 rounded-full bg-[#8B5CF6]"></div>
                                <span className="text-sm text-gray-400">Revenue</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="h-3 w-3 rounded-full bg-[#22C55E]"></div>
                                <span className="text-sm text-gray-400">Expenses</span>
                            </div>
                        </div>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={revenueData}>
                                    <XAxis
                                        dataKey="month"
                                        stroke="#374151"
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <YAxis
                                        stroke="#374151"
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={value => `${value / 1000}k`}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            background: '#1F2937',
                                            border: 'none',
                                            borderRadius: '8px',
                                            color: '#fff'
                                        }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke="#8B5CF6"
                                        strokeWidth={3}
                                        dot={false}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="expenses"
                                        stroke="#22C55E"
                                        strokeWidth={3}
                                        dot={false}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Total Profit Chart */}
                    <div className="rounded-lg bg-[#141B2D] p-4 lg:p-6">
                        <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <div>
                                <div className="text-sm text-gray-400">Total profit</div>
                                <div className="text-2xl font-semibold text-white">$144.6K</div>
                                <div className="text-sm text-green-500">+8.5%</div>
                            </div>
                            <div className="text-sm text-gray-400">Jan 2024 - Dec 2024</div>
                        </div>
                        <div className="h-40">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={visitorData}>
                                    <XAxis
                                        dataKey="day"
                                        stroke="#374151"
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <Bar
                                        dataKey="visitors"
                                        fill="#8B5CF6"
                                        radius={[4, 4, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <div className="text-sm text-gray-400">Total sessions</div>
                            <div className="text-sm text-gray-400">400</div>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <div className="text-xs text-gray-400">10k visitors</div>
                            <button className="text-xs text-purple-500">View report</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;