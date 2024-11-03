'use client'
import React from 'react';
import { MoreVertical, Plus, Search, MessageSquare, Paperclip } from "lucide-react";
import NavBar from '../../components/NavBar';

const ProjectBoard = () => {
  const tasks = [
    {
      title: "Landing page design & development",
      description: "Lorem ipsum dolor sit amet consectetur sed id massa morbi porta molestie.",
      assignees: [1, 2, 3, 4],
      comments: 4,
      progress: 0, // 0% - Not started
      tag: { name: "About page", color: "bg-purple-500" },
      subtasks: [
        { text: "Careers page", completed: false },
      ],
      labels: [{ name: "Development", color: "bg-blue-500" }]
    },
    {
      title: "Mobile app UI/UX design",
      description: "Lorem ipsum dolor sit amet consectetur sed id massa morbi.",
      assignees: [1, 2],
      comments: 19,
      progress: 45, // 45% - In Progress
      attachments: 2,
      labels: [{ name: "Design", color: "bg-purple-500" }]
    },
    {
      title: "SEO campaign",
      description: "Lorem ipsum dolor sit amet consectetur sed id massa morbi.",
      assignees: [1],
      comments: 2,
      progress: 100, // 100% - Completed
      attachments: 16,
      labels: [{ name: "Marketing", color: "bg-green-500" }]
    }
  ];

  const getProgressColor = (progress) => {
    if (progress === 100) return 'bg-green-500';
    if (progress > 0) return 'bg-purple-500';
    return 'bg-gray-500';
  };

  const getProgressText = (progress) => {
    if (progress === 100) return 'Completed';
    if (progress > 0) return `${progress}% Complete`;
    return 'Not Started';
  };

  return (
    <div className="flex h-screen bg-[#0D1117] text-white">
      {/* Sidebar */}

      <NavBar/>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Header */}
        <header className="border-b border-gray-800 p-4 bg-[#161B22]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Todo</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for..."
                  className="rounded-lg bg-gray-800 py-2 pl-8 pr-4 text-sm border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>
              <button className="rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium hover:bg-purple-600 transition-colors duration-200">
                Add to Q
              </button>
            </div>
          </div>
        </header>

        {/* Board */}
        <div className="p-6 bg-[#0D1117] h-full overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Add Task Button */}
            <button className="w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-700 p-3 text-gray-500 hover:border-purple-500 hover:text-purple-500 transition-all duration-200">
              <Plus className="h-5 w-5" />
            </button>

            {/* Tasks */}
            {tasks.map((task, index) => (
              <div 
                key={index} 
                className="rounded-lg bg-[#161B22] p-4 shadow-sm border border-gray-800 hover:border-gray-700 transition-colors group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h4 className="font-medium text-gray-200 group-hover:text-white transition-colors">
                      {task.title}
                    </h4>
                    <button className="text-gray-400 hover:text-gray-300 transition-colors">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-400">{task.description}</p>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{getProgressText(task.progress)}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getProgressColor(task.progress)} transition-all duration-300`}
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  {task.labels && (
                    <div className="flex flex-wrap gap-2">
                      {task.labels.map((label, i) => (
                        <span
                          key={i}
                          className={`${label.color} rounded-full px-2.5 py-1 text-xs font-medium text-white bg-opacity-80`}
                        >
                          {label.name}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex -space-x-2">
                      {[...Array(task.assignees.length)].map((_, i) => (
                        <div
                          key={i}
                          className="h-7 w-7 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-[#161B22] flex items-center justify-center text-xs font-medium text-white"
                        >
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4 text-gray-400">
                      {task.comments && (
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="h-4 w-4" />
                          <span className="text-xs">{task.comments}</span>
                        </div>
                      )}
                      {task.attachments && (
                        <div className="flex items-center space-x-1">
                          <Paperclip className="h-4 w-4" />
                          <span className="text-xs">{task.attachments}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBoard;