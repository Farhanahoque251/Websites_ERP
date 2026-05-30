'use client';
import { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, MessageCircle, 
  Headphones, FileText, Users, Calendar, CheckCircle,
  Facebook, Twitter, Linkedin, Youtube, Instagram,
  ArrowRight, Sparkles, Award, Shield, Globe
} from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^(\+88)?01[3-9]\d{8}$/.test(phone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'email' && value && !validateEmail(value)) {
      setErrors(prev => ({ ...prev, email: 'Invalid email format' }));
    } else if (name === 'email') {
      setErrors(prev => ({ ...prev, email: '' }));
    }
    
    if (name === 'phone' && value && !validatePhone(value)) {
      setErrors(prev => ({ ...prev, phone: 'Invalid Bangladesh number' }));
    } else if (name === 'phone') {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    else if (!validatePhone(formData.phone)) newErrors.phone = 'Invalid Bangladesh number';
    if (!formData.message) newErrors.message = 'Message is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Please fix the errors before submitting');
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
      toast.success('Message sent! We will contact you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' });
      setErrors({});
      setLoading(false);
    }, 1500);
  };

  const contactMethods = [
    { category: "General Inquiries", icon: Mail, info: "info@shikkhaerp.com", action: "mailto:info@shikkhaerp.com", color: "emerald", description: "General questions and information" },
    { category: "Sales & Demos", icon: Headphones, info: "sales@shikkhaerp.com", action: "mailto:sales@shikkhaerp.com", color: "blue", description: "Get a personalized demo" },
    { category: "Technical Support", icon: FileText, info: "support@shikkhaerp.com", action: "mailto:support@shikkhaerp.com", color: "purple", description: "24/7 technical assistance" },
    { category: "WhatsApp", icon: MessageCircle, info: "+880 1319-719968", action: "https://wa.me/8801319719968", color: "green", description: "Instant messaging" },
  ];

  const subjects = [
    { value: "general", label: "General Inquiry" },
    { value: "demo", label: "Request a Demo" },
    { value: "support", label: "Technical Support" },
    { value: "sales", label: "Sales & Pricing" },
    { value: "partnership", label: "Partnership Opportunity" },
  ];

  const stats = [
    { value: "24h", label: "Response Time", icon: Clock },
    { value: "500+", label: "Happy Schools", icon: Users },
    { value: "99.9%", label: "Satisfaction", icon: Award },
    { value: "24/7", label: "Support", icon: Headphones },
  ];

  const socialIcons = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
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
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Let's Talk About{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Your School
                </span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Have questions about ShikkhaERP? We're here to help you transform your school management.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm">
                  <Clock className="w-4 h-4 text-emerald-400" /> Avg response: &lt; 24h
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm">
                  <Users className="w-4 h-4 text-emerald-400" /> 500+ schools trust us
                </div>
              </div>
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

      {/* Main Contact Section */}
      <section className="py-20 bg-slate-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-emerald-600 to-blue-600 px-6 py-5">
                <h2 className="text-xl font-bold text-white">Send us a message</h2>
                <p className="text-white/80 text-sm mt-1">Fill out the form and we'll get back to you soon</p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 transition ${
                        errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 transition ${
                        errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                      }`}
                      placeholder="john@school.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 transition ${
                        errors.phone ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                      }`}
                      placeholder="+880 1XXX XXXXXX"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  
                  {/* Subject Field */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800"
                    >
                      {subjects.map(s => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 transition ${
                      errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                    }`}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                
                <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                  By submitting, you agree to our <a href="/privacy" className="text-emerald-600 hover:underline">Privacy Policy</a>
                </p>
              </form>
            </motion.div>

            {/* Right Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Contact Methods Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, idx) => (
                  <a
                    key={idx}
                    href={method.action}
                    target={method.category === "WhatsApp" ? "_blank" : "_self"}
                    rel={method.category === "WhatsApp" ? "noopener noreferrer" : ""}
                    className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-700 group hover:scale-105"
                  >
                    <div className={`w-10 h-10 bg-${method.color}-50 dark:bg-${method.color}-900/30 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition`}>
                      <method.icon className={`w-5 h-5 text-${method.color}-600`} />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{method.category}</p>
                    <p className="font-medium text-slate-800 dark:text-white text-sm">{method.info}</p>
                    <p className="text-xs text-slate-400 mt-1">{method.description}</p>
                  </a>
                ))}
              </div>

              {/* Office Location Card */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-slate-100 dark:border-slate-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-white mb-1">Visit Our Office</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      35/1 Siddheswari Circular Road, <br />
                      Dhaka - 1000, Bangladesh
                    </p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 text-sm mt-2 inline-block hover:underline">
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Support Hours */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-semibold text-slate-800 dark:text-white">Support Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">Monday - Friday</span>
                    <span className="font-medium text-slate-800 dark:text-white text-sm">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">Saturday</span>
                    <span className="font-medium text-slate-800 dark:text-white text-sm">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">Emergency Support</span>
                    <span className="font-medium text-emerald-600 text-sm">24/7 Available</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-slate-100 dark:border-slate-700">
                <h3 className="font-semibold text-slate-800 dark:text-white mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-3">
                  {socialIcons.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-xl p-4 text-center border border-emerald-100 dark:border-emerald-800/30">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Trusted & Secure</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Your data is protected with enterprise-grade security
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Can't find what you're looking for? Check our FAQ page.
            </p>
            <a href="/faq" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium">
              View All FAQs
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}