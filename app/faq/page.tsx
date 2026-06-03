'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ChevronDown, ChevronUp, HelpCircle, 
  BookOpen, CreditCard, Shield, Users, 
  MessageCircle, Smartphone, Globe, Clock,
  ArrowRight, Sparkles, FileText, Headphones,
  GraduationCap, DollarSign, Lock, Cloud
} from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestion = (id: number) => {
    setOpenQuestions(prev => 
      prev.includes(id) ? prev.filter(q => q !== id) : [...prev, id]
    );
  };

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'general', name: 'General', icon: BookOpen },
    { id: 'pricing', name: 'Pricing & Billing', icon: DollarSign },
    { id: 'technical', name: 'Technical', icon: Smartphone },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'support', name: 'Support', icon: Headphones },
  ];

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'What is ShikkhaERP?',
      answer: 'ShikkhaERP is a comprehensive school management system designed specifically for Bangladeshi schools. It helps manage student information, attendance, fees, examinations, payroll, and more - all in one cloud-based platform.',
      icon: BookOpen
    },
    {
      id: 2,
      category: 'general',
      question: 'Who can use ShikkhaERP?',
      answer: 'ShikkhaERP is designed for schools, colleges, and educational institutions of all sizes. It serves administrators, teachers, students, and parents with role-based access to relevant information.',
      icon: Users
    },
    {
      id: 3,
      category: 'general',
      question: 'Is ShikkhaERP suitable for small schools?',
      answer: 'Absolutely! We have a Starter plan specifically designed for small schools with up to 500 students. It includes all essential features needed to digitize your school operations.',
      icon: GraduationCap
    },
    {
      id: 4,
      category: 'pricing',
      question: 'How much does ShikkhaERP cost?',
      answer: 'We offer three pricing plans: Starter (৳4,999/month), Professional (৳9,999/month), and Enterprise (Custom pricing). Each plan includes different features and student capacity. Contact our sales team for Enterprise pricing.',
      icon: DollarSign
    },
    {
      id: 5,
      category: 'pricing',
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial for our Professional plan. No credit card required. You can experience all features before making a commitment.',
      icon: Sparkles
    },
    {
      id: 6,
      category: 'pricing',
      question: 'What payment methods do you accept?',
      answer: 'We accept bKash, Nagad, Rocket, credit/debit cards (Visa, Mastercard), and bank transfers. All payments are processed through secure, encrypted gateways.',
      icon: CreditCard
    },
    {
      id: 7,
      category: 'pricing',
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we prorate the charges for the current billing cycle.',
      icon: ArrowRight
    },
    {
      id: 8,
      category: 'technical',
      question: 'Do I need to install any software?',
      answer: 'No installation required! ShikkhaERP is a cloud-based SaaS platform. You can access it from any device with an internet connection using a modern web browser.',
      icon: Cloud
    },
    {
      id: 9,
      category: 'technical',
      question: 'Is there a mobile app?',
      answer: 'Yes, ShikkhaERP is fully responsive on mobile devices. We also offer dedicated mobile apps for parents and teachers on Android and iOS (coming soon).',
      icon: Smartphone
    },
    {
      id: 10,
      category: 'technical',
      question: 'How long does implementation take?',
      answer: 'Implementation typically takes 1-2 weeks, including data migration, setup, and training. For larger institutions, it may take 3-4 weeks. Our team provides full support throughout the process.',
      icon: Clock
    },
    {
      id: 11,
      category: 'security',
      question: 'Is my data secure?',
      answer: 'Absolutely! We use 256-bit SSL encryption, regular automated backups, and enterprise-grade security measures. Your data is hosted on secure cloud servers with 99.9% uptime guarantee.',
      icon: Lock
    },
    {
      id: 12,
      category: 'security',
      question: 'Who owns the data?',
      answer: 'You retain full ownership of all your data. We never sell or share your data with third parties. You can export your data anytime in multiple formats.',
      icon: Shield
    },
    {
      id: 13,
      category: 'security',
      question: 'Are there regular backups?',
      answer: 'Yes, we perform automated daily backups of all data. In case of any issues, we can restore your data from the most recent backup.',
      icon: Cloud
    },
    {
      id: 14,
      category: 'support',
      question: 'What kind of support do you offer?',
      answer: 'We offer email support for all plans, priority phone support for Professional and Enterprise plans, and 24/7 emergency support for Enterprise customers. All plans include access to our knowledge base and video tutorials.',
      icon: Headphones
    },
    {
      id: 15,
      category: 'support',
      question: 'Do you provide training?',
      answer: 'Yes! We provide comprehensive training for administrators, teachers, and staff. Enterprise plans include on-site training. All plans include access to video tutorials and documentation.',
      icon: Users
    },
    {
      id: 16,
      category: 'support',
      question: 'How do I request a demo?',
      answer: 'You can request a free demo by clicking the "Request Demo" button on our website. Our team will contact you within 24 hours to schedule a personalized demo.',
      icon: MessageCircle
    },
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
                <HelpCircle className="w-3 h-3" />
                FAQ
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Find answers to common questions about ShikkhaERP. Can't find what you're looking for? Contact our support team.
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
                placeholder="Search your question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-slate-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-900 text-slate-600 dark:text-slate-300 hover:shadow-md border border-slate-200 dark:border-slate-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">No results found</h3>
                <p className="text-slate-500">Try searching with different keywords</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => toggleQuestion(faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <faq.icon className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="font-semibold text-slate-800 dark:text-white">
                          {faq.question}
                        </span>
                      </div>
                      {openQuestions.includes(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {openQuestions.includes(faq.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-slate-100 dark:border-slate-700"
                        >
                          <div className="px-6 py-5 bg-slate-50 dark:bg-gray-900/50">
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MessageCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3">
              Still Have Questions?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Can't find the answer you're looking for? Our support team is here to help.
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
                href="/request-demo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-slate-700 dark:text-white rounded-xl font-semibold border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all hover:scale-105"
              >
                Request a Demo
                <Sparkles className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-emerald-600">24/7</div>
              <div className="text-sm text-slate-500">Support Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">500+</div>
              <div className="text-sm text-slate-500">Happy Schools</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">&lt;24h</div>
              <div className="text-sm text-slate-500">Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">99.9%</div>
              <div className="text-sm text-slate-500">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}