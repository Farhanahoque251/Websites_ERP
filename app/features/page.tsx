'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FeaturesPage() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const coreFeatures = [
    { id: 1, icon: '📝', title: 'Student Admission Management', desc: 'Manage student applications, registrations, approvals, and enrollment processes within a centralized system.', color: '#2563eb' },
    { id: 2, icon: '👨‍🎓', title: 'Student Information Management', desc: 'Store and organize student profiles, academic records, and personal information securely.', color: '#0891b2' },
    { id: 3, icon: '📚', title: 'Class and Section Management', desc: 'Create, organize, and manage classes, sections, and student allocations efficiently.', color: '#10b981' },
    { id: 4, icon: '📅', title: 'Academic Session Management', desc: 'Configure and manage academic years, semesters, and school session activities.', color: '#f59e0b' },
    { id: 5, icon: '📖', title: 'Subject Management', desc: 'Create, assign, and organize subjects according to academic and class structures.', color: '#ef4444' },
    { id: 6, icon: '⏰', title: 'Class Routine Management', desc: 'Generate and manage class schedules, subjects, teachers, and time allocations.', color: '#8b5cf6' },
    { id: 7, icon: '👆', title: 'Attendance Management', desc: 'Track and monitor daily student attendance records with automated reporting features.', color: '#ec4899' },
    { id: 8, icon: '👨‍🏫', title: 'Teacher Management', desc: 'Manage teacher profiles, qualifications, responsibilities, and academic assignments efficiently.', color: '#14b8a6' },
    { id: 9, icon: '👩‍💼', title: 'Staff Management', desc: 'Maintain employee information, responsibilities, roles, and administrative staff records.', color: '#6366f1' },
    { id: 10, icon: '💰', title: 'Payroll Management', desc: 'Automate salary calculations, payments, deductions, and payroll processing activities efficiently.', color: '#3b82f6' },
    { id: 11, icon: '👨‍👩‍👧', title: 'Parent Portal', desc: 'Provide parents access to student information, attendance, results, and school updates.', color: '#06b6d4' },
    { id: 12, icon: '💳', title: 'Fee Management', desc: 'Manage fee structures, collections, billing, due payments, and financial records efficiently.', color: '#f43f5e' },
    { id: 13, icon: '💻', title: 'Online Payment Integration', desc: 'Enable secure digital payment processing through integrated online payment gateways.', color: '#0ea5e9' },
    { id: 14, icon: '📊', title: 'Accounting Management', desc: 'Manage financial transactions, income, expenses, and accounting operations effectively.', color: '#22c55e' },
    { id: 15, icon: '📝', title: 'Examination Management', desc: 'Create, schedule, and manage examinations with complete assessment processes efficiently.', color: '#eab308' },
    { id: 16, icon: '🏆', title: 'Grade & Result Management', desc: 'Process grades, marks, and generate academic results accurately and efficiently.', color: '#a855f7' },
    { id: 17, icon: '📄', title: 'Report Card Generation', desc: 'Automatically generate customized report cards with grades and performance details.', color: '#ef4444' },
    { id: 18, icon: '📱', title: 'SMS Notification System', desc: 'Send automated notifications, reminders, alerts, and important school announcements instantly.', color: '#14b8a6' },
    { id: 19, icon: '📈', title: 'Dashboard & Analytics', desc: 'Display real-time insights, reports, statistics, and school performance indicators visually.', color: '#2563eb' },
    { id: 20, icon: '🔒', title: 'Role-Based Access Control', desc: 'Restrict system access according to user roles and permission levels securely.', color: '#0891b2' },
  ];

  const featureCategories = [
    { name: 'Student Management', features: [1, 2, 3, 4, 5, 6], icon: '👨‍🎓' },
    { name: 'Academic Management', features: [7, 8, 9, 15, 16, 17], icon: '📚' },
    { name: 'Financial Management', features: [10, 12, 13, 14], icon: '💰' },
    { name: 'Communication & Access', features: [11, 18, 19, 20], icon: '📱' },
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb' }}>
      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a, #0e7490)', color: 'white', padding: '60px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(100px)' }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '8px 20px', borderRadius: '50px', marginBottom: '24px', fontSize: '14px' }}>
            🚀 Complete School Management Solution
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>Everything You Need to</h1>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', color: '#fbbf24' }}>Manage Your School</h1>
          <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            20+ Powerful Modules designed specifically for Bangladeshi schools. Streamline every aspect of school management.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '20px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', textAlign: 'center' }}>
          <div><span style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>20+</span><span style={{ color: '#6b7280', marginLeft: '8px' }}>Core Modules</span></div>
          <div><span style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>500+</span><span style={{ color: '#6b7280', marginLeft: '8px' }}>Schools Trust Us</span></div>
          <div><span style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>250K+</span><span style={{ color: '#6b7280', marginLeft: '8px' }}>Students Managed</span></div>
          <div><span style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>24/7</span><span style={{ color: '#6b7280', marginLeft: '8px' }}>Support Available</span></div>
        </div>
      </div>

      {/* All Features Grid */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', background: 'linear-gradient(135deg, #dbeafe, #cffafe)', color: '#2563eb', padding: '6px 16px', borderRadius: '50px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>
            All Features
          </span>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px', color: '#1f2937' }}>Complete Feature List</h2>
          <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            Everything you need to run your school efficiently in one powerful platform
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '24px' }}>
          {coreFeatures.map((feature) => (
            <div
              key={feature.id}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                transform: hoveredFeature === feature.id ? 'translateY(-5px)' : 'translateY(0)',
                boxShadow: hoveredFeature === feature.id ? '0 20px 30px -12px rgba(0,0,0,0.15)' : '0 1px 3px rgba(0,0,0,0.05)',
                cursor: 'pointer'
              }}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  boxShadow: `0 4px 10px ${feature.color}30`
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937' }}>{feature.title}</h3>
              </div>
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.5, marginLeft: '66px' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Category Sections */}
      {featureCategories.map((category, catIndex) => (
        <div key={catIndex} style={{ background: catIndex % 2 === 0 ? 'white' : '#f9fafb', padding: '60px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{category.icon}</div>
              <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px', color: '#1f2937' }}>{category.name}</h2>
              <div style={{ width: '80px', height: '4px', background: 'linear-gradient(135deg, #2563eb, #0891b2)', margin: '0 auto', borderRadius: '2px' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
              {coreFeatures.filter(f => category.features.includes(f.id)).map((feature) => (
                <div key={feature.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '20px', background: catIndex % 2 === 0 ? '#f9fafb' : 'white', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
                  <div style={{ fontSize: '28px' }}>{feature.icon}</div>
                  <div>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '8px' }}>{feature.title}</h3>
                    <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.5 }}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* CTA Section */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a, #0e7490)', padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>Ready to Transform Your School?</h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '32px' }}>
            Join 500+ schools in Bangladesh using ShikkhaERP to streamline their operations
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/request-demo" style={{ background: 'white', color: '#1e3a8a', padding: '14px 36px', borderRadius: '40px', fontWeight: 'bold', textDecoration: 'none' }}>Start Free Trial →</Link>
            <Link href="/pricing" style={{ border: '2px solid white', color: 'white', padding: '14px 36px', borderRadius: '40px', fontWeight: 'bold', textDecoration: 'none' }}>View Pricing</Link>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px' }}>Feature Comparison</h2>
          <p style={{ fontSize: '18px', color: '#6b7280' }}>See what's included in each plan</p>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <thead>
              <tr style={{ background: '#f9fafb', borderBottom: '2px solid #e5e7eb' }}>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold' }}>Feature</th>
                <th style={{ padding: '16px', textAlign: 'center', fontWeight: 'bold' }}>Starter</th>
                <th style={{ padding: '16px', textAlign: 'center', fontWeight: 'bold', background: '#eff6ff' }}>Professional</th>
                <th style={{ padding: '16px', textAlign: 'center', fontWeight: 'bold' }}>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {coreFeatures.slice(0, 12).map((feature, idx) => (
                <tr key={feature.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 500 }}>{feature.icon} {feature.title}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', color: '#10b981' }}>{idx < 6 ? '✓' : '—'}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', color: '#10b981', background: '#eff6ff' }}>✓</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', color: '#10b981' }}>✓</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}