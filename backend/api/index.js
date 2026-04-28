'use strict';

const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');

const app = express();

app.use(express.json());
app.use(cors({
  origin: [
    'https://datanestbd.com',
    'https://www.datanestbd.com',
    'http://localhost:3000',
  ],
  methods: ['GET', 'POST'],
}));

function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return google.sheets({ version: 'v4', auth });
}

// ── Health ────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    message: 'DataNest BD API is running',
  });
});

// ── Contact Form ──────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, whatsapp, email = '', service, message = '' } = req.body || {};

  if (!name || !whatsapp || !service) {
    return res.status(400).json({ success: false, error: 'name, whatsapp, and service are required' });
  }

  if (typeof name !== 'string' || typeof whatsapp !== 'string' || typeof service !== 'string') {
    return res.status(400).json({ success: false, error: 'Invalid input' });
  }

  try {
    const sheets = getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Contacts!A:G',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toLocaleString('en-BD', { timeZone: 'Asia/Dhaka' }),
          name.trim().slice(0, 200),
          whatsapp.trim().slice(0, 50),
          email.trim().slice(0, 200),
          service.trim().slice(0, 100),
          message.trim().slice(0, 1000),
          req.headers.referer || 'direct',
        ]],
      },
    });

    return res.json({ success: true, message: 'Submission received' });
  } catch (err) {
    console.error('Sheets append error:', err.message);
    return res.status(500).json({ success: false, error: 'Failed to save submission' });
  }
});

// ── Newsletter ────────────────────────────────────────────────
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body || {};

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ success: false, error: 'Valid email required' });
  }

  try {
    const sheets = getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Newsletter!A:B',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toLocaleString('en-BD', { timeZone: 'Asia/Dhaka' }),
          email.trim().slice(0, 200),
        ]],
      },
    });

    return res.json({ success: true, message: 'Subscribed' });
  } catch (err) {
    console.error('Newsletter append error:', err.message);
    return res.status(500).json({ success: false, error: 'Failed to subscribe' });
  }
});

// ── 404 ───────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

const PORT = process.env.PORT || 3001;
if (require.main === module) {
  app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
}

module.exports = app;
