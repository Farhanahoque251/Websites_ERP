'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: '🎓', title: 'Student Management', desc: 'Complete student lifecycle from admission to alumni tracking', popular: true },
    { icon: '👆', title: 'Biometric Attendance', desc: 'Smart attendance with real-time parent notifications' },
    { icon: '💰', title: 'Fee Management', desc: 'Automated fee collection with online payment gateway', popular: true },
    { icon: '💳', title: 'Online Payment', desc: 'Secure bKash, Nagad, and card payment integration' },
    { icon: '📝', title: 'Exam Management', desc: 'Complete examination workflow with auto-grading' },
    { icon: '🏆', title: 'Result Processing', desc: 'Automatic grade calculation and report cards', popular: true },
    { icon: '👨‍🏫', title: 'Teacher Management', desc: 'Complete teacher profiles and performance tracking' },
    { icon: '📢', title: 'SMS Notifications', desc: 'Bulk SMS for notices, fees, and emergencies' },
    { icon: '📊', title: 'Analytics Dashboard', desc: 'Real-time insights and predictive analytics' },
    { icon: '🔒', title: 'Role-based Access', desc: 'Secure access for admin, teachers, parents, students' },
    { icon: '📅', title: 'Class Routine', desc: 'Automated schedule management and timetables' },
    { icon: '💰', title: 'Payroll Management', desc: 'Teacher and staff salary automation' },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '4,999',
      period: 'month',
      description: 'Perfect for small schools',
      features: ['Up to 500 Students', 'Up to 20 Teachers', 'Basic Attendance', 'Fee Management', 'Parent Portal', 'Email Support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '9,999',
      period: 'month',
      description: 'Best for growing schools',
      features: ['Up to 2000 Students', 'Unlimited Teachers', 'Biometric Attendance', 'Complete Fee Management', 'Exam Management', 'Payroll', 'SMS Notifications', 'Priority Support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact Us',
      description: 'For large institutions',
      features: ['Unlimited Students', 'Multi-School Management', 'Custom Development', 'Dedicated Support', '24/7 Phone Support', 'On-site Training', 'SLA Agreement'],
      popular: false
    }
  ];

  const testimonials = [
    { name: 'Md. Rafiqul Islam', role: 'Principal', school: 'Ideal School & College', text: 'ShikkhaERP has revolutionized our school management. The attendance and fee management features have saved us countless hours of manual work.', rating: 5 },
    { name: 'Mrs. Sharmin Akter', role: 'Administrator', school: 'Sunbeams School', text: 'The parent portal is amazing! Parents can now track their children\'s progress in real-time. The SMS notification system keeps everyone informed.', rating: 5 },
    { name: 'Prof. Abdul Mannan', role: 'Chairman', school: 'Scholars International School', text: 'Excellent support team and robust features. The payroll management alone has made our HR department much more efficient.', rating: 5 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        paddingTop: '120px',
        paddingBottom: '80px',
        background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #ecfeff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', padding: '8px 20px', borderRadius: '100px', marginBottom: '24px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <span>🎓</span>
              <span style={{ fontWeight: 500 }}>Trusted by 500+ Schools in Bangladesh</span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, marginBottom: '24px', lineHeight: 1.2 }}>
              Smart School Management
              <br />
              <span style={{ background: 'linear-gradient(135deg, #2563eb, #0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                System for Bangladesh
              </span>
            </h1>
            
            <p style={{ fontSize: '18px', color: '#4b5563', marginBottom: '32px', lineHeight: 1.6 }}>
              One platform to manage admissions, attendance, fees, payroll, and administration.
              Join the digital transformation of Bangladeshi education.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/request-demo" className="btn-primary" style={{ background: 'linear-gradient(135deg, #2563eb, #0891b2)', color: 'white', padding: '14px 36px', borderRadius: '12px', fontWeight: 600, textDecoration: 'none' }}>
                Start Free Trial →
              </Link>
              <Link href="#features" className="btn-secondary" style={{ border: '2px solid #2563eb', color: '#2563eb', padding: '12px 34px', borderRadius: '12px', fontWeight: 600, textDecoration: 'none' }}>
                Explore Features
              </Link>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', borderTop: '1px solid #e5e7eb', paddingTop: '48px', marginTop: '48px' }}>
              <div><div style={{ fontSize: '28px', fontWeight: 'bold', color: '#2563eb' }}>500+</div><div style={{ color: '#6b7280' }}>Schools</div></div>
              <div><div style={{ fontSize: '28px', fontWeight: 'bold', color: '#2563eb' }}>250K+</div><div style={{ color: '#6b7280' }}>Students</div></div>
              <div><div style={{ fontSize: '28px', fontWeight: 'bold', color: '#2563eb' }}>10K+</div><div style={{ color: '#6b7280' }}>Teachers</div></div>
              <div><div style={{ fontSize: '28px', fontWeight: 'bold', color: '#2563eb' }}>98%</div><div style={{ color: '#6b7280' }}>Satisfaction</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section style={{ padding: '48px 0', background: '#f9fafb', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ textAlign: 'center', color: '#6b7280', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px', marginBottom: '32px' }}>
            Trusted by leading educational institutions
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
            {['Ideal School', 'Sunbeams School', 'Scholars Intl', 'Oxford Intl', 'Maple Leaf', 'DPS STS'].map((school, i) => (
              <div key={i} style={{ padding: '10px 24px', background: 'white', borderRadius: '10px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <span style={{ fontWeight: 500, color: '#4b5563' }}>{school}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '80px 0', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ display: 'inline-block', background: 'linear-gradient(135deg, #dbeafe, #cffafe)', color: '#2563eb', padding: '6px 16px', borderRadius: '50px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>Powerful Features</span>
            <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px' }}>Everything You Need to <span style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb, #0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Manage Your School</span></h2>
            <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>Built specifically for Bangladeshi schools with local requirements in mind</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {features.map((feature, i) => (
              <div key={i} style={{ padding: '28px', background: '#f9fafb', borderRadius: '20px', border: '1px solid #e5e7eb', position: 'relative', transition: 'all 0.3s' }}>
                {feature.popular && <div style={{ position: 'absolute', top: '-10px', right: '20px', background: 'linear-gradient(135deg, #2563eb, #0891b2)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold' }}>POPULAR</div>}
                <div style={{ fontSize: '44px', marginBottom: '16px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{feature.title}</h3>
                <p style={{ color: '#6b7280', lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: '80px 0', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ display: 'inline-block', background: 'linear-gradient(135deg, #dbeafe, #cffafe)', color: '#2563eb', padding: '6px 16px', borderRadius: '50px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>Pricing</span>
            <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px' }}>Simple, Transparent Pricing</h2>
            <p style={{ fontSize: '18px', color: '#6b7280' }}>Choose the perfect plan for your school. No hidden fees.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {pricingPlans.map((plan, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '24px', padding: '32px', boxShadow: plan.popular ? '0 25px 50px -12px rgba(0,0,0,0.25)' : '0 1px 3px rgba(0,0,0,0.1)', border: plan.popular ? '2px solid #2563eb' : '1px solid #e5e7eb', position: 'relative' }}>
                {plan.popular && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#2563eb', color: 'white', padding: '6px 20px', borderRadius: '30px', fontSize: '12px', fontWeight: 'bold' }}>MOST POPULAR</div>}
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>{plan.name}</h3>
                <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '24px' }}>{plan.description}</p>
                <div style={{ marginBottom: '24px' }}>
                  {plan.price === 'Custom' ? (
                    <span style={{ fontSize: '32px', fontWeight: 'bold' }}>Custom</span>
                  ) : (
                    <><span style={{ fontSize: '48px', fontWeight: 'bold' }}>৳{plan.price}</span><span style={{ color: '#6b7280' }}>/{plan.period}</span></>
                  )}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                  {plan.features.map((feature, j) => (
                    <li key={j} style={{ padding: '8px 0', color: '#4b5563', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10b981' }}>✓</span> {feature}</li>
                  ))}
                </ul>
                <Link href={plan.name === 'Enterprise' ? '/contact' : '/request-demo'} style={{ background: plan.popular ? 'linear-gradient(135deg, #2563eb, #0891b2)' : 'white', color: plan.popular ? 'white' : '#2563eb', border: plan.popular ? 'none' : '2px solid #2563eb', padding: '14px', borderRadius: '12px', fontWeight: 600, textDecoration: 'none', textAlign: 'center', display: 'block' }}>
                  {plan.buttonText || 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{ padding: '80px 0', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ display: 'inline-block', background: 'linear-gradient(135deg, #dbeafe, #cffafe)', color: '#2563eb', padding: '6px 16px', borderRadius: '50px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>Testimonials</span>
            <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px' }}>Trusted by School Leaders</h2>
            <p style={{ fontSize: '18px', color: '#6b7280' }}>See what our customers say about ShikkhaERP</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: '#f9fafb', borderRadius: '20px', padding: '32px', border: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
                <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '24px', fontStyle: 'italic' }}>"{t.text}"</p>
                <div><div style={{ fontWeight: 'bold' }}>{t.name}</div><div style={{ color: '#6b7280', fontSize: '14px' }}>{t.role}, {t.school}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #1e3a8a, #0e7490)', textAlign: 'center' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>Ready to Transform Your School Management?</h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '32px' }}>Join 500+ schools in Bangladesh that trust ShikkhaERP</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/request-demo" style={{ background: 'white', color: '#1e3a8a', padding: '14px 36px', borderRadius: '12px', fontWeight: 'bold', textDecoration: 'none' }}>Start Free Trial</Link>
            <Link href="/contact" style={{ border: '2px solid white', color: 'white', padding: '14px 36px', borderRadius: '12px', fontWeight: 'bold', textDecoration: 'none' }}>Contact Sales</Link>
          </div>
        </div>
      </section>
    </div>
  );
}