'use client';
import { useState } from 'react';
import { 
  Calendar, Search, Download, ChevronLeft, ChevronRight,
  CheckCircle, XCircle, Clock, Users, Filter
} from 'lucide-react';
import toast from 'react-hot-toast';

// Mock classes
const classes = ['Class 7', 'Class 8', 'Class 9', 'Class 10'];
const sections = ['A', 'B'];

// Mock students
const mockStudents = [
  { id: 1, name: 'Rahul Ahmed', rollNo: '1001', present: true },
  { id: 2, name: 'Fatema Begum', rollNo: '902', present: false },
  { id: 3, name: 'Md. Hasan', rollNo: '805', present: true },
  { id: 4, name: 'Sadia Akter', rollNo: '1023', present: true },
  { id: 5, name: 'Tanvir Hossain', rollNo: '704', present: false },
];

export default function AttendancePage() {
  const [selectedClass, setSelectedClass] = useState('Class 9');
  const [selectedSection, setSelectedSection] = useState('A');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [students, setStudents] = useState(mockStudents);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate statistics
  const totalStudents = students.length;
  const presentCount = students.filter(s => s.present).length;
  const absentCount = totalStudents - presentCount;
  const attendancePercentage = ((presentCount / totalStudents) * 100).toFixed(1);

  // Toggle attendance
  const toggleAttendance = (id: number) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, present: !student.present } : student
    ));
  };

  // Mark all present
  const markAllPresent = () => {
    setStudents(students.map(student => ({ ...student, present: true })));
    toast.success('All students marked present');
  };

  // Save attendance
  const saveAttendance = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success(`Attendance saved for ${selectedClass} - Section ${selectedSection} on ${selectedDate}`);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Attendance Management</h1>
          <p className="text-gray-500 mt-1">Mark and track student attendance by class and section</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Class</label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              >
                {classes.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Section</label>
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              >
                {sections.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="flex items-end">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <Calendar size={16} />
                Load Students
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Students</p>
                <p className="text-2xl font-bold text-gray-800">{totalStudents}</p>
              </div>
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-indigo-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Present</p>
                <p className="text-2xl font-bold text-green-600">{presentCount}</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Absent</p>
                <p className="text-2xl font-bold text-red-600">{absentCount}</p>
              </div>
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Attendance Rate</p>
                <p className="text-2xl font-bold text-indigo-600">{attendancePercentage}%</p>
              </div>
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-semibold text-gray-800">
              Student List - {selectedClass} (Section {selectedSection})
            </h2>
            <button
              onClick={markAllPresent}
              className="text-sm text-indigo-600 hover:text-indigo-700"
            >
              Mark All Present
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Roll No</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Student Name</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Status</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-gray-700">{student.rollNo}</td>
                    <td className="px-6 py-4 font-medium text-gray-800">{student.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        student.present ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {student.present ? 'Present' : 'Absent'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleAttendance(student.id)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                          student.present
                            ? 'bg-red-50 text-red-600 hover:bg-red-100'
                            : 'bg-green-50 text-green-600 hover:bg-green-100'
                        }`}
                      >
                        {student.present ? 'Mark Absent' : 'Mark Present'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={saveAttendance}
            disabled={isSubmitting}
            className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg transition disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Download size={18} />
            )}
            Save Attendance
          </button>
        </div>

        {/* Recent Attendance Summary */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Today's Summary</h3>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 rounded-full transition-all"
                style={{ width: `${attendancePercentage}%` }}
              />
            </div>
            <span className="text-sm font-medium text-gray-600">
              {attendancePercentage}% Present
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            {selectedClass} - Section {selectedSection} | {selectedDate}
          </p>
        </div>
      </div>
    </div>
  );
}