const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/edusmart_db')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB error:', err.message));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  schoolName: String,
  message: String,
  type: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Contact form API
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, schoolName, message } = req.body;
    const contact = new Contact({ name, email, phone, schoolName, message, type: 'general' });
    await contact.save();
    res.json({ success: true, message: 'Thank you! We will contact you soon.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Demo request API
app.post('/api/demo', async (req, res) => {
  try {
    const { name, email, phone, schoolName, message } = req.body;
    const contact = new Contact({ name, email, phone, schoolName, message, type: 'demo' });
    await contact.save();
    res.json({ success: true, message: 'Demo request sent! We will contact you.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});