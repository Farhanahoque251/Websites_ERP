'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Target, Eye, Heart, Users, Trophy, Clock, 
  Award, Shield, Zap, CheckCircle, GraduationCap, Quote,
  User, School, Briefcase
} from 'lucide-react';

export default function About() {
  const [counters, setCounters] = useState({
    schools: 0,
    students: 0,
    teachers: 0,
    years: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { schools: 500, students: 1000, teachers: 50, years: 5 };
      const duration = 2000;
      const step = 20;
      const increments = {
        schools: targets.schools / (duration / step),
        students: targets.students / (duration / step),
        teachers: targets.teachers / (duration / step),
        years: targets.years / (duration / step)
      };
      
      let current = { schools: 0, students: 0, teachers: 0, years: 0 };
      const timer = setInterval(() => {
        current = {
          schools: Math.min(current.schools + increments.schools, targets.schools),
          students: Math.min(current.students + increments.students, targets.students),
          teachers: Math.min(current.teachers + increments.teachers, targets.teachers),
          years: Math.min(current.years + increments.years, targets.years)
        };
        setCounters({ ...current });
        
        if (current.schools >= targets.schools) clearInterval(timer);
      }, step);
    };
    
    animateCounters();
  }, []);

  const values = [
    { icon: Heart, title: 'Passion for Education', desc: 'We genuinely care about improving education quality', color: 'rose' },
    { icon: Zap, title: 'Innovation First', desc: 'Constantly evolving with latest technology', color: 'amber' },
    { icon: Users, title: 'Customer Centric', desc: 'Your success is our success', color: 'indigo' },
    { icon: Shield, title: 'Trust & Transparency', desc: 'Honest communication and reliable solutions', color: 'emerald' },
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', desc: 'Started with a vision to transform education', icon: Briefcase },
    { year: '2021', title: 'First 100 Schools', desc: 'Reached 100 schools within first year', icon: School },
    { year: '2022', title: 'Award Winning', desc: 'Best EduTech Startup Award', icon: Award },
    { year: '2023', title: '1M Students', desc: 'Surpassed 1 million students managed', icon: Users },
    { year: '2024', title: 'National Recognition', desc: 'Recognized by Ministry of Education', icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-300 rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
        
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Transforming Education
                <span className="block text-emerald-300">Through Technology</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                We're on a mission to empower every school in Bangladesh with smart, 
                affordable, and innovative technology solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Counter */}
      <section className="py-16 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <School className="w-7 h-7 text-indigo-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800">
                {Math.floor(counters.schools)}+
              </div>
              <div className="text-gray-500 mt-1">Schools Trust Us</div>
            </div>
            <div className="p-4">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-7 h-7 text-indigo-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800">
                {Math.floor(counters.students / 10)}K+
              </div>
              <div className="text-gray-500 mt-1">Students Managed</div>
            </div>
            <div className="p-4">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-indigo-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800">
                {Math.floor(counters.teachers)}+
              </div>
              <div className="text-gray-500 mt-1">Teachers Using</div>
            </div>
            <div className="p-4">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-indigo-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800">
                {Math.floor(counters.years)}+
              </div>
              <div className="text-gray-500 mt-1">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower educational institutions with intelligent, scalable, and technology-driven 
                solutions that simplify operations, enhance learning experiences, and drive sustainable 
                digital transformation across Bangladesh.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading provider of smart education technology in Bangladesh, transforming 
                traditional schools into fully digital, efficient, and future-ready institutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Building the Future of 
                <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent"> Education Technology</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                IT Data Science Ltd is a forward-thinking technology company dedicated to delivering 
                smart, scalable, and innovative digital solutions for educational institutions across Bangladesh.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, we've grown from a small startup to a trusted partner for over 500 schools, 
                helping them transition from traditional manual processes to fully automated digital systems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">100% Bangladeshi Solution</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">Affordable Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">24/7 Local Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">Free Training Included</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-emerald-50 rounded-2xl p-8"
            >
              <Quote className="w-12 h-12 text-indigo-400 mb-4" />
              <p className="text-xl italic text-gray-700 mb-4">
                "We believe technology should simplify, not complicate. Our platform is built by educators, 
                for educators, understanding the real challenges schools face daily."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">FH</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Farhana Hoque</p>
                  <p className="text-sm text-gray-500">CEO & Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">Our Principles</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Core Values That Drive Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Company Milestones</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A timeline of our growth and achievements since day one
            </p>
          </div>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6 p-4 bg-gray-50 rounded-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-emerald-600 font-semibold">{milestone.year}</p>
                  <h3 className="text-xl font-bold text-gray-800">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us in Transforming Education</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Together, let's build a smarter future for the next generation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Start Your Journey
              </Link>
              <Link href="/contact?type=demo" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
                Request a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}