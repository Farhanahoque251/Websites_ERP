'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { navigationLinks } from '@/config/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { Icon: FaFacebookF, color: '#1877f2', url: 'https://facebook.com/shikkhaerp', name: 'Facebook' },
    { Icon: FaTwitter, color: '#1da1f2', url: 'https://twitter.com/shikkhaerp', name: 'Twitter' },
    { Icon: FaLinkedinIn, color: '#0077b5', url: 'https://linkedin.com/company/shikkhaerp', name: 'LinkedIn' },
    { Icon: FaYoutube, color: '#ff0000', url: 'https://youtube.com/@shikkhaerp', name: 'YouTube' },
    { Icon: FaInstagram, color: '#e4405f', url: 'https://instagram.com/shikkhaerp', name: 'Instagram' },
  ];

  const paymentMethods = [
    { name: 'bKash', bgColor: '#e2136e', textColor: 'white' },
    { name: 'Nagad', bgColor: '#f58020', textColor: 'white' },
    { name: 'Rocket', bgColor: '#00a651', textColor: 'white' },
    { name: 'VISA', bgColor: '#1a1f71', textColor: 'white' },
    { name: 'Mastercard', bgColor: '#eb001b', textColor: 'white' },
  ];

  return (
    <footer style={{ background: '#1e3a8a', color: '#c7d2fe', padding: '64px 0 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px',
          marginBottom: '48px'
        }}>
          
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'white',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a' }}>SE</span>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '22px', color: 'white' }}>Shikkha<span style={{ color: '#60a5fa' }}>ERP</span></div>
                <div style={{ fontSize: '11px', color: '#93c5fd' }}>Smart School Management</div>
              </div>
            </div>
            <p style={{ lineHeight: 1.6, fontSize: '14px', marginBottom: '24px' }}>
              Smart solutions for modern education management. Empowering schools with innovative ERP and LMS technology since 2024.
            </p>
            
            {/* Social Media Icons with Proper Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    background: social.color,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = `0 5px 15px ${social.color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <social.Icon style={{ color: 'white', fontSize: '18px' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '24px', color: 'white' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px' }}><Link href="/about" style={{ color: '#c7d2fe', textDecoration: 'none', fontSize: '14px' }}>About Us</Link></li>
              <li style={{ marginBottom: '12px' }}><Link href="/features" style={{ color: '#c7d2fe', textDecoration: 'none', fontSize: '14px' }}>Features</Link></li>
              <li style={{ marginBottom: '12px' }}><Link href="/services" style={{ color: '#c7d2fe', textDecoration: 'none', fontSize: '14px' }}>Services</Link></li>
              <li><Link href="/contact" style={{ color: '#c7d2fe', textDecoration: 'none', fontSize: '14px' }}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '24px', color: 'white' }}>Support</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px' }}><Link href="/privacy" style={{ color: '#c7d2fe', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</Link></li>
              <li style={{ marginBottom: '12px' }}><Link href="/terms" style={{ color: '#c7d2fe', textDecoration: 'none', fontSize: '14px' }}>Terms & Conditions</Link></li>
              <li><Link href="/faq" style={{ color: '#c7d2fe', textDecoration: 'none', fontSize: '14px' }}>FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '24px', color: 'white' }}>Contact Info</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '16px', display: 'flex', gap: '12px', fontSize: '14px' }}>
                <span>📍</span> 35/1 Siddheswari Circular Road, Dhaka, Bangladesh
              </li>
              <li style={{ marginBottom: '16px', display: 'flex', gap: '12px', fontSize: '14px' }}>
                <span>📞</span> +880 1319-719968
              </li>
              <li style={{ marginBottom: '16px', display: 'flex', gap: '12px', fontSize: '14px' }}>
                <span>📧</span> info@shikkhaerp.com
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '14px' }}>
                <span>📅</span> Mon-Fri: 9AM - 6PM
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          padding: '24px 0',
          borderTop: '1px solid #2563eb',
          borderBottom: '1px solid #2563eb',
          marginBottom: '32px'
        }}>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px' }}>🔒</span>
              <span style={{ fontSize: '13px' }}>100% Secure SSL Encrypted</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px' }}>💳</span>
              <span style={{ fontSize: '13px' }}>Easy Payment</span>
              <span style={{ fontSize: '12px', color: '#93c5fd' }}>bKash, Nagad, Rocket</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px' }}>📱</span>
              <span style={{ fontSize: '13px' }}>Mobile Ready</span>
              <span style={{ fontSize: '12px', color: '#93c5fd' }}>Access anywhere</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px' }}>☁️</span>
              <span style={{ fontSize: '13px' }}>Cloud Based</span>
              <span style={{ fontSize: '12px', color: '#93c5fd' }}>24/7 Availability</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontSize: '13px', marginBottom: '16px', color: '#93c5fd' }}>Easy Payment</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {paymentMethods.map((method, index) => (
              <span
                key={index}
                style={{
                  background: method.bgColor,
                  padding: '8px 24px',
                  borderRadius: '30px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: method.textColor,
                  letterSpacing: '0.5px'
                }}
              >
                {method.name}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div style={{ textAlign: 'center', paddingTop: '16px', borderTop: '1px solid #2563eb' }}>
          <p style={{ fontSize: '13px', color: '#93c5fd' }}>
            © {currentYear} ShikkhaERP. All rights reserved. | Developed by ShikkhaERP Team
          </p>
        </div>
      </div>
    </footer>
  );
}