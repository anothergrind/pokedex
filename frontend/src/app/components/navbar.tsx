import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-[#1a2236] px-8 py-4 flex items-center justify-between text-white">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="text-indigo-400">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
            <path fill="#6366F1" d="M16 0C7.163 0 0 7.163 0 16c0 8.837 7.163 16 16 16s16-7.163 16-16C32 7.163 24.837 0 16 0zm0 29.333C8.636 29.333 2.667 23.364 2.667 16S8.636 2.667 16 2.667 29.333 8.636 29.333 16 23.364 29.333 16 29.333z"/>
          </svg>
        </div>
        
        {/* Navigation Links - Explicit text-white added */}
        <div className="flex text-white" style={{ gap: '24px' }}>
          <a href="#" className="inline-block font-medium px-4 py-2 rounded-md bg-[#232c43] text-white">Dashboard</a>
          <a href="#" className="inline-block font-medium px-4 py-2 rounded-md hover:bg-[#232c43] transition-colors text-white">Team</a>
          <a href="#" className="inline-block font-medium px-4 py-2 rounded-md hover:bg-[#232c43] transition-colors text-white">Projects</a>
          <a href="#" className="inline-block font-medium px-4 py-2 rounded-md hover:bg-[#232c43] transition-colors text-white">Calendar</a>
          <a href="#" className="inline-block font-medium px-4 py-2 rounded-md hover:bg-[#232c43] transition-colors text-white">Reports</a>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <button className="text-gray-400 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        
        {/* Profile Avatar */}
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
          <img src="/api/placeholder/32/32" alt="Avatar" />
        </div>
      </div>
    </nav>
  );
}