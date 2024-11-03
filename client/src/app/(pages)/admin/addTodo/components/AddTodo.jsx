'use client'
import React from 'react';
import { 
  Users, Files, Calendar, MessageSquare, MoreVertical, 
  Link2, Paperclip, FileText, Image, Download, Clock,
  ChevronRight, AlertCircle, CheckCircle2
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ProjectDetails = () => {
  const projectData = {
    title: "Landing Page Redesign",
    status: "In Progress",
    progress: 65,
    description: "Redesign and development of the main landing page with modern UI components and improved user experience.",
    dueDate: "2024-11-30",
    team: [
      { id: 1, name: "Alice Cooper", role: "Project Lead", avatar: "A" },
      { id: 2, name: "Bob Wilson", role: "UI Designer", avatar: "B" },
      { id: 3, name: "Charlie Davis", role: "Developer", avatar: "C" },
      { id: 4, name: "Diana Ross", role: "Content Writer", avatar: "D" }
    ],
    labels: [
      { name: "Design", color: "bg-purple-500" },
      { name: "Development", color: "bg-blue-500" },
      { name: "High Priority", color: "bg-red-500" }
    ],
    files: [
      { name: "Landing_Page_Mockup.fig", type: "image", size: "2.4 MB", date: "2024-10-20" },
      { name: "Content_Guidelines.pdf", type: "pdf", size: "1.1 MB", date: "2024-10-18" },
      { name: "Technical_Specs.docs", type: "doc", size: "890 KB", date: "2024-10-15" }
    ],
    activity: [
      { id: 1, user: "Alice Cooper", action: "updated the design files", time: "2 hours ago" },
      { id: 2, user: "Bob Wilson", action: "completed the hero section", time: "5 hours ago" },
      { id: 3, user: "Charlie Davis", action: "added new components", time: "1 day ago" }
    ],
    tasks: [
      { id: 1, title: "Design System Setup", status: "completed" },
      { id: 2, title: "Hero Section Development", status: "in_progress" },
      { id: 3, title: "Content Integration", status: "in_progress" },
      { id: 4, title: "Mobile Responsiveness", status: "pending" },
      { id: 5, title: "Performance Optimization", status: "pending" }
    ],
    progressData: [
      { name: 'Week 1', progress: 20 },
      { name: 'Week 2', progress: 35 },
      { name: 'Week 3', progress: 50 },
      { name: 'Week 4', progress: 65 }
    ]
  };

  const getFileIcon = (type) => {
    switch(type) {
      case 'image':
        return <Image className="h-4 w-4" alt=''/>;
      case 'pdf':
        return <FileText className="h-4 w-4" />;
      default:
        return <Files className="h-4 w-4" />;
    }
  };

  const getTaskStatusIcon = (status) => {
    switch(status) {
      case 'completed':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'in_progress':
        return <Clock className="h-4 w-4 text-purple-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0D1117] text-white">
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Header */}
          <div className="bg-[#161B22] rounded-lg p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-3 sm:space-y-0">
              <div className="space-y-1">
                <h1 className="text-xl sm:text-2xl font-bold">{projectData.title}</h1>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <span className="text-sm sm:text-base text-gray-400">Due {new Date(projectData.dueDate).toLocaleDateString()}</span>
                  <div className="flex flex-wrap gap-2">
                    {projectData.labels.map((label) => (
                      <span
                        key={label.name}
                        className={`${label.color} rounded-full px-2.5 py-1 text-xs font-medium`}
                      >
                        {label.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors self-end sm:self-start">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>

            <p className="text-sm sm:text-base text-gray-300">{projectData.description}</p>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Overall Progress</span>
                <span className="font-medium">{projectData.progress}%</span>
              </div>
              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-500 transition-all duration-300"
                  style={{ width: `${projectData.progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Left Column */}
            <div className="space-y-4 sm:space-y-6 lg:col-span-2">
              {/* Progress Chart */}
              <div className="bg-[#161B22] rounded-lg p-4 sm:p-6">
                <h2 className="text-lg font-medium mb-4">Progress Overview</h2>
                <div className="h-48 sm:h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={projectData.progressData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2D3139" />
                      <XAxis dataKey="name" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937',
                          border: 'none',
                          borderRadius: '0.5rem',
                          color: '#F3F4F6'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="progress" 
                        stroke="#8B5CF6" 
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Tasks */}
              <div className="bg-[#161B22] rounded-lg p-4 sm:p-6">
                <h2 className="text-lg font-medium mb-4">Tasks</h2>
                <div className="space-y-3">
                  {projectData.tasks.map((task) => (
                    <div 
                      key={task.id}
                      className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        {getTaskStatusIcon(task.status)}
                        <span className="text-sm sm:text-base">{task.title}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity */}
              <div className="bg-[#161B22] rounded-lg p-4 sm:p-6">
                <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {projectData.activity.map((item) => (
                    <div key={item.id} className="flex items-start space-x-3">
                      <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center shrink-0">
                        {item.user[0]}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm">
                          <span className="font-medium">{item.user}</span>
                          {' '}{item.action}
                        </p>
                        <span className="text-xs text-gray-400">{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-6">
              {/* Team */}
              <div className="bg-[#161B22] rounded-lg p-4 sm:p-6">
                <h2 className="text-lg font-medium mb-4">Team Members</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {projectData.team.map((member) => (
                    <div key={member.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 min-w-0">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shrink-0">
                          {member.avatar}
                        </div>
                        <div className="truncate">
                          <p className="font-medium truncate">{member.name}</p>
                          <p className="text-sm text-gray-400 truncate">{member.role}</p>
                        </div>
                      </div>
                      <button className="p-1 hover:bg-gray-800 rounded transition-colors shrink-0">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Files */}
              <div className="bg-[#161B22] rounded-lg p-4 sm:p-6">
                <h2 className="text-lg font-medium mb-4">Files</h2>
                <div className="space-y-3">
                  {projectData.files.map((file) => (
                    <div key={file.name} className="p-3 bg-gray-800 rounded-lg space-y-2">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3 min-w-0">
                          <div className="shrink-0">{getFileIcon(file.type)}</div>
                          <div className="truncate">
                            <p className="font-medium truncate">{file.name}</p>
                            <p className="text-xs text-gray-400">
                              {file.size} • {file.date}
                            </p>
                          </div>
                        </div>
                        <button className="p-1 hover:bg-gray-700 rounded transition-colors shrink-0">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-[#161B22] rounded-lg p-4 sm:p-6">
                <h2 className="text-lg font-medium mb-4">Quick Links</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Link2 className="h-4 w-4" />
                      <span className="text-sm sm:text-base">Design System</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-4 w-4" />
                      <span className="text-sm sm:text-base">Team Chat</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm sm:text-base">Project Timeline</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;