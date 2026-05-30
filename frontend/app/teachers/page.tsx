'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Users, Search, Plus, Filter, Download, 
  Edit, Trash2, Eye, ChevronLeft, ChevronRight,
  Phone, Mail, BookOpen, Award, Calendar, Clock
} from 'lucide-react';
import toast from 'react-hot-toast';

// Mock teacher data
const initialTeachers = [
  { 
    id: 1, 
    name: 'Prof. Md. Rahman', 
    subject: 'Mathematics',
    qualification: 'M.Sc in Mathematics',
    phone: '+880 1712 345678',
    email: 'rahman@edusmart.com',
    joiningDate: '2020-01-15',
    status: 'Active',
    classes: ['Class 9', 'Class 10']
  },
  { 
    id: 2, 
    name: 'Mrs. Fatema Islam', 
    subject: 'Physics',
    qualification: 'M.Sc in Physics',
    phone: '+880 1812 345678',
    email: 'fatema@edusmart.com',
    joiningDate: '2019-03-20',
    status: 'Active',
    classes: ['Class 9', 'Class 10']
  },
  { 
    id: 3, 
    name: 'Mr. Kamal Hossain', 
    subject: 'English',
    qualification: 'M.A in English',
    phone: '+880 1912 345678',
    email: 'kamal@edusmart.com',
    joiningDate: '2021-06-10',
    status: 'Active',
    classes: ['Class 7', 'Class 8']
  },
  { 
    id: 4, 
    name: 'Ms. Sumaiya Akter', 
    subject: 'Chemistry',
    qualification: 'M.Sc in Chemistry',
    phone: '+880 1612 345678',
    email: 'sumaiya@edusmart.com',
    joiningDate: '2022-01-05',
    status: 'Active',
    classes: ['Class 9', 'Class 10']
  },
  { 
    id: 5, 
    name: 'Mr. Hasan Ahmed', 
    subject: 'Biology',
    qualification: 'M.Sc in Biology',
    phone: '+880 1712 987654',
    email: 'hasan@edusmart.com',
    joiningDate: '2021-08-12',
    status: 'Inactive',
    classes: ['Class 9', 'Class 10']
  },
];

const subjects = ['All Subjects', 'Mathematics', 'Physics', 'English', 'Chemistry', 'Biology'];
const statuses = ['All Status', 'Active', 'Inactive'];

export default function TeachersPage() {
  const [teachers, setTeachers] = useState(initialTeachers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter teachers
  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          teacher.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'All Subjects' || teacher.subject === selectedSubject;
    const matchesStatus = selectedStatus === 'All Status' || teacher.status === selectedStatus;
    return matchesSearch && matchesSubject && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);
  const paginatedTeachers = filteredTeachers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Delete teacher
  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this teacher?')) {
      setTeachers(teachers.filter(t => t.id !== id));
      toast.success('Teacher deleted successfully');
    }
  };

  const getStatusColor = (status) => {
    return status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Teacher Management</h1>
            <p className="text-gray-500 mt-1">Manage all teacher records, qualifications, and assignments</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg transition"
          >
            <Plus size={18} />
            Add New Teacher
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by name or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              />
            </div>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            >
              {subjects.map(s => <option key={s}>{s}</option>)}
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            >
              {statuses.map(s => <option key={s}>{s}</option>)}
            </select>
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <Download size={16} />
              Export List
            </button>
          </div>
        </div>

        {/* Teachers Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Teacher Name</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Subject</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Qualification</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Contact</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Status</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedTeachers.map((teacher) => (
                  <tr key={teacher.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-800">{teacher.name}</p>
                        <p className="text-xs text-gray-400">Joined: {teacher.joiningDate}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                        {teacher.subject}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700 text-sm">{teacher.qualification}</td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-700">{teacher.phone}</p>
                      <p className="text-xs text-gray-400">{teacher.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(teacher.status)}`}>
                        {teacher.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                          <Eye size={16} />
                        </button>
                        <button className="p-1 text-emerald-600 hover:bg-emerald-50 rounded">
                          <Edit size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete(teacher.id)}
                          className="p-1 text-red-600 hover:bg-red-50 rounded"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center px-6 py-4 border-t border-gray-100">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-1 border rounded-lg disabled:opacity-50"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-3 py-1 border rounded-lg disabled:opacity-50"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-6">
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-gray-500 text-sm">Total Teachers</p>
            <p className="text-2xl font-bold text-gray-800">{teachers.length}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-gray-500 text-sm">Active Teachers</p>
            <p className="text-2xl font-bold text-green-600">{teachers.filter(t => t.status === 'Active').length}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-gray-500 text-sm">Subjects</p>
            <p className="text-2xl font-bold text-gray-800">6</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-gray-500 text-sm">This Year</p>
            <p className="text-2xl font-bold text-indigo-600">+{teachers.filter(t => t.joiningDate.startsWith('2024')).length}</p>
          </div>
        </div>
      </div>

      {/* Add Teacher Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h2 className="text-xl font-bold mb-4">Add New Teacher</h2>
            <p className="text-gray-600 mb-4">Teacher form will be implemented in next step</p>
            <button 
              onClick={() => setShowAddModal(false)}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}