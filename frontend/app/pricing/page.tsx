'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Check, X, HelpCircle, Star, Rocket, Building, School, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('yearly');

  const plans = [
    {
      name: 'Basic',
      icon: School,
      price: {
        monthly: 4999,
        yearly: 49990,
      },
      description: 'Perfect for small schools just getting started',
      features: [
        { name: 'Up to 300 Students', included: true },
        { name: 'Up to 20 Teachers', included: true },
        { name: 'Student Management', included: true },
        { name: 'Teacher Management', included: true },
        { name: 'Attendance System', included: true },
        { name: 'Exam Management', included: true },
        { name: 'Fee Collection', included: false },
        { name: 'Parent Portal', included: false },
        { name: 'SMS Notifications', included: false },
        { name: 'Advanced Reports', included: false },
        { name: 'API Access', included: false },
        { name: 'Priority Support', included: false },
      ],
      color: 'indigo',
      buttonText: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      icon: Building,
      price: {
        monthly: 9999,
        yearly: 99990,
      },
      description: 'Most popular for growing schools',
      features: [
        { name: 'Up to 1000 Students', included: true },
        { name: 'Up to 50 Teachers', included: true },
        { name: 'Student Management', included: true },
        { name: 'Teacher Management', included: true },
        { name: 'Attendance System', included: true },
        { name: 'Exam Management', included: true },
        { name: 'Fee Collection', included: true },
        { name: 'Parent Portal', included: true },
        { name: 'SMS Notifications', included: true },
        { name: 'Advanced Reports', included: true },
        { name: 'API Access', included: false },
        { name: 'Priority Support', included: false },
      ],
      color: 'emerald',
      buttonText: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      icon: Rocket,
      price: {
        monthly: 19999,
        yearly: 199990,
      },
      description: 'For large institutions with advanced needs',
      features: [
        { name: 'Unlimited Students', included: true },
        { name: 'Unlimited Teachers', included: true },
        { name: 'Student Management', included: true },
        { name: 'Teacher Management', included: true },
        { name: 'Attendance System', included: true },
        { name: 'Exam Management', included: true },
        { name: 'Fee Collection', included: true },
        { name: 'Parent Portal', included: true },
        { name: 'SMS Notifications', included: true },
        { name: 'Advanced Reports', included: true },
        { name: 'API Access', included: true },
        { name: 'Priority Support', included: true },
      ],
      color: 'purple',
      buttonText: 'Contact Sales',
      popular: false,
    },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('bn-BD').format(price);
  };

  const getPrice = (plan) => {
    if (billingCycle === 'monthly') {
      return plan.price.monthly;
    }
    return plan.price.yearly;
  };

  const getYearlySavings = (plan) => {
    const monthlyTotal = plan.price.monthly * 12;
    const yearlyPrice = plan.price.yearly;
    const savings = monthlyTotal - yearlyPrice;
    return formatPrice(savings);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container-custom py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent
              <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent block">
                Pricing Plans
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your school. All plans include a 14-day free trial.
            </p>
          </motion.div>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 flex gap-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                billingCycle === 'yearly'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Yearly
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'border-emerald-200 shadow-emerald-100/50 scale-105 md:scale-105'
                  : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Plan Icon */}
                <div className={`w-14 h-14 bg-${plan.color}-100 rounded-2xl flex items-center justify-center mb-4`}>
                  <plan.icon className={`w-7 h-7 text-${plan.color}-600`} />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{plan.description}</p>

                {/* Price */}
                <div className="mt-6 mb-4">
                  <span className="text-4xl font-bold text-gray-800">৳{formatPrice(getPrice(plan))}</span>
                  <span className="text-gray-500 ml-2">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                </div>

                {/* Yearly Savings */}
                {billingCycle === 'yearly' && (
                  <p className="text-xs text-emerald-600 bg-emerald-50 inline-block px-2 py-1 rounded-lg mb-4">
                    Save ৳{getYearlySavings(plan)} per year
                  </p>
                )}

                {/* Features List */}
                <div className="space-y-3 mt-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-gray-300 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Link
                  href={plan.name === 'Enterprise' ? '/contact' : '/contact?plan=' + plan.name.toLowerCase()}
                  className={`mt-8 w-full block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:shadow-lg'
                      : 'bg-gray-800 text-white hover:bg-gray-900'
                  }`}
                >
                  {plan.buttonText}
                </Link>

                {/* Free Trial Note */}
                <p className="text-center text-xs text-gray-400 mt-4">
                  14-day free trial • No credit card required
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-8">Have questions about our pricing? We're here to help.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Can I switch plans later?</h4>
              <p className="text-gray-600 text-sm">Yes, you can upgrade or downgrade your plan at any time.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Is there setup fee?</h4>
              <p className="text-gray-600 text-sm">No setup fee for any plan. Free onboarding included.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-800 mb-2">What payment methods?</h4>
              <p className="text-gray-600 text-sm">bKash, Nagad, Rocket, Bank Transfer, Credit Card.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Is training included?</h4>
              <p className="text-gray-600 text-sm">Yes, free training for teachers and staff included.</p>
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Need a Custom Plan?</h2>
          <p className="opacity-90 mb-6">Get a tailored solution for your school with custom features and pricing.</p>
          <Link href="/contact" className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2">
            Contact Sales <Sparkles className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}