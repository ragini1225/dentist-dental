const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const { verifyToken } = require('./auth');
const { verifyToken } = require('./auth.cjs');

const router = express.Router();
const dbPath = path.join(__dirname, '../database/dental_clinic.db');

// Get patient profile
router.get('/profile', verifyToken, (req, res) => {
  const db = new sqlite3.Database(dbPath);

  db.get(
    `
    SELECT 
      u.id,
      u.email,
      u.firstName,
      u.lastName,
      u.phone,
      p.dateOfBirth,
      p.address,
      p.emergencyContact,
      p.emergencyPhone,
      p.medicalHistory,
      p.allergies,
      p.insurance
    FROM users u
    LEFT JOIN patients p ON u.id = p.userId
    WHERE u.id = ?
    `,
    [req.user.userId],
    (err, profile) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      if (!profile) {
        return res.status(404).json({ message: 'Profile not found' });
      }

      res.json({ profile });
      db.close();
    }
  );
});

// Update patient profile
router.put('/profile', verifyToken, (req, res) => {
  const {
    firstName,
    lastName,
    phone,
    dateOfBirth,
    address,
    emergencyContact,
    emergencyPhone,
    medicalHistory,
    allergies,
    insurance
  } = req.body;

  const db = new sqlite3.Database(dbPath);

  // Update user table
  db.run(
    'UPDATE users SET firstName = ?, lastName = ?, phone = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?',
    [firstName, lastName, phone, req.user.userId],
    function(err) {
      if (err) {
        return res.status(500).json({ message: 'Error updating user profile' });
      }

      // Update or insert patient details
      db.run(
        `
        INSERT OR REPLACE INTO patients 
        (userId, dateOfBirth, address, emergencyContact, emergencyPhone, medicalHistory, allergies, insurance)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [req.user.userId, dateOfBirth, address, emergencyContact, emergencyPhone, medicalHistory, allergies, insurance],
        function(err) {
          if (err) {
            return res.status(500).json({ message: 'Error updating patient profile' });
          }

          res.json({ message: 'Profile updated successfully' });
          db.close();
        }
      );
    }
  );
});

// Get patient medical records
router.get('/medical-records', verifyToken, (req, res) => {
  const db = new sqlite3.Database(dbPath);

  db.get(
    'SELECT id FROM patients WHERE userId = ?',
    [req.user.userId],
    (err, patient) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      if (!patient) {
        return res.status(404).json({ message: 'Patient profile not found' });
      }

      db.all(
        `
        SELECT 
          mr.*,
          u.firstName as doctorFirstName,
          u.lastName as doctorLastName
        FROM medical_records mr
        LEFT JOIN users u ON mr.doctorId = u.id
        WHERE mr.patientId = ?
        ORDER BY mr.createdAt DESC
        `,
        [patient.id],
        (err, records) => {
          if (err) {
            return res.status(500).json({ message: 'Database error' });
          }

          res.json({ records });
          db.close();
        }
      );
    }
  );
});

// Get patient dashboard stats
router.get('/dashboard', verifyToken, (req, res) => {
  const db = new sqlite3.Database(dbPath);

  db.get(
    'SELECT id FROM patients WHERE userId = ?',
    [req.user.userId],
    (err, patient) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      if (!patient) {
        return res.status(404).json({ message: 'Patient profile not found' });
      }

      // Get appointment counts
      db.get(
        `
        SELECT 
          COUNT(*) as totalAppointments,
          SUM(CASE WHEN status = 'scheduled' THEN 1 ELSE 0 END) as upcomingAppointments,
          SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completedAppointments
        FROM appointments 
        WHERE patientId = ?
        `,
        [patient.id],
        (err, appointmentStats) => {
          if (err) {
            return res.status(500).json({ message: 'Database error' });
          }

          // Get next appointment
          db.get(
            `
            SELECT 
              a.*,
              s.name as serviceName
            FROM appointments a
            JOIN services s ON a.serviceId = s.id
            WHERE a.patientId = ? AND a.status = 'scheduled' AND a.appointmentDate >= date('now')
            ORDER BY a.appointmentDate ASC, a.appointmentTime ASC
            LIMIT 1
            `,
            [patient.id],
            (err, nextAppointment) => {
              if (err) {
                return res.status(500).json({ message: 'Database error' });
              }

              res.json({
                stats: appointmentStats,
                nextAppointment
              });
              db.close();
            }
          );
        }
      );
    }
  );
});

module.exports = router;