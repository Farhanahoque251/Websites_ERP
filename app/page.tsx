'use client';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { 
  ArrowRight, PlayCircle, Users, Calendar, 
  BookOpen, DollarSign, BarChart3, MessageSquare, 
  Award, Star, GraduationCap, TrendingUp, Clock,
  CheckCircle, Shield, Cloud, Headphones, Zap,
  Eye, Target, Heart, Sparkles, School
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const featureTabs = [
    { title: 'Smart Scheduling', description: 'Color-coded teacher calendar with automated conflict detection', icon: Calendar },
    { title: 'Parent Communication', description: 'Real-time translated messages and multilingual parent alerts', icon: MessageSquare },
    { title: 'Behavior Tracking', description: 'Real-time behavior dashboards and intervention tracking', icon: TrendingUp },
  ];

  const features = [
    { icon: Users, title: 'Student Management', description: 'Centralized student records, enrollment, and profile management' },
    { icon: Calendar, title: 'Attendance Tracking', description: 'Real-time attendance with biometric integration' },
    { icon: BookOpen, title: 'Exam Management', description: 'Online exams, automated grading, and result processing' },
    { icon: DollarSign, title: 'Fee Management', description: 'Online fee collection, automatic receipts, and financial reports' },
    { icon: BarChart3, title: 'Analytics Dashboard', description: 'Real-time insights and performance analytics' },
    { icon: MessageSquare, title: 'Communication Hub', description: 'SMS, email, and in-app notifications' },
    { icon: Shield, title: 'Secure & Safe', description: 'Enterprise-grade security with role-based access' },
    { icon: Cloud, title: 'Cloud-Based', description: 'Access from anywhere, anytime with automatic backups' },
  ];

  const comparisons = [
    { feature: 'Offline Access during internet outage', legacy: '❌ No', app: '✅ Yes' },
    { feature: 'Substitute Teacher Handoff', legacy: '❌ Manual', app: '✅ Automated' },
    { feature: 'IEP Accommodation Flags', legacy: '❌ Scattered', app: '✅ Centralized' },
    { feature: 'Multilingual Parent Alerts', legacy: '❌ Manual translation', app: '✅ Auto-translated' },
  ];

  const stats = [
    { value: '500+', label: 'Schools Trust Us', icon: School },
    { value: '1M+', label: 'Students Managed', icon: Users },
    { value: '50K+', label: 'Teachers Using', icon: GraduationCap },
    { value: '99.9%', label: 'Uptime Guarantee', icon: Clock },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <div className="container-custom relative z-10 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium w-fit">
                <Sparkles className="w-3 h-3" />
                Trusted by 500+ Schools in Bangladesh
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
                Smart Solutions for{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Modern Education
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Transform your school with our all-in-one ERP and LMS platform. 
                Streamline operations, enhance learning, and improve communication.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/contact" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold py-3 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                  <PlayCircle className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              {/* Feature Tabs */}
              <div className="pt-6 space-y-4">
                {featureTabs.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-start gap-4 ${
                      activeTab === idx 
                        ? 'bg-white dark:bg-gray-800 shadow-lg border border-emerald-200 dark:border-emerald-800'
                        : 'hover:bg-white/50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activeTab === idx ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }`}>
                      <tab.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`font-semibold ${activeTab === idx ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'}`}>
                        {tab.title}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{tab.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Device Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
                  <div className="bg-slate-100 dark:bg-gray-700 p-3 border-b">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-slate-800 dark:text-white">Dashboard</h3>
                        <span className="text-xs text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">Live</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-3 text-center">
                          <Users className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                          <p className="text-xs text-slate-500">Students</p>
                          <p className="text-lg font-bold text-emerald-600">1,284</p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-3 text-center">
                          <GraduationCap className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                          <p className="text-xs text-slate-500">Teachers</p>
                          <p className="text-lg font-bold text-blue-600">86</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs text-slate-500 mb-1">
                          <span>Today's Attendance</span>
                          <span className="font-medium text-emerald-600">94%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full" style={{ width: '94%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                            <TrendingUp className="w-3 h-3 text-emerald-600" />
                          </div>
                          <span className="text-xs text-slate-500">+12% vs last month</span>
                        </div>
                        <span className="text-xs text-slate-400">Updated just now</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 flex items-center gap-3 border border-slate-100 dark:border-slate-700">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Award Winner</p>
                    <p className="font-bold text-slate-800 dark:text-white text-sm">Best EduTech 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white" className="dark:fill-gray-900"/>
          </svg>
        </div>
      </section>

      {/* Animated Stats Section - IMPROVED */}
      <section ref={statsRef} className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm uppercase tracking-wide">Our Impact</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">
              Transforming Education Across <span className="text-emerald-600">Bangladesh</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Numbers that speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                    <stat.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-2">
                    {isStatsInView ? stat.value : '0'}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-medium">{stat.label}</div>
                  <div className="mt-3 h-1 w-12 mx-auto bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              Real-time Analytics
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              24/7 Support
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              Free Training
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              Data Security
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm uppercase tracking-wide">Powerful Features</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900 dark:text-white">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Manage Your School
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              A complete solution with 50+ modules designed for modern educational institutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-slate-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700"
              >
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Glowing Comparison Table */}
      <section className="py-20 bg-slate-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Why Schools <span className="text-emerald-600">Choose Us</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              See how ShikkhaERP compares to traditional school management methods
            </p>
          </div>

          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="grid grid-cols-3 bg-white dark:bg-gray-900 p-4 font-semibold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700">
              <div>Feature</div>
              <div className="text-center">Traditional Methods</div>
              <div className="text-center text-emerald-600">ShikkhaERP</div>
            </div>
            {comparisons.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="grid grid-cols-3 p-4 border-b border-slate-100 dark:border-slate-800 hover:bg-emerald-50/30 dark:hover:bg-emerald-900/10 transition"
              >
                <div className="text-slate-700 dark:text-slate-300">{item.feature}</div>
                <div className="text-center text-slate-500">{item.legacy}</div>
                <div className="text-center text-emerald-600 font-medium">{item.app}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Trusted by <span className="text-emerald-600">Educational Leaders</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Join 500+ schools already using ShikkhaERP
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-slate-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 italic">
                  "ShikkhaERP has transformed our school management completely. The attendance and fee collection modules alone saved us hours of manual work."
                </p>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white">Dr. Md. Shahidul Islam</p>
                  <p className="text-sm text-slate-500">Principal, Ideal School & College</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4">
              Ready to Transform Your School?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
              Join 500+ schools already using ShikkhaERP to streamline their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact" className="bg-white text-emerald-700 hover:bg-slate-100 font-semibold py-3 px-8 rounded-xl transition duration-300 inline-block shadow-lg text-center">
                Start Free Consultation
              </Link>
              <Link href="/contact?type=demo" className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 font-semibold py-3 px-8 rounded-xl transition duration-300 inline-block text-center">
                Request Live Demo
              </Link>
            </div>
            <p className="text-sm text-white/80 pt-4">
              No credit card required | Free 14-day trial
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}