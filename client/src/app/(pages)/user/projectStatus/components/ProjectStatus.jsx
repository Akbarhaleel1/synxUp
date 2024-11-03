'use client'
import React, { useState } from 'react';
import { Search, Plus, ChevronDown, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import Sidebar from '../../components/Nav';  // Import the Sidebar component we created earlier

const ProjectStatusPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const projectStatuses = [
    { stage: 'Stage 1', task: 'UI/UX Design', startDate: '2024-01-01', endDate: '2024-01-15', status: 'Completed' },
    { stage: 'Stage 1', task: 'Api Design', startDate: '2024-01-16', endDate: '2024-01-30', status: 'Completed' },
    { stage: 'Stage 1', task: 'Model Design', startDate: '2024-02-01', endDate: '2024-02-15', status: 'Completed' },
    { stage: 'Stage 2', task: 'Implement Authentication', startDate: '2024-02-16', endDate: '2024-03-01', status: 'Normal' },
    { stage: 'Stage 2', task: 'AI', startDate: '2024-03-02', endDate: '2024-03-15', status: 'Still Work' },
    { stage: 'Stage 2', task: 'Integration', startDate: '2024-03-16', endDate: '2024-03-30', status: 'Still Work' },
    { stage: 'Stage 2', task: 'Validate IAM', startDate: '2024-04-01', endDate: '2024-04-15', status: 'Still Work' },
    { stage: 'Stage 4', task: 'Testing', startDate: '2024-04-16', endDate: '2024-04-30', status: 'Start Soon' },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-emerald-400/20 text-emerald-400';
      case 'normal':
        return 'bg-yellow-400/20 text-yellow-400';
      case 'still work':
        return 'bg-red-400/20 text-red-400';
      case 'start soon':
        return 'bg-pink-400/20 text-pink-400';
      default:
        return 'bg-gray-400/20 text-gray-400';
    }
  };

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

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-xl z-40 transition-transform duration-300">
          <Sidebar mobile />
        </div>
      )}

      {/* Main Content */}
      <div className="lg:ml-72 p-4 sm:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">Project status</h1>
              <p className="text-gray-400 text-sm">see your account information in here!</p>
            </div>
            
            {/* Search Bar */}
            <div className="relative group w-full sm:w-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-xl blur group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative flex items-center bg-gray-800/80 rounded-xl px-4 py-2 backdrop-blur-sm border border-white/5 w-full sm:w-64">
                <Search className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="bg-transparent border-none focus:outline-none text-sm w-full text-gray-300 placeholder-gray-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project Card */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Project Name</h2>
            
            {/* Progress Bar */}
            <div className="relative h-2 bg-gray-700/50 rounded-full mb-6">
              <div 
                className="absolute left-0 top-0 h-full bg-emerald-500 rounded-full"
                style={{ width: '25%' }}
              />
              <div className="absolute -top-8 right-0 text-sm text-gray-400">
                25% to complete
              </div>
            </div>

            {/* Project Status Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-4 font-medium text-gray-400">Stages</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-400">Task</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-400">Start Date</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-400">End Date</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-400">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {projectStatuses.map((item, index) => (
                    <tr key={index} className="border-b border-gray-700/50">
                      <td className="py-4 px-4 text-sm">{item.stage}</td>
                      <td className="py-4 px-4 text-sm">{item.task}</td>
                      <td className="py-4 px-4 text-sm text-gray-400">{item.startDate}</td>
                      <td className="py-4 px-4 text-sm text-gray-400">{item.endDate}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 text-sm text-gray-400 gap-4">
              <div>Showing data 1 to 8 of 1566 entries</div>
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-lg hover:bg-gray-700/50">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center">
                  1
                </button>
                <button className="w-8 h-8 rounded-lg hover:bg-gray-700/50 flex items-center justify-center">
                  2
                </button>
                <button className="w-8 h-8 rounded-lg hover:bg-gray-700/50 flex items-center justify-center">
                  3
                </button>
                <button className="w-8 h-8 rounded-lg hover:bg-gray-700/50 flex items-center justify-center">
                  4
                </button>
                <button className="w-8 h-8 rounded-lg hover:bg-gray-700/50 flex items-center justify-center">
                  42
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-700/50">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatusPage;