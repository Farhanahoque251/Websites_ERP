'use client';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const ContactForm = ({ type = 'general' }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', schoolName: '', message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const endpoint = type === 'demo' ? 'http://localhost:5000/api/demo' : 'http://localhost:5000/api/contact';
      await axios.post(endpoint, formData);
      toast.success('Thank you! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', schoolName: '', message: '' });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} required className="px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600" />
        <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required className="px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600" />
        <input type="tel" name="phone" placeholder="Phone *" value={formData.phone} onChange={handleChange} required className="px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600" />
        <input type="text" name="schoolName" placeholder="School Name *" value={formData.schoolName} onChange={handleChange} required className="px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600" />
      </div>
      <textarea name="message" placeholder="Your Message *" rows="5" value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600"></textarea>
      <button type="submit" disabled={loading} className="w-full btn-primary disabled:opacity-50">
        {loading ? 'Sending...' : type === 'demo' ? 'Request Demo' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;