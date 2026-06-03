'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, BookOpen, Video, FileText, Headphones, 
  MessageCircle, ChevronRight, Clock, Users, 
  Download, Shield, Smartphone, ArrowRight,
  Sparkles, Mail, Phone, Globe
} from 'lucide-react';

export default function HelpCenterPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const helpCategories = [
    {
      id: 1,
      title: 'Getting Started',
      icon: Sparkles,
      color: 'emerald',
      articles: [
        { title: 'How to create your school account', link: '#' },
        { title: 'Setting up student profiles', link: '#' },
        { title: 'Adding teachers and staff', link: '#' },
        { title: 'Configuring academic year', link: '#' },
      ]
    },
    {
      id: 2,
      title: 'Student Management',
      icon: Users,
      color: 'blue',
      articles: [
        { title: 'Student admission process', link: '#' },
        { title: 'Managing student records', link: '#' },
        { title: 'Transfer and graduation', link: '#' },
        { title: 'Student ID card generation', link: '#' },
      ]
    },
    {
      id: 3,
      title: 'Attendance & Reports',
      icon: Clock,
      color: 'purple',
      articles: [
        { title: 'Taking daily attendance', link: '#' },
        { title: 'Biometric device setup', link: '#' },
        { title: 'Attendance reports', link: '#' },
        { title: 'Parent notifications', link: '#' },
      ]
    },
    {
      id: 4,
      title: 'Fee Management',
      icon: FileText,
      color: 'orange',
      articles: [
        { title: 'Setting up fee structures', link: '#' },
        { title: 'Collecting fees online', link: '#' },
        { title: 'Payment reconciliation', link: '#' },
        { title: 'Generating fee receipts', link: '#' },
      ]
    },
    {
      id: 5,
      title: 'Examinations',
      icon: BookOpen,
      color: 'rose',
      articles: [
        { title: 'Creating exam schedules', link: '#' },
        { title: 'Entering marks and grades', link: '#' },
        { title: 'Generating report cards', link: '#' },
        { title: 'Publishing results', link: '#' },
      ]
    },
    {
      id: 6,
      title: 'Mobile App',
      icon: Smartphone,
      color: 'cyan',
      articles: [
        { title: 'Downloading the app', link: '#' },
        { title: 'Parent portal features', link: '#' },
        { title: 'Teacher app guide', link: '#' },
        { title: 'Push notifications', link: '#' },
      ]
    },
  ];

  const popularGuides = [
    { title: 'How to reset your password', icon: Shield, link: '#' },
    { title: 'Adding multiple schools to one account', icon: Globe, link: '#' },
    { title: 'Data export and backup', icon: Download, link: '#' },
    { title: 'Integrating with payment gateways', icon: MessageCircle, link: '#' },
  ];

  const videoTutorials = [
    { title: 'Complete System Overview', duration: '15:24', icon: Video },
    { title: 'Student Management Tutorial', duration: '10:15', icon: Video },
    { title: 'Fee Collection Setup', duration: '12:30', icon: Video },
    { title: 'Report Card Generation', duration: '8:45', icon: Video },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="container-custom relative z-10 py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
                <Headphones className="w-3 h-3" />
                Help Center
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                How can we{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  help you?
                </span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Find guides, tutorials, and answers to common questions about ShikkhaERP.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and tutorials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3">
              Browse by Category
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Find the help you need by selecting a category below
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 bg-${category.color}-50 dark:bg-${category.color}-900/30 rounded-xl flex items-center justify-center mb-4`}>
                  <category.icon className={`w-6 h-6 text-${category.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-2 mb-4">
                  {category.articles.map((article, idx) => (
                    <li key={idx}>
                      <a href={article.link} className="text-slate-600 dark:text-slate-300 text-sm hover:text-emerald-600 flex items-center gap-1">
                        {article.title}
                        <ChevronRight className="w-3 h-3" />
                      </a>
                    </li>
                  ))}
                </ul>
                <a href="#" className="text-emerald-600 text-sm font-medium hover:underline inline-flex items-center gap-1">
                  View all articles
                  <ChevronRight className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-16 bg-slate-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3">
              Popular Guides
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Most frequently accessed help articles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularGuides.map((guide, idx) => (
              <motion.a
                key={idx}
                href={guide.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                  <guide.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">
                  {guide.title}
                </h3>
                <span className="text-emerald-600 text-sm inline-flex items-center gap-1">
                  Read Guide
                  <ChevronRight className="w-3 h-3" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3">
              Video Tutorials
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Watch step-by-step video guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTutorials.map((video, idx) => (
              <motion.a
                key={idx}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition group"
              >
                <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-8 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-500">{video.duration}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MessageCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3">
              Still Need Help?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Can't find what you're looking for? Our support team is ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                Contact Support
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-slate-700 dark:text-white rounded-xl font-semibold border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all hover:scale-105"
              >
                Visit FAQ
                <Sparkles className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-white mb-1">Email Us</h3>
              <p className="text-sm text-slate-500">support@shikkhaerp.com</p>
              <p className="text-xs text-slate-400 mt-1">Response within 24h</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-white mb-1">Call Us</h3>
              <p className="text-sm text-slate-500">+880 1319-719968</p>
              <p className="text-xs text-slate-400 mt-1">Mon-Fri, 9AM-6PM</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-white mb-1">Live Chat</h3>
              <p className="text-sm text-slate-500">Start a conversation</p>
              <p className="text-xs text-slate-400 mt-1">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}