'use client';
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Bell,
  Search
} from 'lucide-react';
import Link from 'next/link';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { name: 'Overview', icon: <LayoutDashboard size={20} />, active: true },
    { name: 'My Orders', icon: <ShoppingBag size={20} />, active: false },
    { name: 'Profile', icon: <Users size={20} />, active: false },
    { name: 'Settings', icon: <Settings size={20} />, active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 hidden md:flex flex-col`}>
        <div className="p-6 font-bold text-xl text-blue-600 truncate text-center border-b">
          <Link href={'/'}>{isSidebarOpen ? 'FoodAdmin' : 'FA'}</Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button key={item.name} className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all ${item.active ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-blue-50 hover:text-blue-600'}`}>
              {item.icon}
              {isSidebarOpen && <span className="font-medium">{item.name}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t">
          <button className="w-full flex items-center gap-4 p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all">
            <LogOut size={20} />
            {isSidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Navbar */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg md:block hidden">
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-bold text-gray-800">Dashboard Overview</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-gray-100 px-3 py-2 rounded-xl">
              <Search size={18} className="text-gray-400" />
              <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none px-2 text-sm w-40" />
            </div>
            <button className="p-2 text-gray-400 hover:text-blue-600 relative">
              <Bell size={24} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">A</div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-8">
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Total Orders', value: '1,280', color: 'bg-blue-600' },
              { label: 'Pending', value: '14', color: 'bg-yellow-500' },
              { label: 'Completed', value: '1,266', color: 'bg-green-500' },
              { label: 'Earnings', value: '$4,250', color: 'bg-purple-600' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                <h3 className="text-2xl font-bold mt-2 text-gray-800">{stat.value}</h3>
                <div className={`h-1.5 w-12 ${stat.stat} mt-4 rounded-full ${stat.color}`}></div>
              </div>
            ))}
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex justify-between items-center">
              <h3 className="font-bold text-gray-800">Recent Activity</h3>
              <button className="text-blue-600 text-sm font-semibold">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                  <tr>
                    <th className="px-6 py-4">Item</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {[1, 2, 3].map((_, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-800">Classic Burger</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold">Delivered</span>
                      </td>
                      <td className="px-6 py-4 text-gray-500">Jan 16, 2026</td>
                      <td className="px-6 py-4 font-bold text-gray-800">$12.00</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Dashboard;