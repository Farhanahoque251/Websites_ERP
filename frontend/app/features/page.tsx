'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Users, Calendar, BookOpen, DollarSign, BarChart3, 
  MessageSquare, Shield, Cloud, Headphones, Zap,
  Database, Lock, Smartphone, Globe, Clock, Award,
  CheckCircle, GraduationCap, FileText, Bell, Settings,
  Truck, CreditCard, Printer, Camera, Wifi, Cpu, Mail
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    category: "Academic Management",
    icon: BookOpen,
    color: "indigo",
    items: [
      { title: "Student Information System", desc: "Complete student profiles, documents, and history" },
      { title: "Class & Section Management", desc: "Organize classes, sections, and subjects" },
      { title: "Exam & Grade Management", desc: "Online exams, automatic grading, report cards" },
      { title: "Assignment Tracker", desc: "Submit, review, and grade assignments online" },
      { title: "Lesson Planning", desc: "Create and share lesson plans with teachers" },
    ]
  },
  {
    category: "Administration",
    icon: Settings,
    color: "emerald",
    items: [
      { title: "Staff Management", desc: "Teacher and staff records, attendance, payroll" },
      { title: "Fee Collection", desc: "Online fee payment, receipts, reminders" },
      { title: "Expense Tracking", desc: "Track school expenses and generate reports" },
      { title: "Inventory Management", desc: "Manage books, equipment, and supplies" },
      { title: "Transport Management", desc: "Bus routes, tracking, and fees" },
    ]
  },
  {
    category: "Attendance & Communication",
    icon: Calendar,
    color: "blue",
    items: [
      { title: "Biometric Integration", desc: "Connect with biometric attendance devices" },
      { title: "Parent Portal", desc: "Parents can view child's progress and attendance" },
      { title: "SMS & Email Alerts", desc: "Automatic notifications for events and alerts" },
      { title: "Mobile App Access", desc: "Access from anywhere on any device" },
      { title: "Push Notifications", desc: "Real-time updates on mobile devices" },
    ]
  },
  {
    category: "Financial Management",
    icon: DollarSign,
    color: "green",
    items: [
      { title: "Fee Structure", desc: "Custom fee structures for different classes" },
      { title: "Payment Gateway", desc: "bKash, Nagad, Rocket, Credit Card" },
      { title: "Scholarship Management", desc: "Manage scholarships and discounts" },
      { title: "Financial Reports", desc: "Balance sheets, income statements" },
      { title: "Salary Management", desc: "Teacher and staff salary processing" },
    ]
  },
  {
    category: "Reports & Analytics",
    icon: BarChart3,
    color: "purple",
    items: [
      { title: "Performance Analytics", desc: "Student and class performance insights" },
      { title: "Attendance Reports", desc: "Daily, monthly, yearly attendance summary" },
      { title: "Fee Collection Report", desc: "Track payments and pending dues" },
      { title: "Custom Reports", desc: "Generate any report with filters" },
      { title: "Data Export", desc: "Export to Excel, PDF, CSV formats" },
    ]
  },
  {
    category: "Security & Support",
    icon: Shield,
    color: "red",
    items: [
      { title: "Role-Based Access", desc: "Admin, Teacher, Student, Parent views" },
      { title: "Data Backup", desc: "Automatic daily backups" },
      { title: "SSL Security", desc: "Secure encrypted data transmission" },
      { title: "24/7 Support", desc: "Phone, email, and chat support" },
      { title: "Free Training", desc: "Training for teachers and staff" },
    ]
  },
];

const stats = [
  { number: "50+", label: "Core Modules" },
  { number: "500+", label: "Schools Using" },
  { number: "1M+", label: "Students Managed" },
  { number: "99.9%", label: "Uptime Guarantee" },
];

const integrations = [
  { name: "bKash", icon: CreditCard },
  { name: "Nagad", icon: CreditCard },
  { name: "Rocket", icon: CreditCard },
  { name: "Biometric", icon: Camera },
  { name: "SMS Gateway", icon: Bell },
  { name: "Email Server", icon: Mail },
];

export default function Features() {
  const [activeCategory, setActiveCategory] = useState("Academic Management");

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Complete School Management Solution
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              50+ Powerful Features to Streamline Every Aspect of Your Institution
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-indigo-600">{stat.number}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {features.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === cat.category
                    ? `bg-${cat.color}-600 text-white shadow-lg`
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.category}
              </button>
            ))}
          </div>

          {/* Features Display */}
          {features.map((category) => (
            activeCategory === category.category && (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.items.map((feature, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 bg-${category.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <CheckCircle className={`w-5 h-5 text-${category.color}-600`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                        <p className="text-gray-500 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )
          ))}
        </div>
      </section>

      {/* All Features List Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need in One Platform</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No need for multiple software. EduSmart Pro brings everything together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.flatMap(cat => cat.items).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-700">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with popular payment gateways and services in Bangladesh
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl px-8 py-4 shadow-sm border border-gray-200 flex items-center gap-3">
                <item.icon className="w-5 h-5 text-indigo-600" />
                <span className="font-medium text-gray-700">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your School?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ schools already using EduSmart Pro
          </p>
          <Link href="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
            Request a Free Demo
          </Link>
        </div>
      </section>
    </>
  );
}