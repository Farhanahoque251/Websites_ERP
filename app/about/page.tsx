'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { 
  Target, Eye, Heart, Users, Trophy, Clock, 
  Award, Shield, Zap, Globe, CheckCircle, Star,
  TrendingUp, BookOpen, GraduationCap, Quote,
  ArrowRight, Calendar, Briefcase, Coffee,
  User, School, Building, Rocket, Sparkles
} from 'lucide-react';

export default function About() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const stats = [
    { value: '500+', label: 'Schools Trust Us', icon: School },
    { value: '1M+', label: 'Students Managed', icon: Users },
    { value: '50K+', label: 'Teachers Using', icon: GraduationCap },
    { value: '5+', label: 'Years of Excellence', icon: Award },
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', desc: 'Started with a vision to transform education in Bangladesh', icon: Briefcase },
    { year: '2021', title: 'First 100 Schools', desc: 'Reached 100 schools within first year of operation', icon: School },
    { year: '2022', title: 'Award Winning', desc: 'Received "Best EduTech Startup" award', icon: Award },
    { year: '2023', title: '1M Students', desc: 'Surpassed 1 million students managed across Bangladesh', icon: Users },
    { year: '2024', title: 'National Recognition', desc: 'Recognized by Ministry of Education for innovation', icon: Trophy },
  ];

  const values = [
    { icon: Heart, title: 'Passion for Education', desc: 'We genuinely care about improving education quality in Bangladesh' },
    { icon: Zap, title: 'Innovation First', desc: 'Constantly evolving with latest technology and best practices' },
    { icon: Users, title: 'Customer Centric', desc: 'Your success is our success. We\'re here for you 24/7' },
    { icon: Shield, title: 'Trust & Transparency', desc: 'Honest communication and reliable solutions you can depend on' },
    { icon: Award, title: 'Continuous Learning', desc: 'We never stop improving and learning from feedback' },
    { icon: Globe, title: 'Community First', desc: 'Building a better educational ecosystem together' },
  ];

  const teamMembers = [
    { name: 'Farhana Hoque', role: 'CEO & Founder', bio: '15+ years in EdTech industry', initial: 'FH' },
    { name: 'Md. Shafique Hassan', role: 'Chairman', bio: 'Former Advisor - Ministry of Education', initial: 'SH' },
    { name: 'Rahman Ahmed', role: 'CTO', bio: '20+ years in software architecture', initial: 'RA' },
    { name: 'Nasrin Akter', role: 'Head of Operations', bio: '12+ years education management', initial: 'NA' },
  ];

  const achievements = [
    { icon: Award, title: 'Best EduTech Startup', year: '2022', description: 'Recognized for innovation in education technology' },
    { icon: Trophy, title: 'Top 50 Women in Tech', year: '2024', description: 'CEO recognized among top women leaders' },
    { icon: Shield, title: 'ISO Certified', year: '2023', description: 'International quality management standard' },
    { icon: Globe, title: 'National Award', year: '2024', description: 'Ministry of Education recognition' },
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
                <Sparkles className="w-3 h-3" />
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Transforming Education{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Through Technology
                </span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                We're on a mission to empower every school in Bangladesh with smart, 
                affordable, and innovative technology solutions.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white" className="dark:fill-gray-900"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="p-4 bg-slate-50 dark:bg-gray-800 rounded-2xl"
              >
                <div className="w-12 h-12 mx-auto bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
                  {isStatsInView ? stat.value : '0'}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-slate-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To empower educational institutions with intelligent, scalable, and technology-driven 
                solutions that simplify operations, enhance learning experiences, and drive sustainable 
                digital transformation across Bangladesh.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To become the leading provider of smart education technology in Bangladesh, transforming 
                traditional schools into fully digital, efficient, and future-ready institutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm uppercase tracking-wide">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-800 dark:text-white">
                Building the Future of{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Education Technology
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                IT Data Science Ltd is a forward-thinking technology company dedicated to delivering 
                smart, scalable, and innovative digital solutions for educational institutions across Bangladesh.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Founded in 2020, we've grown from a small startup to a trusted partner for over 500 schools, 
                helping them transition from traditional manual processes to fully automated digital systems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">100% Bangladeshi Solution</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Affordable Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">24/7 Local Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Free Training Included</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl p-8"
            >
              <Quote className="w-12 h-12 text-emerald-400 mb-4" />
              <p className="text-xl italic text-slate-700 dark:text-slate-300 mb-4">
                "We believe technology should simplify, not complicate. Our platform is built by educators, 
                for educators, understanding the real challenges schools face daily."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">FH</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white">Farhana Hoque</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">CEO & Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-slate-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm uppercase tracking-wide">Our Principles</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-800 dark:text-white">
              Core Values That Drive Us
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center hover:shadow-xl transition"
              >
                <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm uppercase tracking-wide">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-800 dark:text-white">
              Company Milestones
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A timeline of our growth and achievements since day one
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 md:gap-6 bg-slate-50 dark:bg-gray-800 rounded-2xl p-5 hover:shadow-lg transition"
              >
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <milestone.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <span className="text-emerald-600 font-bold text-sm">{milestone.year}</span>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-1">{milestone.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-slate-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm uppercase tracking-wide">Achievements</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-800 dark:text-white">
              Awards & Recognition
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We're proud to be recognized for our innovation and impact
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center hover:shadow-xl transition"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">{achievement.title}</h3>
                <p className="text-emerald-600 text-sm font-medium mt-1">{achievement.year}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Leadership
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Passionate experts driving innovation in education technology
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-xl transition"
              >
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">{member.initial}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">{member.name}</h3>
                <p className="text-emerald-600 text-sm mt-1">{member.role}</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/team" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold">
              View Full Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold px-4">
              Join Us in Transforming Education
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
              Together, let's build a smarter future for the next generation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact" className="bg-white text-emerald-700 hover:bg-slate-100 font-semibold py-3 px-8 rounded-xl transition duration-300 inline-block shadow-lg">
                Start Your Journey
              </Link>
              <Link href="/contact?type=demo" className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 font-semibold py-3 px-8 rounded-xl transition duration-300 inline-block">
                Request a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}