'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Award, Users, ThumbsUp, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function TestimonialsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Md. Rafiqul Islam',
      position: 'Principal',
      school: 'Ideal School & College, Dhaka',
      content: 'ShikkhaERP has revolutionized our school management. The attendance and fee management features have saved us countless hours of manual work. Our parents love the real-time updates and transparency.',
      rating: 5,
      date: 'March 2024',
      image: '👨‍🏫',
      category: 'School Leader'
    },
    {
      id: 2,
      name: 'Mrs. Sharmin Akter',
      position: 'Administrator',
      school: 'Sunbeams School, Chittagong',
      content: 'The parent portal is amazing! Parents can now track their children\'s progress in real-time. The SMS notification system keeps everyone informed about important updates and events.',
      rating: 5,
      date: 'February 2024',
      image: '👩‍💼',
      category: 'Administrator'
    },
    {
      id: 3,
      name: 'Prof. Abdul Mannan',
      position: 'Chairman',
      school: 'Scholars International School',
      content: 'Excellent support team and robust features. The payroll management alone has made our HR department much more efficient. Highly recommended for any educational institution.',
      rating: 5,
      date: 'January 2024',
      image: '👨‍🎓',
      category: 'Board Member'
    },
    {
      id: 4,
      name: 'Dr. Farhana Zaman',
      position: 'Academic Director',
      school: 'Oxford International School',
      content: 'The examination and result management system is exactly what we needed. Report card generation is now automatic and error-free. It has significantly reduced our workload.',
      rating: 5,
      date: 'December 2023',
      image: '👩‍🏫',
      category: 'Academic Director'
    },
    {
      id: 5,
      name: 'Mr. Kamal Hossain',
      position: 'IT Director',
      school: 'Maple Leaf International School',
      content: 'The technical support team is outstanding. Any issues we face are resolved within hours. The system is reliable, secure, and user-friendly for all staff members.',
      rating: 5,
      date: 'November 2023',
      image: '👨‍💻',
      category: 'IT Director'
    },
    {
      id: 6,
      name: 'Ms. Tahmina Begum',
      position: 'Parent Representative',
      school: 'DPS STS School Dhaka',
      content: 'As a parent, I love the transparency ShikkhaERP provides. I can check my child\'s attendance, grades, and fee status anytime. The mobile app is very convenient.',
      rating: 5,
      date: 'October 2023',
      image: '👩‍👧',
      category: 'Parent'
    },
  ];

  const stats = [
    { value: '98%', label: 'Customer Satisfaction', icon: ThumbsUp },
    { value: '500+', label: 'Happy Schools', icon: Users },
    { value: '4.9/5', label: 'Average Rating', icon: Star },
    { value: '24/7', label: 'Support Available', icon: Calendar },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
                <Star className="w-3 h-3" />
                Testimonials
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                What Our{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Customers Say
                </span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Trusted by 500+ schools across Bangladesh. Read what school leaders and parents have to say about ShikkhaERP.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4"
              >
                <div className="w-12 h-12 mx-auto bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-slate-800 dark:text-white">{stat.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/10 dark:to-blue-900/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Main Testimonial Card */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-emerald-600 to-blue-600 px-6 py-4">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <Quote className="w-10 h-10 text-emerald-200 dark:text-emerald-800 mb-4" />
                  <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    "{testimonials[activeIndex].content}"
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-2xl">
                      {testimonials[activeIndex].image}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-lg">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-sm text-emerald-600">{testimonials[activeIndex].position}</p>
                      <p className="text-xs text-slate-500">{testimonials[activeIndex].school}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition"
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? 'w-8 bg-emerald-600' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3">
              What Our Customers Say
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Read real stories from school leaders who trust ShikkhaERP
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  "{testimonial.content.substring(0, 120)}..."
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-emerald-600">{testimonial.position}</p>
                    <p className="text-xs text-slate-500">{testimonial.school}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-slate-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3">
              Video Testimonials
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Hear from our customers in their own words
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-br from-emerald-600 to-blue-600 p-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍🏫</span>
                </div>
                <h3 className="text-white font-bold text-lg">Md. Rafiqul Islam</h3>
                <p className="text-white/80 text-sm">Principal, Ideal School & College</p>
              </div>
              <div className="p-6">
                <p className="text-slate-600 dark:text-slate-300 text-center">
                  "ShikkhaERP has transformed how we manage our school. Highly recommended!"
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-br from-emerald-600 to-blue-600 p-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👩‍💼</span>
                </div>
                <h3 className="text-white font-bold text-lg">Mrs. Sharmin Akter</h3>
                <p className="text-white/80 text-sm">Administrator, Sunbeams School</p>
              </div>
              <div className="p-6">
                <p className="text-slate-600 dark:text-slate-300 text-center">
                  "The parent portal has been a game-changer for communication with parents."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="container-custom text-center">
          <Award className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Join 500+ Happy Schools
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Experience the ShikkhaERP difference. Start your free trial today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/request-demo"
              className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}