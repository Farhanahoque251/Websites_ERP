'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Shield, CreditCard, Smartphone, Globe, ChevronRight } from 'lucide-react';
import toast from 'react-hot-toast';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail) {
      toast.error('Please enter your email');
      return;
    }
    setIsSubscribing(true);
    setTimeout(() => {
      toast.success('Subscribed to newsletter!');
      setNewsletterEmail('');
      setIsSubscribing(false);
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold text-white">
                EduSmart<span className="text-emerald-400">Pro</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Smart solutions for modern education management. Empowering schools with innovative ERP and LMS technology since 2020.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition">
                <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition">
                <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition">
                <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition">
                <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition">
                <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="4" ry="4"/>
                  <circle cx="12" cy="12" r="4"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-indigo-400 text-sm flex items-center gap-1"><ChevronRight className="w-3 h-3" /> About Us</Link></li>
              <li><Link href="/features" className="text-gray-400 hover:text-indigo-400 text-sm flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Features</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-indigo-400 text-sm flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-indigo-400 text-sm flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Support & Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-indigo-400 text-sm flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-indigo-400 text-sm flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Terms & Conditions</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-indigo-400 text-sm flex items-center gap-1"><ChevronRight className="w-3 h-3" /> FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-indigo-400 mt-0.5" />
                <span className="text-gray-400">35/1 Siddheswari Circular Road, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-indigo-400" />
                <span className="text-gray-400">+880 1319-719968</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-indigo-400" />
                <span className="text-gray-400">info@edusmartpro.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span className="text-gray-400">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>

            <div>
              <h4 className="text-white font-medium text-sm mb-2">Subscribe to Newsletter</h4>
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                />
                <button type="submit" disabled={isSubscribing} className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition disabled:opacity-50">
                  <Send className="w-4 h-4 text-white" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Trust Badges Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-white text-sm font-medium">100% Secure</p>
                <p className="text-gray-500 text-xs">SSL Encrypted</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CreditCard className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-white text-sm font-medium">Easy Payment</p>
                <p className="text-gray-500 text-xs">bKash, Nagad, Rocket</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Smartphone className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-white text-sm font-medium">Mobile Ready</p>
                <p className="text-gray-500 text-xs">Access anywhere</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Globe className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-white text-sm font-medium">Cloud Based</p>
                <p className="text-gray-500 text-xs">24/7 Availability</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} EduSmart Pro. All rights reserved. | Developed by IT Data Science Ltd
            </p>
            <div className="flex gap-4">
              <span className="text-xs text-gray-500">bKash</span>
              <span className="text-xs text-gray-500">Nagad</span>
              <span className="text-xs text-gray-500">Rocket</span>
              <span className="text-xs text-gray-500">Visa</span>
              <span className="text-xs text-gray-500">Mastercard</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;