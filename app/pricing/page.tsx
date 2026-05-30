'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: { monthly: 4999, yearly: 49990 },
      description: 'Perfect for small schools just getting started',
      features: [
        'Up to 500 Students',
        'Up to 20 Teachers',
        'Student Information Management',
        'Student Admission Management',
        'Basic Attendance Management',
        'Class and Section Management',
        'Subject Management',
        'Fee Management',
        'Parent Portal',
        'Email Support',
      ],
      buttonText: 'Get Started',
      popular: false,
    },
    {
      id: 'professional',
      name: 'Professional',
      price: { monthly: 9999, yearly: 99990 },
      description: 'Best for growing schools with advanced needs',
      features: [
        'Up to 2000 Students',
        'Unlimited Teachers & Staff',
        'All Starter Features',
        'Advanced Attendance Management',
        'Teacher & Staff Management',
        'Payroll Management',
        'Examination Management',
        'Grade & Result Management',
        'Report Card Generation',
        'Online Payment Integration',
        'Accounting Management',
        'SMS Notification System',
        'Dashboard & Analytics',
        'Role-Based Access Control',
        'Priority Phone Support',
      ],
      buttonText: 'Start Free Trial',
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: { monthly: 'Custom', yearly: 'Custom' },
      description: 'For large institutions and school chains',
      features: [
        'Unlimited Students',
        'Unlimited Teachers & Staff',
        'All Professional Features',
        'Multi-School Management',
        'Custom Feature Development',
        'Dedicated Account Manager',
        '24/7 Premium Phone Support',
        'On-site Training',
        'Custom Integration',
        'SLA Agreement',
        'White-label Option',
      ],
      buttonText: 'Contact Sales',
      popular: false,
    },
  ];

  const allFeatures = [
    'Student Information Management',
    'Student Admission Management',
    'Attendance Management',
    'Class and Section Management',
    'Subject Management',
    'Class Routine Management',
    'Fee Management',
    'Parent Portal',
    'Teacher Management',
    'Staff Management',
    'Payroll Management',
    'Examination Management',
    'Grade & Result Management',
    'Report Card Generation',
    'Online Payment Integration',
    'Accounting Management',
    'SMS Notification System',
    'Dashboard & Analytics',
    'Role-Based Access Control',
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f9fafb' }}>
      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a, #0e7490)', color: 'white', padding: '60px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>Simple, Transparent Pricing</h1>
          <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.6 }}>
            Choose the perfect plan for your school. All plans include core features.
            No hidden fees. Cancel anytime.
          </p>
        </div>
      </div>

      {/* Billing Toggle */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-25px', marginBottom: '40px' }}>
        <div style={{ background: 'white', padding: '6px', borderRadius: '60px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', display: 'inline-flex' }}>
          <button
            onClick={() => setBillingCycle('monthly')}
            style={{
              padding: '12px 32px',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              background: billingCycle === 'monthly' ? 'linear-gradient(135deg, #2563eb, #0891b2)' : 'transparent',
              color: billingCycle === 'monthly' ? 'white' : '#4b5563',
              transition: 'all 0.3s ease'
            }}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            style={{
              padding: '12px 32px',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              background: billingCycle === 'yearly' ? 'linear-gradient(135deg, #2563eb, #0891b2)' : 'transparent',
              color: billingCycle === 'yearly' ? 'white' : '#4b5563',
              transition: 'all 0.3s ease'
            }}
          >
            Yearly Billing
            <span style={{ marginLeft: '8px', fontSize: '12px', background: '#fef3c7', color: '#d97706', padding: '2px 8px', borderRadius: '20px' }}>Save 15%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', alignItems: 'stretch' }}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              style={{
                background: 'white',
                borderRadius: '32px',
                overflow: 'hidden',
                position: 'relative',
                transition: 'all 0.3s ease',
                transform: hoveredPlan === plan.id ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: hoveredPlan === plan.id ? '0 30px 50px -20px rgba(0,0,0,0.2)' : '0 4px 6px rgba(0,0,0,0.05)',
                border: plan.popular ? '2px solid #2563eb' : '1px solid #e5e7eb'
              }}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: '30px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  zIndex: 10
                }}>
                  🔥 MOST POPULAR
                </div>
              )}
              
              <div style={{ padding: '32px', textAlign: 'center', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                  {plan.id === 'starter' && '🎓'}
                  {plan.id === 'professional' && '🚀'}
                  {plan.id === 'enterprise' && '🏢'}
                </div>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>{plan.name}</h2>
                <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '24px' }}>{plan.description}</p>
                <div>
                  {typeof plan.price[billingCycle] === 'number' ? (
                    <>
                      <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#1f2937' }}>৳{plan.price[billingCycle].toLocaleString()}</span>
                      <span style={{ color: '#6b7280' }}>/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </>
                  ) : (
                    <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937' }}>Custom Pricing</span>
                  )}
                </div>
              </div>

              <div style={{ padding: '32px' }}>
                <Link
                  href={plan.id === 'enterprise' ? '/contact' : '/request-demo'}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: plan.popular ? 'linear-gradient(135deg, #2563eb, #0891b2)' : 'white',
                    color: plan.popular ? 'white' : '#2563eb',
                    border: plan.popular ? 'none' : '2px solid #2563eb',
                    padding: '14px 24px',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    marginBottom: '24px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {plan.buttonText} →
                </Link>

                <div style={{ fontWeight: 'bold', marginBottom: '16px' }}>What's included:</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {plan.features.slice(0, 8).map((feature, idx) => (
                    <li key={idx} style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '10px', color: '#4b5563', fontSize: '14px' }}>
                      <span style={{ color: '#10b981', fontSize: '16px' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                  {plan.features.length > 8 && (
                    <li style={{ padding: '8px 0', color: '#2563eb', fontSize: '13px' }}>
                      + {plan.features.length - 8} more features...
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div style={{ background: 'white', padding: '60px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px' }}>Feature Comparison</h2>
            <p style={{ fontSize: '18px', color: '#6b7280' }}>Compare features across all plans</p>
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
                {allFeatures.map((feature, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center', color: idx < 8 ? '#10b981' : '#9ca3af' }}>
                      {idx < 8 ? '✓' : '—'}
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center', color: '#10b981', background: '#eff6ff' }}>✓</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center', color: '#10b981' }}>✓</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px' }}>Frequently Asked Questions</h2>
          <p style={{ fontSize: '18px', color: '#6b7280' }}>Everything you need to know about our pricing</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '32px' }}>
          <div style={{ padding: '24px', background: 'white', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>💰 What payment methods do you accept?</h3>
            <p style={{ color: '#6b7280', lineHeight: 1.6 }}>We accept bKash, Nagad, Rocket, credit/debit cards (Visa, Mastercard), and bank transfers.</p>
          </div>
          <div style={{ padding: '24px', background: 'white', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>🔄 Can I change my plan later?</h3>
            <p style={{ color: '#6b7280', lineHeight: 1.6 }}>Yes, you can upgrade or downgrade your plan at any time.</p>
          </div>
          <div style={{ padding: '24px', background: 'white', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>🎓 Is there a discount for multiple schools?</h3>
            <p style={{ color: '#6b7280', lineHeight: 1.6 }}>Yes! Contact our sales team for special pricing for school chains.</p>
          </div>
          <div style={{ padding: '24px', background: 'white', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>📞 What kind of support do you offer?</h3>
            <p style={{ color: '#6b7280', lineHeight: 1.6 }}>All plans include email support. Professional and Enterprise include priority phone support.</p>
          </div>
          <div style={{ padding: '24px', background: 'white', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>🔒 Is my data secure?</h3>
            <p style={{ color: '#6b7280', lineHeight: 1.6 }}>Absolutely! We use bank-level encryption and regular backups.</p>
          </div>
          <div style={{ padding: '24px', background: 'white', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>🏫 Do you offer custom solutions?</h3>
            <p style={{ color: '#6b7280', lineHeight: 1.6 }}>Yes! Enterprise clients can request custom feature development.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a, #0e7490)', borderRadius: '32px', maxWidth: '1000px', margin: '0 auto 60px', padding: '50px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>Still have questions?</h2>
        <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '24px' }}>Our team is here to help you choose the perfect plan for your school</p>
        <Link href="/contact" style={{ background: 'white', color: '#1e3a8a', padding: '14px 36px', borderRadius: '40px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
          Contact Our Team →
        </Link>
      </div>
    </div>
  );
}