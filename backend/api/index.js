'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

const defaultOrigins = [
  'https://datanestbd.com',
  'https://www.datanestbd.com',
  'http://localhost:3000',
];

const allowedOrigins = (process.env.ALLOWED_ORIGINS || defaultOrigins.join(','))
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(express.json({ limit: '64kb' }));
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
}));

function clean(value, maxLength = 500) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function validateContact(body) {
  const submission = {
    fullName: clean(body.fullName || body.name, 200),
    whatsappNumber: clean(body.whatsappNumber || body.whatsapp, 50),
    emailAddress: clean(body.emailAddress || body.email, 200),
    serviceOfInterest: Array.isArray(body.serviceOfInterest)
      ? body.serviceOfInterest.map((item) => clean(item, 100)).filter(Boolean)
      : [clean(body.service, 100)].filter(Boolean),
    aboutBusiness: clean(body.aboutBusiness || body.message, 1000),
    source: clean(body.source, 120) || 'website',
  };

  if (!submission.fullName || !submission.whatsappNumber || submission.serviceOfInterest.length === 0) {
    return { error: 'fullName, whatsappNumber, and serviceOfInterest are required' };
  }

  return { submission };
}

app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    status: 'ok',
    service: 'DataNest BD backend',
    timestamp: new Date().toISOString(),
  });
});

app.post('/api/contact', (req, res) => {
  const { error, submission } = validateContact(req.body || {});

  if (error) {
    return res.status(400).json({ success: false, error });
  }

  console.info('Contact submission received', {
    ...submission,
    receivedAt: new Date().toISOString(),
  });

  return res.json({
    success: true,
    message: 'Submission received',
  });
});

app.post('/api/newsletter', (req, res) => {
  const email = clean(req.body && req.body.email, 200);

  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, error: 'Valid email required' });
  }

  console.info('Newsletter subscription received', {
    email,
    receivedAt: new Date().toISOString(),
  });

  return res.json({
    success: true,
    message: 'Subscribed',
  });
});

app.use((_req, res) => {
  res.status(404).json({ success: false, error: 'Not found' });
});

const PORT = process.env.PORT || 3001;
if (require.main === module) {
  app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
}

module.exports = app;
