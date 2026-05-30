'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About Us', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const navbarBg = '#1e3a8a';

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: navbarBg,
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.15)' : '0 2px 10px rgba(0,0,0,0.1)',
        zIndex: 1000,
        padding: '16px 0',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 24px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{
              width: '42px',
              height: '42px',
              background: 'white',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}>
              <GraduationCap size={24} color="#1e3a8a" />
            </div>
            <div>
              <span style={{ fontWeight: 800, fontSize: '22px', color: 'white' }}>
                Shikkha<span style={{ color: '#60a5fa' }}>ERP</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                style={{
                  textDecoration: 'none',
                  color: pathname === link.path ? 'white' : '#c7d2fe',
                  fontWeight: pathname === link.path ? 600 : 500,
                  fontSize: '15px',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.color = pathname === link.path ? 'white' : '#c7d2fe'}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              style={{
                background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                color: 'white',
                padding: '10px 24px',
                borderRadius: '30px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 10px rgba(245, 158, 11, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(245, 158, 11, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(245, 158, 11, 0.3)';
              }}
            >
              Get Started →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'none',
              '@media (max-width: 768px)': { display: 'block' }
            }}
            className="md:hidden block"
          >
            {mobileMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '74px',
          left: 0,
          right: 0,
          background: '#1e3a8a',
          padding: '24px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          zIndex: 999,
          borderBottom: '1px solid #2563eb'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: pathname === link.path ? 'white' : '#c7d2fe',
                  fontWeight: 500,
                  padding: '12px 0',
                  borderBottom: '1px solid #2563eb',
                  fontSize: '16px'
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                color: 'white',
                padding: '14px 24px',
                borderRadius: '30px',
                fontWeight: 600,
                textDecoration: 'none',
                textAlign: 'center',
                marginTop: '8px'
              }}
            >
              Get Started →
            </Link>
          </div>
        </div>
      )}

      {/* Spacer to push content below fixed navbar */}
      <div style={{ height: '80px' }}></div>
    </>
  );
}