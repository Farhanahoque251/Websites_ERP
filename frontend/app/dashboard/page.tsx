'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Users, Calendar, BookOpen, DollarSign, BarChart3, 
  MessageSquare, Zap, ArrowUp, ArrowDown, MoreHorizontal,
  TrendingUp, CreditCard, CheckCircle, Clock
} from 'lucide-react';

// Mock data
const stats = [
  { title: 'Total Students', value: '1,284', change: '+12%', trend: 'up', icon: Users, color: 'indigo' },
  { title: 'Total Teachers', value: '86', change: '+5%', trend: 'up', icon: Users, color: 'emerald' },
  { title: 'Monthly Revenue', value: '৳2,45,000', change: '+8%', trend: 'up', icon: DollarSign, color: 'green' },
  { title: 'Attendance Today', value: '94%', change: '-2%', trend: 'down', icon: Calendar, color: 'orange' },
];

const recentActivities = [
  { id: 1, action: 'New student enrolled', user: 'Admin', time: '5 minutes ago', icon: Users },
  { id: 2, action: 'Fee payment received', user: 'Rahul Sharma', time: '1 hour ago', icon: DollarSign },
  { id: 3, action: 'Exam results published', user: 'Teacher', time: '3 hours ago', icon: BookOpen },
  { id: 4, action: 'Parent meeting scheduled', user: 'Principal', time: '5 hours ago', icon: Calendar },
  { id: 5, action: 'New teacher joined', user: 'HR', time: '1 day ago', icon: Users },
  { id: 6, action: 'Library books updated', user: 'Librarian', time: '2 days ago', icon: BookOpen },
];

const upcomingEvents = [
  { title: 'Mid-term Exams', date: 'Dec 15, 2024', type: 'exam' },
  { title: 'Parent-Teacher Meeting', date: 'Dec 20, 2024', type: 'meeting' },
  { title: 'Winter Break', date: 'Dec 25, 2024', type: 'holiday' },
  { title: 'Annual Sports Day', date: 'Jan 10, 2025', type: 'event' },
];

const pendingTasks = [
  { task: 'Review fee pending reports', priority: 'High', daysLeft: 2 },
  { task: 'Complete teacher evaluation', priority: 'Medium', daysLeft: 5 },
  { task: 'Submit monthly attendance', priority: 'High', daysLeft: 1 },
];

export default function Dashboard() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-8">
        
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {greeting}, Farhana! 👋
          </h1>
          <p className="text-gray-500 mt-1">Here's what's happening with your school today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                  <div className={`flex items-center gap-1 mt-2 text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.trend === 'up' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                    {stat.change}
                    <span className="text-gray-400">vs last month</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Three Column Layout - fills all space */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Recent Activities - spans 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 h-full">
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-800">Recent Activities</h2>
                  <button className="text-indigo-600 text-sm hover:text-indigo-700">View All →</button>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="p-4 hover:bg-gray-50 transition flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <activity.icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{activity.action}</p>
                      <p className="text-sm text-gray-500">by {activity.user} • {activity.time}</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Upcoming Events & Pending Tasks Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Upcoming Events */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-lg font-semibold text-gray-800">Upcoming Events</h2>
                </div>
                <div className="divide-y divide-gray-100">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">{event.title}</p>
                        <p className="text-sm text-gray-500">{event.date}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        event.type === 'exam' ? 'bg-red-100 text-red-600' :
                        event.type === 'meeting' ? 'bg-blue-100 text-blue-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pending Tasks */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800">Pending Tasks</h2>
                    <Clock className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div className="divide-y divide-gray-100">
                  {pendingTasks.map((task, index) => (
                    <div key={index} className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium text-gray-800 text-sm">{task.task}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          task.priority === 'High' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {task.priority}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">{task.daysLeft} days left</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions - Full Width */}
            <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Quick Actions
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <Link href="/students/add" className="bg-white/20 rounded-lg px-3 py-3 hover:bg-white/30 transition text-center">
                  <Users className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs font-medium block">Add Student</span>
                </Link>
                <Link href="/fees/collect" className="bg-white/20 rounded-lg px-3 py-3 hover:bg-white/30 transition text-center">
                  <DollarSign className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs font-medium block">Collect Fees</span>
                </Link>
                <Link href="/attendance/mark" className="bg-white/20 rounded-lg px-3 py-3 hover:bg-white/30 transition text-center">
                  <Calendar className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs font-medium block">Attendance</span>
                </Link>
                <Link href="/reports/generate" className="bg-white/20 rounded-lg px-3 py-3 hover:bg-white/30 transition text-center">
                  <BarChart3 className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs font-medium block">Reports</span>
                </Link>
                <Link href="/exams/create" className="bg-white/20 rounded-lg px-3 py-3 hover:bg-white/30 transition text-center">
                  <BookOpen className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs font-medium block">Exams</span>
                </Link>
                <Link href="/communication/send" className="bg-white/20 rounded-lg px-3 py-3 hover:bg-white/30 transition text-center">
                  <MessageSquare className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs font-medium block">Notices</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}