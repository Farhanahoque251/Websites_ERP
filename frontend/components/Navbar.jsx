'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, GraduationCap, LayoutDashboard, Users, BookOpen, 
  DollarSign, BarChart3, Settings, ChevronDown, User, LogOut,
  Calendar, MessageSquare, Bell, School, CreditCard
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavLinks = [
    { name: 'Home', href: '/', icon: GraduationCap },
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Students', href: '/students', icon: Users },
    { name: 'Teachers', href: '/teachers', icon: Users },
    { name: 'Attendance', href: '/attendance', icon: Calendar },
    { name: 'Pricing', href: '/pricing', icon: CreditCard },
    { name: 'Features', href: '/features', icon: LayoutDashboard },
    { name: 'About', href: '/about', icon: School },
    { name: 'Contact', href: '/contact', icon: MessageSquare },
  ];

  const erpModules = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Students', href: '/students', icon: Users },
    { name: 'Teachers', href: '/teachers', icon: User },
    { name: 'Academics', href: '/academics', icon: BookOpen },
    { name: 'Attendance', href: '/attendance', icon: Calendar },
    { name: 'Fees', href: '/fees', icon: DollarSign },
    { name: 'Reports', href: '/reports', icon: BarChart3 },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold">
                <span className="text-indigo-600">EduSmart</span>
                <span className="text-emerald-600">Pro</span>
              </span>
              <span className="hidden md:inline-block text-xs text-gray-400 ml-1">ERP</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm ${
                  isActive(link.href)
                    ? 'bg-indigo-50 text-indigo-600 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </Link>
            ))}
            
            <Link href="/login" className="ml-2 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition">
              Login
            </Link>
            
            <Link href="/contact?type=demo" className="ml-2 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-5 py-2 rounded-lg hover:shadow-lg transition">
              Request Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t max-h-[80vh] overflow-y-auto">
            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 py-3 px-4 rounded-lg ${
                  isActive(link.href)
                    ? 'bg-indigo-50 text-indigo-600 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <link.icon className="w-5 h-5" />
                {link.name}
              </Link>
            ))}
            
            <div className="border-t my-2 pt-2">
              <p className="text-xs text-gray-400 px-4 py-2">ERP MODULES</p>
              {erpModules.map((module) => (
                <Link
                  key={module.name}
                  href={module.href}
                  className="flex items-center gap-3 py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <module.icon className="w-4 h-4" />
                  {module.name}
                </Link>
              ))}
            </div>

            <div className="border-t my-2 pt-4 px-4 space-y-2">
              <Link href="/login" className="block border border-indigo-600 text-indigo-600 text-center py-2 rounded-lg" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link href="/contact?type=demo" className="block bg-gradient-to-r from-indigo-600 to-emerald-600 text-white text-center py-2 rounded-lg" onClick={() => setIsOpen(false)}>
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 border-b">
        <div className="container-custom py-2 text-center">
          <p className="text-sm text-gray-600">
            🎓 Special Launch Offer: Free setup for first 50 schools! 
            <Link href="/contact" className="text-indigo-600 font-semibold ml-2">Claim Offer →</Link>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;