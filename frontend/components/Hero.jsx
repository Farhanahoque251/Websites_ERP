'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, PlayCircle, CheckCircle, Star, Users, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-emerald-50 min-h-screen flex items-center pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="container-custom relative z-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Trusted by 500+ Schools in Bangladesh
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Smart Solutions for 
              <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent block">
                Modern Education
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Transform your school with our all-in-one ERP and LMS platform. 
              Streamline operations, enhance learning, and improve communication 
              between teachers, students, and parents.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group text-lg px-8 py-3">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <button 
                onClick={() => setIsVideoPlaying(true)}
                className="inline-flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition font-semibold"
              >
                <PlayCircle className="w-5 h-5" />
                Watch Demo Video
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-xs font-bold text-indigo-600">
                      {String.fromCharCode(64+i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">500+ happy schools</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Award Winning</p>
                  <p className="text-sm text-gray-600">Best EduTech 2024</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 p-2">
                <div className="bg-white rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <Image 
                    src="/dashboard-preview.jpg" 
                    alt="Dashboard Preview"
                    width={600}
                    height={400}
                    className="rounded-lg w-full"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                  {/* Fallback if image not found */}
                  <div className="bg-gradient-to-br from-indigo-50 to-emerald-50 rounded-lg p-8 text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-gray-600">Interactive Dashboard Preview</p>
                    <p className="text-sm text-gray-400 mt-2">Real-time analytics & reports</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Active Users</p>
                <p className="font-bold text-gray-800">1,284 <span className="text-green-600 text-xs">+12%</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setIsVideoPlaying(false)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl"
            >
              ✕
            </button>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;