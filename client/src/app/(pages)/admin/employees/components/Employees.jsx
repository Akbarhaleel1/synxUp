import React from 'react';
import { Search, MoreVertical, Edit2, Trash2 } from 'lucide-react';
import NavBar from '../../components/NavBar';

const EmployersDashboard = () => {
  const stats = [
    { title: 'Total Employers', count: 250, color: 'bg-purple-500' },
    { title: 'Developers', count: 95, color: 'bg-yellow-500' },
    { title: 'HR', count: 200, color: 'bg-green-500' },
    { title: 'Admins', count: 34, color: 'bg-blue-500' }
  ];

  const employers = [
    { id: 1, name: 'John Carter', email: 'john@synxup.com', phone: '(415) 367-1274', location: 'United States', category: 'DEVELOPER', status: 'On working' },
    { id: 2, name: 'Sophie Hanna', email: 'sophie@workflow.com', phone: '(250) 458-4277', location: 'United Kingdom', category: 'Admin', status: 'On leave' },
    { id: 3, name: 'Matt Carson', email: 'matt@outlook.com', phone: '(310) 918-9999', location: 'Australia', category: 'Admin', status: 'On leave' },
    { id: 4, name: 'Graham Hill', email: 'graham@miller.com', phone: '(540) 627-3890', location: 'India', category: 'Super admin', status: 'On working' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        {/* Sidebar */}
        <NavBar/>
        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Employers</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for..."
                  className="pl-10 pr-4 py-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-gray-600"
                />
              </div>
              <button className="px-4 py-2 bg-pink-500 rounded-md hover:bg-pink-600">
                Add Employers
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-gray-400 text-sm">{stat.title}</div>
                    <div className="text-2xl font-bold">{stat.count}</div>
                  </div>
                  <div className={`w-10 h-10 rounded-full ${stat.color} opacity-20`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-400">All Employers</div>
              <div className="text-sm text-gray-400">1 - 10 of 256</div>
            </div>

            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 text-sm">
                  <th className="pb-4">NAME</th>
                  <th className="pb-4">PHONE</th>
                  <th className="pb-4">LOCATION</th>
                  <th className="pb-4">CATEGORY</th>
                  <th className="pb-4">STATUS</th>
                  <th className="pb-4"></th>
                </tr>
              </thead>
              <tbody>
                {employers.map((employer) => (
                  <tr key={employer.id} className="border-t border-gray-700">
                    <td className="py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                        <div>
                          <div>{employer.name}</div>
                          <div className="text-sm text-gray-400">{employer.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-gray-400">{employer.phone}</td>
                    <td>{employer.location}</td>
                    <td>{employer.category}</td>
                    <td>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        employer.status === 'On working' 
                          ? 'bg-green-900 text-green-300' 
                          : 'bg-gray-700 text-gray-300'
                      }`}>
                        {employer.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex space-x-2">
                        <button className="p-1 hover:bg-gray-700 rounded">
                          <Edit2 className="h-4 w-4 text-gray-400" />
                        </button>
                        <button className="p-1 hover:bg-gray-700 rounded">
                          <Trash2 className="h-4 w-4 text-gray-400" />
                        </button>
                        <button className="p-1 hover:bg-gray-700 rounded">
                          <MoreVertical className="h-4 w-4 text-gray-400" />
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

export default EmployersDashboard;