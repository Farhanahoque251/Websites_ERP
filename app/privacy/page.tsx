'use client';

import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 15, 2024";

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '16px', background: 'linear-gradient(135deg, #1e3a8a, #2563eb, #0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#6b7280' }}>Last Updated: {lastUpdated}</p>
        </div>

        {/* Content Card */}
        <div style={{ background: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          
          {/* Introduction */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>Introduction</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '16px' }}>
              Welcome to ShikkhaERP ("we," "our," or "us"). We are committed to protecting your privacy and the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our school management software and website.
            </p>
            <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
              By using ShikkhaERP, you consent to the data practices described in this policy. Please read this policy carefully to understand our practices regarding your personal data.
            </p>
          </div>

          {/* Information We Collect */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>Information We Collect</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '16px' }}>We collect several types of information:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#2563eb' }}>•</span>
                <span style={{ color: '#4b5563' }}><strong>Personal Information:</strong> Name, email address, phone number, school name, and position.</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#2563eb' }}>•</span>
                <span style={{ color: '#4b5563' }}><strong>Student Data:</strong> Student names, attendance records, grades, performance reports, and parent information.</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#2563eb' }}>•</span>
                <span style={{ color: '#4b5563' }}><strong>Financial Information:</strong> Fee records, payment history, and transaction data.</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#2563eb' }}>•</span>
                <span style={{ color: '#4b5563' }}><strong>Technical Data:</strong> IP address, browser type, device information, and usage statistics.</span>
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>How We Use Your Information</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '16px' }}>We use your information to:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#10b981' }}>✓</span>
                <span style={{ color: '#4b5563' }}>Provide, operate, and maintain our school management software</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#10b981' }}>✓</span>
                <span style={{ color: '#4b5563' }}>Process transactions and manage fee collections</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#10b981' }}>✓</span>
                <span style={{ color: '#4b5563' }}>Generate academic reports and performance analytics</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#10b981' }}>✓</span>
                <span style={{ color: '#4b5563' }}>Send administrative notifications and updates</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#10b981' }}>✓</span>
                <span style={{ color: '#4b5563' }}>Improve our services and user experience</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#10b981' }}>✓</span>
                <span style={{ color: '#4b5563' }}>Comply with legal obligations</span>
              </li>
            </ul>
          </div>

          {/* Data Security */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>Data Security</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '16px' }}>
              We implement robust security measures to protect your data:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '12px' }}>
                <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>🔒</span>
                <strong>Encryption</strong>
                <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>256-bit SSL encryption for all data transmission</p>
              </div>
              <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '12px' }}>
                <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>☁️</span>
                <strong>Secure Cloud Storage</strong>
                <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>Data stored in secure, redundant servers</p>
              </div>
              <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '12px' }}>
                <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>👥</span>
                <strong>Access Control</strong>
                <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>Role-based access to sensitive information</p>
              </div>
              <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '12px' }}>
                <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>📋</span>
                <strong>Regular Backups</strong>
                <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>Automated daily backups of all data</p>
              </div>
            </div>
          </div>

          {/* Data Sharing */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>Data Sharing and Disclosure</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '16px' }}>
              We do not sell your personal information. We may share your data in the following circumstances:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#2563eb' }}>•</span>
                <span style={{ color: '#4b5563' }}><strong>Service Providers:</strong> With third-party vendors who assist in operating our service (payment processors, hosting providers).</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#2563eb' }}>•</span>
                <span style={{ color: '#4b5563' }}><strong>Legal Requirements:</strong> When required by law or to protect our rights.</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#2563eb' }}>•</span>
                <span style={{ color: '#4b5563' }}><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</span>
              </li>
            </ul>
          </div>

          {/* Your Rights */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>Your Rights</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '16px' }}>You have the right to:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#10b981' }}>✓</span>
                <span style={{ color: '#4b5563' }}>Access your personal information</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#10b981' }}>✓</span>
                <span style={{ color: '#4b5563' }}>Correct inaccurate information</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#10b981' }}>✓</span>
                <span style={{ color: '#4b5563' }}>Request deletion of your data</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#10b981' }}>✓</span>
                <span style={{ color: '#4b5563' }}>Opt-out of marketing communications</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#10b981' }}>✓</span>
                <span style={{ color: '#4b5563' }}>Export your data in a portable format</span>
              </li>
            </ul>
          </div>

          {/* Cookies */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>Cookies and Tracking</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
              We use cookies to enhance your experience on our website. Cookies help us understand how you use our site, remember your preferences, and improve our services. You can control cookie settings through your browser preferences.
            </p>
          </div>

          {/* Children's Privacy */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>Children's Privacy</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
              ShikkhaERP is designed for use by schools and educational institutions. We collect student data only with the consent of parents or legal guardians and in compliance with applicable laws.
            </p>
          </div>

          {/* Updates to Policy */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>Updates to This Policy</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </div>

          {/* Contact Us */}
          <div style={{ marginTop: '40px', padding: '24px', background: '#f0f9ff', borderRadius: '16px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#1e3a8a' }}>Contact Us</h3>
            <p style={{ color: '#4b5563', marginBottom: '16px' }}>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <div>
                <span style={{ fontWeight: 'bold' }}>📧 Email:</span>
                <span style={{ color: '#4b5563', marginLeft: '8px' }}>privacy@shikkhaerp.com</span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>📞 Phone:</span>
                <span style={{ color: '#4b5563', marginLeft: '8px' }}>+880 1319-719968</span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>📍 Address:</span>
                <span style={{ color: '#4b5563', marginLeft: '8px' }}>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link href="/" style={{ color: '#2563eb', textDecoration: 'none' }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}