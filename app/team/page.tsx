'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TeamPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const leadershipTeam = [
    { id: 1, name: 'Md. Rafiqul Islam', position: 'CEO & Founder', bio: '20+ years of experience in educational technology and school management.', image: '👨‍💼', email: 'rafiq@shikkhaerp.com' },
    { id: 2, name: 'Sharmin Akter', position: 'Chief Technology Officer', bio: 'Expert in cloud architecture and scalable ERP solutions.', image: '👩‍💻', email: 'sharmin@shikkhaerp.com' },
    { id: 3, name: 'Abdul Mannan', position: 'Head of Operations', bio: 'Former school principal with deep understanding of school management.', image: '👨‍🏫', email: 'mannan@shikkhaerp.com' },
  ];

  const teamMembers = [
    { id: 4, name: 'Farhana Zaman', position: 'Product Manager', bio: 'Passionate about creating user-friendly solutions for educators.', image: '👩‍🎓', email: 'farhana@shikkhaerp.com' },
    { id: 5, name: 'Kamal Hossain', position: 'Lead Developer', bio: 'Full-stack developer specializing in school management systems.', image: '👨‍💻', email: 'kamal@shikkhaerp.com' },
    { id: 6, name: 'Nadia Sultana', position: 'Customer Support Lead', bio: 'Dedicated to providing exceptional support to our schools.', image: '👩‍💼', email: 'nadia@shikkhaerp.com' },
    { id: 7, name: 'Rakib Hasan', position: 'UI/UX Designer', bio: 'Creates intuitive and beautiful interfaces.', image: '🎨', email: 'rakib@shikkhaerp.com' },
    { id: 8, name: 'Tahmina Begum', position: 'Quality Assurance Lead', bio: 'Ensures our software meets the highest quality standards.', image: '🔍', email: 'tahmina@shikkhaerp.com' },
    { id: 9, name: 'Shahidul Islam', position: 'Sales Director', bio: 'Helps schools find the perfect solution for their needs.', image: '📈', email: 'shahidul@shikkhaerp.com' },
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb' }}>
      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a, #0e7490)', color: 'white', padding: '60px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>Meet Our Team</h1>
          <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.6 }}>Passionate professionals dedicated to transforming school management in Bangladesh</p>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px' }}>
        {/* Leadership Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>Executive Leadership</h2>
          <p style={{ fontSize: '18px', color: '#6b7280' }}>Meet the visionaries behind ShikkhaERP</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', marginBottom: '80px' }}>
          {leadershipTeam.map((member) => (
            <div
              key={member.id}
              style={{
                background: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: hoveredId === member.id ? '0 20px 40px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                transform: hoveredId === member.id ? 'translateY(-8px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div style={{ background: 'linear-gradient(135deg, #2563eb, #0891b2)', padding: '40px', textAlign: 'center' }}>
                <div style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px' }}>
                  {member.image}
                </div>
              </div>
              <div style={{ padding: '32px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>{member.name}</h3>
                <p style={{ color: '#2563eb', fontWeight: '600', marginBottom: '12px' }}>{member.position}</p>
                <p style={{ color: '#6b7280', marginBottom: '16px', lineHeight: 1.6 }}>{member.bio}</p>
                <p style={{ color: '#9ca3af', fontSize: '13px' }}>{member.email}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Members Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>Meet Our Experts</h2>
          <p style={{ fontSize: '18px', color: '#6b7280' }}>Dedicated professionals working behind the scenes</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px', marginBottom: '80px' }}>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '28px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                transform: hoveredId === member.id ? 'translateY(-5px)' : 'translateY(0)',
                boxShadow: hoveredId === member.id ? '0 15px 30px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.05)',
                border: '1px solid #e5e7eb'
              }}
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div style={{ width: '100px', height: '100px', background: 'linear-gradient(135deg, #2563eb, #0891b2)', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>
                {member.image}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>{member.name}</h3>
              <p style={{ color: '#2563eb', fontWeight: '600', marginBottom: '12px', fontSize: '14px' }}>{member.position}</p>
              <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px', lineHeight: 1.5 }}>{member.bio}</p>
              <p style={{ color: '#9ca3af', fontSize: '12px' }}>{member.email}</p>
            </div>
          ))}
        </div>

        {/* Join Our Team Section */}
        <div style={{ background: 'linear-gradient(135deg, #1e3a8a, #0e7490)', borderRadius: '32px', padding: '60px 40px', textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px' }}>Join Our Team</h2>
          <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '32px' }}>We're always looking for talented individuals passionate about educational technology</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/careers" style={{ background: 'white', color: '#1e3a8a', padding: '14px 32px', borderRadius: '40px', fontWeight: 'bold', textDecoration: 'none' }}>View Open Positions →</Link>
            <Link href="/contact" style={{ border: '2px solid white', color: 'white', padding: '14px 32px', borderRadius: '40px', fontWeight: 'bold', textDecoration: 'none' }}>Send Your CV</Link>
          </div>
        </div>

        {/* Stats Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', marginTop: '60px', padding: '40px', background: 'white', borderRadius: '24px', textAlign: 'center' }}>
          <div><div style={{ fontSize: '36px', fontWeight: 'bold', color: '#2563eb' }}>15+</div><div style={{ color: '#6b7280' }}>Team Members</div></div>
          <div><div style={{ fontSize: '36px', fontWeight: 'bold', color: '#2563eb' }}>10+</div><div style={{ color: '#6b7280' }}>Years Experience</div></div>
          <div><div style={{ fontSize: '36px', fontWeight: 'bold', color: '#2563eb' }}>500+</div><div style={{ color: '#6b7280' }}>Schools Supported</div></div>
          <div><div style={{ fontSize: '36px', fontWeight: 'bold', color: '#2563eb' }}>24/7</div><div style={{ color: '#6b7280' }}>Support</div></div>
        </div>
      </div>
    </div>
  );
}