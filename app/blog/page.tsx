'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: '10 Benefits of Implementing a School ERP System',
      excerpt: 'Discover how school management software can transform your educational institution, save time, and improve efficiency...',
      content: `
        <p>In today's digital age, schools need efficient systems to manage their daily operations. A School ERP (Enterprise Resource Planning) system is no longer a luxury—it's a necessity. Here are 10 compelling benefits of implementing a school ERP system:</p>
        
        <h3>1. Centralized Data Management</h3>
        <p>All student, teacher, and administrative data is stored in one secure location, eliminating paper records and scattered spreadsheets.</p>
        
        <h3>2. Automated Attendance Tracking</h3>
        <p>Biometric and digital attendance systems reduce manual errors and save valuable teaching time. Parents receive instant notifications about their child's attendance.</p>
        
        <h3>3. Streamlined Fee Collection</h3>
        <p>Online payment integration allows parents to pay fees through bKash, Nagad, Rocket, and credit cards. Automated reminders reduce late payments.</p>
        
        <h3>4. Enhanced Parent-Teacher Communication</h3>
        <p>Parent portals provide real-time access to grades, attendance, homework, and school announcements, fostering better collaboration.</p>
        
        <h3>5. Efficient Examination Management</h3>
        <p>Create exam schedules, generate admit cards, and process results automatically. The system calculates grades and generates report cards instantly.</p>
        
        <h3>6. Improved Financial Management</h3>
        <p>Track income, expenses, and payroll with comprehensive accounting features. Generate financial reports for stakeholders.</p>
        
        <h3>7. Time-Saving Automation</h3>
        <p>Automate routine tasks like fee reminders, report card generation, and schedule creation, allowing staff to focus on education.</p>
        
        <h3>8. Data-Driven Decision Making</h3>
        <p>Real-time analytics and reports help administrators make informed decisions about resource allocation and academic planning.</p>
        
        <h3>9. Enhanced Security</h3>
        <p>Role-based access ensures that sensitive information is only available to authorized personnel. Data is backed up securely in the cloud.</p>
        
        <h3>10. Scalability for Growth</h3>
        <p>Cloud-based ERP systems easily scale with your school as it grows, accommodating more students, teachers, and campuses.</p>
        
        <p><strong>Ready to transform your school?</strong> Contact ShikkhaERP today for a free demo and see how we can help your institution thrive in the digital age.</p>
      `,
      date: 'March 15, 2024',
      category: 'ERP Benefits',
      readTime: '6 min read',
      image: '🎓',
      author: 'Md. Rafiqul Islam',
      authorRole: 'CEO & Founder',
      authorImage: '👨‍💼'
    },
    {
      id: 2,
      title: 'How to Choose the Right School Management Software',
      excerpt: 'A comprehensive guide to selecting the perfect ERP solution for your school. Key features to look for and common pitfalls to avoid...',
      content: `
        <p>Choosing the right school management software is a critical decision that affects your entire institution. With so many options available, how do you make the right choice? This guide will help you navigate the selection process.</p>
        
        <h3>Step 1: Assess Your School's Needs</h3>
        <p>Before evaluating any software, list your specific requirements:</p>
        <ul>
          <li>Number of students and teachers</li>
          <li>Pain points in current processes</li>
          <li>Must-have features vs. nice-to-have features</li>
          <li>Budget constraints</li>
          <li>Integration requirements</li>
        </ul>
        
        <h3>Step 2: Research Available Options</h3>
        <p>Look for software specifically designed for schools in Bangladesh. Consider factors like local support, payment gateway integration (bKash, Nagad, Rocket), and compliance with local education board requirements.</p>
        
        <h3>Step 3: Evaluate Key Features</h3>
        <p>Essential features to look for:</p>
        <ul>
          <li><strong>Student Information System (SIS)</strong> - Complete student profiles and records</li>
          <li><strong>Attendance Management</strong> - Biometric and manual attendance options</li>
          <li><strong>Fee Management</strong> - Online payment processing and automated reminders</li>
          <li><strong>Examination Management</strong> - Schedule creation, results processing, report cards</li>
          <li><strong>Parent Portal</strong> - Real-time access for parents</li>
          <li><strong>Payroll Management</strong> - Salary processing for teachers and staff</li>
          <li><strong>Communication Tools</strong> - SMS, email, and in-app notifications</li>
          <li><strong>Reporting & Analytics</strong> - Customizable reports and dashboards</li>
        </ul>
        
        <h3>Step 4: Request Demos</h3>
        <p>Schedule demos with shortlisted vendors. During the demo:</p>
        <ul>
          <li>Ask about your specific requirements</li>
          <li>Request to see actual workflows</li>
          <li>Inquire about training and support</li>
          <li>Ask about implementation timeline</li>
        </ul>
        
        <h3>Step 5: Check References</h3>
        <p>Talk to other schools using the software. Ask about their experience with implementation, support, and overall satisfaction.</p>
        
        <h3>Step 6: Consider Total Cost of Ownership</h3>
        <p>Beyond the initial price, consider:</p>
        <ul>
          <li>Implementation and training costs</li>
          <li>Monthly or annual subscription fees</li>
          <li>Support and maintenance costs</li>
          <li>Upgrade and customization costs</li>
        </ul>
        
        <h3>Step 7: Test Before Committing</h3>
        <p>Most vendors offer free trials or pilot programs. Take advantage of these to test the software with real data and real users.</p>
        
        <h3>Common Pitfalls to Avoid</h3>
        <ul>
          <li>Choosing based on price alone</li>
          <li>Overlooking scalability requirements</li>
          <li>Ignoring user-friendliness</li>
          <li>Not involving end-users in the decision</li>
          <li>Underestimating training needs</li>
        </ul>
        
        <p><strong>Make the Right Choice with ShikkhaERP</strong></p>
        <p>ShikkhaERP offers a comprehensive solution tailored for Bangladeshi schools. With features designed specifically for local requirements, affordable pricing, and dedicated local support, we're the partner you can trust. Contact us today for a free demo!</p>
      `,
      date: 'March 10, 2024',
      category: 'Buying Guide',
      readTime: '8 min read',
      image: '📚',
      author: 'Sharmin Akter',
      authorRole: 'CTO',
      authorImage: '👩‍💻'
    }
  ];

  if (selectedPost !== null) {
    const post = blogPosts.find(p => p.id === selectedPost);
    if (!post) return null;

    return (
      <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>
          {/* Back Button */}
          <button
            onClick={() => setSelectedPost(null)}
            style={{
              background: 'none',
              border: 'none',
              color: '#2563eb',
              cursor: 'pointer',
              fontSize: '16px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            ← Back to All Posts
          </button>

          {/* Blog Post Content */}
          <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <div style={{ background: 'linear-gradient(135deg, #2563eb, #0891b2)', padding: '60px 40px', textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: '64px', marginBottom: '20px' }}>{post.image}</div>
              <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>{post.title}</h1>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', fontSize: '14px', opacity: 0.9 }}>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
                <span>{post.category}</span>
              </div>
            </div>
            <div style={{ padding: '48px' }}>
              <div dangerouslySetInnerHTML={{ __html: post.content }} style={{ lineHeight: 1.8, color: '#4b5563' }} />
              
              {/* Author Section */}
              <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #2563eb, #0891b2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>
                  {post.authorImage}
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{post.author}</div>
                  <div style={{ color: '#6b7280', fontSize: '14px' }}>{post.authorRole}, ShikkhaERP</div>
                </div>
              </div>

              {/* Share Section */}
              <div style={{ marginTop: '32px', textAlign: 'center' }}>
                <p style={{ color: '#6b7280', marginBottom: '16px' }}>Share this article:</p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                  <a href="#" style={{ background: '#1877f2', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>📘</a>
                  <a href="#" style={{ background: '#1da1f2', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>🐦</a>
                  <a href="#" style={{ background: '#0077b5', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>in</a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div style={{ marginTop: '48px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Related Posts</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {blogPosts.filter(p => p.id !== selectedPost).map(post => (
                <div key={post.id} style={{ background: 'white', borderRadius: '16px', padding: '24px', cursor: 'pointer' }} onClick={() => setSelectedPost(post.id)}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{post.image}</div>
                  <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{post.title}</h4>
                  <p style={{ color: '#6b7280', fontSize: '14px' }}>{post.excerpt.substring(0, 100)}...</p>
                  <button style={{ color: '#2563eb', background: 'none', border: 'none', marginTop: '12px', cursor: 'pointer' }}>Read More →</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb' }}>
      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a, #0e7490)', color: 'white', padding: '60px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>Latest Insights & Updates</h1>
          <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.6 }}>
            Stay updated with the latest trends in educational technology and school management
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '40px' }}>
          {blogPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post.id)}
              style={{
                background: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{ background: 'linear-gradient(135deg, #2563eb, #0891b2)', padding: '40px', textAlign: 'center' }}>
                <div style={{ fontSize: '64px', marginBottom: '16px' }}>{post.image}</div>
                <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px' }}>{post.category}</span>
              </div>
              <div style={{ padding: '32px' }}>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', fontSize: '14px', color: '#6b7280' }}>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937', lineHeight: 1.3 }}>{post.title}</h2>
                <p style={{ color: '#6b7280', lineHeight: 1.6, marginBottom: '24px' }}>{post.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', background: '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>{post.authorImage}</div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: '14px' }}>{post.author}</div>
                    <div style={{ color: '#9ca3af', fontSize: '12px' }}>{post.authorRole}</div>
                  </div>
                </div>
                <button style={{ marginTop: '24px', color: '#2563eb', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Read Full Article →</button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div style={{
          marginTop: '80px',
          background: 'linear-gradient(135deg, #1e3a8a, #0e7490)',
          borderRadius: '32px',
          padding: '60px 40px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>Subscribe to Our Newsletter</h2>
          <p style={{ fontSize: '16px', opacity: 0.9, marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
            Get the latest articles and updates delivered to your inbox
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                padding: '14px 24px',
                borderRadius: '50px',
                border: 'none',
                width: '320px',
                fontSize: '16px'
              }}
            />
            <button
              style={{
                background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '50px',
                border: 'none',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}