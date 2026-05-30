'use client';
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Users, Calendar, BookOpen, DollarSign, BarChart3, 
  MessageSquare, Shield, Cloud, Headphones, Star,
  ArrowRight, CheckCircle, Award, TrendingUp, Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Users, title: 'Student Management', description: 'Centralized student records and profiles', color: 'indigo' },
  { icon: Calendar, title: 'Attendance Tracking', description: 'Real-time attendance monitoring', color: 'emerald' },
  { icon: BookOpen, title: 'Exam Management', description: 'Online exams and automated grading', color: 'blue' },
  { icon: DollarSign, title: 'Fee Management', description: 'Easy fee collection and tracking', color: 'green' },
  { icon: BarChart3, title: 'Analytics', description: 'Data-driven insights and reports', color: 'purple' },
  { icon: MessageSquare, title: 'Communication', description: 'Real-time notifications and updates', color: 'orange' },
];

const testimonials = [
  {
    name: 'Dr. Md. Shahidul Islam',
    role: 'Principal, Ideal School & College',
    content: 'EduSmart Pro has transformed our school management. Attendance and fee collection are now fully automated.',
    rating: 5,
    image: '/avatar1.jpg'
  },
  {
    name: 'Mrs. Nasrin Akter',
    role: 'Administrator, Greenfield School',
    content: 'The best investment we made for our school. Parent communication has improved dramatically.',
    rating: 5,
    image: '/avatar2.jpg'
  },
  {
    name: 'Mr. Kamal Hossain',
    role: 'IT Director, Sunshine School',
    content: 'Excellent platform with amazing support. The team is very responsive and helpful.',
    rating: 5,
    image: '/avatar3.jpg'
  },
];

const stats = [
  { icon: Users, value: '500+', label: 'Schools Using', color: 'indigo' },
  { icon: Users, value: '1M+', label: 'Students Managed', color: 'emerald' },
  { icon: Award, value: '50K+', label: 'Teachers', color: 'blue' },
  { icon: TrendingUp, value: '99.9%', label: 'Uptime', color: 'purple' },
];

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-${stat.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                Modern Schools
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to manage your school efficiently in one place
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className={`w-14 h-14 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                  EduSmart Pro?
                </span>
              </h2>
              <div className="space-y-4">
                {[
                  '100% Cloud-Based Platform',
                  'Designed for Bangladeshi Schools',
                  '24/7 Dedicated Support',
                  'Free Training & Onboarding',
                  'Regular Updates & Improvements',
                  'Affordable Pricing Plans'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/features" className="inline-flex items-center gap-2 mt-8 text-indigo-600 font-semibold hover:gap-3 transition">
                Explore All Features <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-emerald-50 rounded-2xl p-8"
            >
              <div className="grid grid-cols-2 gap-4">
                {[Zap, Shield, Cloud, Headphones].map((Icon, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 text-center">
                    <Icon className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold">Feature {i+1}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Schools Say About Us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted by educational institutions across Bangladesh
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your School?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join 500+ schools already using EduSmart Pro to streamline their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300 inline-block shadow-lg">
                Start Free Consultation
              </Link>
              <Link href="/contact?type=demo" className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-semibold py-3 px-8 rounded-lg transition duration-300 inline-block">
                Request Live Demo
              </Link>
            </div>
            <p className="mt-6 text-sm opacity-75">
              No credit card required | Free 14-day trial
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}