'use client'
import React from 'react'
import Sidebar from '../../components/Nav'
import { Search } from 'lucide-react'

const ProjectLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#141B2D]">
      {/* Sidebar component */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 lg:ml-72">
        {/* Header */}
        <div className="mb-8 flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          <div>
            <h1 className="text-2xl font-semibold text-white">Docs</h1>
            <p className="text-sm text-gray-400">see your account information in here!</p>
          </div>

          {/* Search and New Product */}
          <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
            <div className="relative">
              <input
                type="text"
                placeholder="can't find something? search it here!"
                className="w-full rounded-lg bg-gray-800/50 px-4 py-2 text-sm text-gray-400 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 lg:w-80"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="h-4 w-4 text-gray-400" />
              </button>
            </div>

            <button className="flex items-center justify-between rounded-lg bg-gray-800/50 px-4 py-2 text-sm text-white backdrop-blur-xl transition-colors hover:bg-gray-700/50">
              <span>make a new product</span>
              <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                +
              </span>
            </button>
          </div>
        </div>

        {/* Grid of Folders */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="group relative aspect-square cursor-pointer rounded-xl bg-gray-800/50 p-4 backdrop-blur-xl transition-all hover:bg-gray-700/50"
            >
              <div className="flex h-full flex-col items-center justify-center">
                <div className="mb-2 h-16 w-16 rounded-xl bg-gradient-to-br from-gray-700/80 to-gray-700/40 p-4 shadow-lg transition-all group-hover:scale-110">
                  <div className="h-full w-full rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20" />
                </div>
                <span className="text-sm text-gray-400">Folder {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectLayout