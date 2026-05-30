'use client';

import Link from 'next/link';

export default function TermsPage() {
  const lastUpdated = "March 15, 2024";

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '16px', background: 'linear-gradient(135deg, #1e3a8a, #2563eb, #0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Terms & Conditions
          </h1>
          <p style={{ color: '#6b7280' }}>Last Updated: {lastUpdated}</p>
        </div>

        <div style={{ background: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>1. Acceptance of Terms</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
              By accessing or using ShikkhaERP ("the Service"), you agree to be bound by these Terms & Conditions. If you disagree with any part of the terms, you may not access the Service.
            </p>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>2. Description of Service</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
              ShikkhaERP provides a cloud-based school management system including student management, attendance tracking, fee collection, examination management, payroll processing, and related administrative tools for educational institutions in Bangladesh.
            </p>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>3. User Accounts</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '12px' }}>
              You are responsible for maintaining the confidentiality of your account credentials. You agree to:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}><span style={{ color: '#2563eb' }}>•</span><span>Provide accurate and complete registration information</span></li>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}><span style={{ color: '#2563eb' }}>•</span><span>Notify us immediately of any unauthorized access</span></li>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}><span style={{ color: '#2563eb' }}>•</span><span>Accept responsibility for all activities under your account</span></li>
            </ul>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>4. Pricing and Payment</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '12px' }}>
              Our pricing plans are clearly displayed on our Pricing page. By subscribing to a paid plan, you agree to pay the specified fees. Payment is due in advance for each billing cycle. Fees are non-refundable except as required by law.
            </p>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>5. Data Ownership and Privacy</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
              You retain ownership of all data you input into ShikkhaERP. We process your data in accordance with our Privacy Policy. We do not sell your data to third parties.
            </p>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>6. Acceptable Use</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '12px' }}>You agree not to:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}><span style={{ color: '#ef4444' }}>✗</span><span>Use the Service for any illegal purpose</span></li>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}><span style={{ color: '#ef4444' }}>✗</span><span>Attempt to gain unauthorized access to our systems</span></li>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}><span style={{ color: '#ef4444' }}>✗</span><span>Interfere with the proper functioning of the Service</span></li>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}><span style={{ color: '#ef4444' }}>✗</span><span>Upload malicious code or harmful content</span></li>
            </ul>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>7. Service Availability</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
              We strive to maintain 99.9% uptime but do not guarantee uninterrupted access. We reserve the right to perform maintenance and updates as needed, with advance notice whenever possible.
            </p>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>8. Termination</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
              Either party may terminate your account at any time. Upon termination, you will have 30 days to export your data before it is permanently deleted. No refunds will be provided for unused subscription time.
            </p>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>9. Limitation of Liability</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
              To the maximum extent permitted by law, ShikkhaERP shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.
            </p>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>10. Changes to Terms</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
              We may modify these terms at any time. We will notify users of significant changes via email or through the Service. Your continued use constitutes acceptance of the modified terms.
            </p>
          </div>

          <div style={{ marginTop: '40px', padding: '24px', background: '#f0f9ff', borderRadius: '16px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#1e3a8a' }}>Contact Us</h3>
            <p style={{ color: '#4b5563' }}>Questions about these Terms? Contact us at <strong>legal@shikkhaerp.com</strong></p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link href="/" style={{ color: '#2563eb', textDecoration: 'none' }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}