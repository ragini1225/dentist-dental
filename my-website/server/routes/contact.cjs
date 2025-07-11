const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const nodemailer = require('nodemailer');

const router = express.Router();
const dbPath = path.join(__dirname, '../database/dental_clinic.db');

// Configure nodemailer (you'll need to set up your email service)
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'your-email@gmail.com',
    pass: process.env.SMTP_PASS || 'your-app-password'
  }
});

// Submit contact form
router.post('/', async (req, res) => {
  const { firstName, lastName, email, phone, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ message: 'Required fields missing' });
  }

  const db = new sqlite3.Database(dbPath);

  try {
    // Save to database
    db.run(
      'INSERT INTO contact_messages (firstName, lastName, email, phone, subject, message) VALUES (?, ?, ?, ?, ?, ?)',
      [firstName, lastName, email, phone, subject, message],
      async function(err) {
        if (err) {
          return res.status(500).json({ message: 'Error saving message' });
        }

        // Send email notification (optional)
        try {
          await transporter.sendMail({
            from: process.env.SMTP_USER || 'noreply@drsamarpita.com',
            to: 'admin@drsamarpita.com',
            subject: `New Contact Form Submission: ${subject}`,
            html: `
              <h3>New Contact Form Submission</h3>
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `
          });

          // Send confirmation email to user
          await transporter.sendMail({
            from: process.env.SMTP_USER || 'noreply@drsamarpita.com',
            to: email,
            subject: 'Thank you for contacting Dr. Samarpita Gaba Dental Clinic',
            html: `
              <h3>Thank you for your message!</h3>
              <p>Dear ${firstName},</p>
              <p>We have received your message and will get back to you within 24 hours.</p>
              <p>Best regards,<br>Dr. Samarpita Gaba Dental Clinic</p>
            `
          });
        } catch (emailError) {
          console.error('Email sending failed:', emailError);
          // Don't fail the request if email fails
        }

        res.status(201).json({
          message: 'Message sent successfully',
          messageId: this.lastID
        });
        db.close();
      }
    );
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
    db.close();
  }
});

// Get contact messages (admin only)
router.get('/', (req, res) => {
  const db = new sqlite3.Database(dbPath);
  const { status, limit = 50, offset = 0 } = req.query;

  let query = 'SELECT * FROM contact_messages';
  const params = [];

  if (status) {
    query += ' WHERE status = ?';
    params.push(status);
  }

  query += ' ORDER BY createdAt DESC LIMIT ? OFFSET ?';
  params.push(parseInt(limit), parseInt(offset));

  db.all(query, params, (err, messages) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    res.json({ messages });
    db.close();
  });
});

// Update message status (admin only)
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: 'Status is required' });
  }

  const db = new sqlite3.Database(dbPath);

  db.run(
    'UPDATE contact_messages SET status = ? WHERE id = ?',
    [status, id],
    function(err) {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      if (this.changes === 0) {
        return res.status(404).json({ message: 'Message not found' });
      }

      res.json({ message: 'Message status updated successfully' });
      db.close();
    }
  );
});

module.exports = router;