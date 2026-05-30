'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Users, Search, Plus, Filter, Download, 
  Edit, Trash2, Eye, ChevronLeft, ChevronRight,
  GraduationCap, Phone, Mail, MapPin, Calendar
} from 'lucide-react';
import toast from 'react-hot-toast';

// Mock student data
const initialStudents = [
  { 
    id: 1, 
    name: 'Rahul Ahmed', 
    class: 'Class 10', 
    section: 'A', 
    rollNo: '1001',
    parentPhone: '+880 1712 345678',
    email: 'rahul@example.com',
    address: 'Dhaka, Bangladesh',
    admissionDate: '2023-01-15',
    status: 'Active'
  },
  { 
    id: 2, 
    name: 'Fatema Begum', 
    class: 'Class 9', 
    section: 'B', 
    rollNo: '902',
    parentPhone: '+880 1812 345678',
    email: 'fatema@example.com',
    address: 'Gazipur, Bangladesh',
    admissionDate: '2023-02-20',
    status: 'Active'
  },
  { 
    id: 3, 
    name: 'Md. Hasan', 
    class: 'Class 8', 
    section: 'A', 
    rollNo: '805',
    parentPhone: '+880 1912 345678',
    email: 'hasan@example.com',
    address: 'Narayanganj, Bangladesh',
    admissionDate: '2023-03-10',
    status: 'Active'
  },
  { 
    id: 4, 
    name: 'Sadia Akter', 
    class: 'Class 10', 
    section: 'B', 
    rollNo: '1023',
    parentPhone: '+880 1612 345678',
    email: 'sadia@example.com',
    address: 'Dhaka, Bangladesh',
    admissionDate: '2023-04-05',
    status: 'Inactive'
  },
  { 
    id: 5, 
    name: 'Tanvir Hossain', 
    class: 'Class 7', 
    section: 'A', 
    rollNo: '704',
    parentPhone: '+880 1712 987654',
    email: 'tanvir@example.com',
    address: 'Khulna, Bangladesh',
    admissionDate: '2023-05-12',
    status: 'Active'
  },
];

const classes = ['All Classes', 'Class 7', 'Class 8', 'Class 9', 'Class 10'];
const sections = ['All Sections', 'A', 'B'];

export default function StudentsPage() {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedSection, setSelectedSection] = useState('All Sections');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter students
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          student.rollNo.includes(searchTerm);
    const matchesClass = selectedClass === 'All Classes' || student.class === selectedClass;
    const matchesSection = selectedSection === 'All Sections' || student.section === selectedSection;
    return matchesSearch && matchesClass && matchesSection;
  });

  // Pagination
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Delete student
  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(s => s.id !== id));
      toast.success('Student deleted successfully');
    }
  };

  // Get status color
  const getStatusColor = (status) => {
    return status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Student Management</h1>
            <p className="text-gray-500 mt-1">Manage all student records, enrollments, and information</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg transition"
          >
            <Plus size={18} />
            Add New Student
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by name or roll no..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              />
            </div>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            >
              {classes.map(c => <option key={c}>{c}</option>)}
            </select>
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            >
              {sections.map(s => <option key={s}>{s}</option>)}
            </select>
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <Download size={16} />
              Export List
            </button>
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Roll No</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Student Name</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Class</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Section</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Parent Contact</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Status</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-gray-700">{student.rollNo}</td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-800">{student.name}</p>
                        <p className="text-xs text-gray-400">{student.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{student.class}</td>
                    <td className="px-6 py-4 text-gray-700">{student.section}</td>
                    <td className="px-6 py-4 text-gray-700">{student.parentPhone}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                        {student.status}
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
                          onClick={() => handleDelete(student.id)}
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
            <p className="text-gray-500 text-sm">Total Students</p>
            <p className="text-2xl font-bold text-gray-800">{students.length}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-gray-500 text-sm">Active Students</p>
            <p className="text-2xl font-bold text-green-600">{students.filter(s => s.status === 'Active').length}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-gray-500 text-sm">Total Classes</p>
            <p className="text-2xl font-bold text-gray-800">4</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-gray-500 text-sm">This Month</p>
            <p className="text-2xl font-bold text-indigo-600">+12</p>
          </div>
        </div>
      </div>

      {/* Add Student Modal (Simplified - will expand later) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h2 className="text-xl font-bold mb-4">Add New Student</h2>
            <p className="text-gray-600 mb-4">Student form will be implemented in next step</p>
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