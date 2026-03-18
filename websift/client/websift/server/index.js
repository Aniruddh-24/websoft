const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  // In production, integrate with email service (e.g., Nodemailer)
  console.log('Contact form submission:', { name, email, message });
  return res.json({ success: true, message: 'Message received! We will get back to you soon.' });
});

// Serve React build in production (static files will be served by Vercel directly)
if (process.env.NODE_ENV === 'production' && !process.env.VERCEL) {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

// Only listen if this file is run directly (not through Vercel/Require)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`SPG Techsoft server running on http://localhost:${PORT}`);
  });
}

// Export the app for Vercel Serverless Functions
module.exports = app;
