const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const router = express.Router();
const dbPath = path.join(__dirname, '../database/dental_clinic.db');
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Register new patient
router.post('/register', async (req, res) => {
  const { email, password, firstName, lastName, phone, dateOfBirth, address } = req.body;

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: 'Required fields missing' });
  }

  const db = new sqlite3.Database(dbPath);

  try {
    // Check if user already exists
    db.get('SELECT id FROM users WHERE email = ?', [email], async (err, row) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      if (row) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert user
      db.run(
        'INSERT INTO users (email, password, firstName, lastName, phone) VALUES (?, ?, ?, ?, ?)',
        [email, hashedPassword, firstName, lastName, phone],
        function(err) {
          if (err) {
            return res.status(500).json({ message: 'Error creating user' });
          }

          const userId = this.lastID;

          // Insert patient details
          db.run(
            'INSERT INTO patients (userId, dateOfBirth, address) VALUES (?, ?, ?)',
            [userId, dateOfBirth, address],
            function(err) {
              if (err) {
                return res.status(500).json({ message: 'Error creating patient profile' });
              }

              // Generate JWT token
              const token = jwt.sign(
                { userId, email, role: 'patient' },
                JWT_SECRET,
                { expiresIn: '24h' }
              );

              res.status(201).json({
                message: 'User registered successfully',
                token,
                user: {
                  id: userId,
                  email,
                  firstName,
                  lastName,
                  role: 'patient'
                }
              });
            }
          );
        }
      );
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  } finally {
    db.close();
  }
});

// Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }

  const db = new sqlite3.Database(dbPath);

  db.get(
    'SELECT * FROM users WHERE email = ? AND isActive = 1',
    [email],
    async (err, user) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      try {
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
          { userId: user.id, email: user.email, role: user.role },
          JWT_SECRET,
          { expiresIn: '24h' }
        );

        res.json({
          message: 'Login successful',
          token,
          user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role
          }
        });
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      } finally {
        db.close();
      }
    }
  );
});

// Verify token middleware
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

// Get current user
router.get('/me', verifyToken, (req, res) => {
  const db = new sqlite3.Database(dbPath);

  db.get(
    'SELECT id, email, firstName, lastName, phone, role FROM users WHERE id = ?',
    [req.user.userId],
    (err, user) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({ user });
      db.close();
    }
  );
});

module.exports = { router, verifyToken };