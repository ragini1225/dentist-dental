const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const { verifyToken } = require('./auth');
const { verifyToken } = require('./auth.cjs');

const router = express.Router();
const dbPath = path.join(__dirname, '../database/dental_clinic.db');

// Get all appointments (admin) or user's appointments
router.get('/', verifyToken, (req, res) => {
  const db = new sqlite3.Database(dbPath);
  const { status, date } = req.query;

  let query = `
    SELECT 
      a.*,
      u.firstName,
      u.lastName,
      u.email,
      u.phone,
      s.name as serviceName,
      s.duration,
      s.price
    FROM appointments a
    JOIN patients p ON a.patientId = p.id
    JOIN users u ON p.userId = u.id
    JOIN services s ON a.serviceId = s.id
  `;

  const params = [];

  if (req.user.role !== 'admin') {
    query += ' WHERE p.userId = ?';
    params.push(req.user.userId);
  }

  if (status) {
    query += req.user.role === 'admin' ? ' WHERE' : ' AND';
    query += ' a.status = ?';
    params.push(status);
  }

  if (date) {
    query += (req.user.role === 'admin' && !status) ? ' WHERE' : ' AND';
    query += ' a.appointmentDate = ?';
    params.push(date);
  }

  query += ' ORDER BY a.appointmentDate DESC, a.appointmentTime DESC';

  db.all(query, params, (err, appointments) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    res.json({ appointments });
    db.close();
  });
});

// Create new appointment
router.post('/', verifyToken, (req, res) => {
  const { serviceId, appointmentDate, appointmentTime, notes } = req.body;

  if (!serviceId || !appointmentDate || !appointmentTime) {
    return res.status(400).json({ message: 'Required fields missing' });
  }

  const db = new sqlite3.Database(dbPath);

  // First, get the patient ID for the current user
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

      // Check for conflicting appointments
      db.get(
        'SELECT id FROM appointments WHERE appointmentDate = ? AND appointmentTime = ? AND status != "cancelled"',
        [appointmentDate, appointmentTime],
        (err, conflict) => {
          if (err) {
            return res.status(500).json({ message: 'Database error' });
          }

          if (conflict) {
            return res.status(400).json({ message: 'Time slot already booked' });
          }

          // Create the appointment
          db.run(
            'INSERT INTO appointments (patientId, serviceId, appointmentDate, appointmentTime, notes) VALUES (?, ?, ?, ?, ?)',
            [patient.id, serviceId, appointmentDate, appointmentTime, notes],
            function(err) {
              if (err) {
                return res.status(500).json({ message: 'Error creating appointment' });
              }

              res.status(201).json({
                message: 'Appointment booked successfully',
                appointmentId: this.lastID
              });
              db.close();
            }
          );
        }
      );
    }
  );
});

// Update appointment status
router.patch('/:id', verifyToken, (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;

  if (!status) {
    return res.status(400).json({ message: 'Status is required' });
  }

  const db = new sqlite3.Database(dbPath);

  let query = 'UPDATE appointments SET status = ?, updatedAt = CURRENT_TIMESTAMP';
  const params = [status];

  if (notes) {
    query += ', notes = ?';
    params.push(notes);
  }

  query += ' WHERE id = ?';
  params.push(id);

  // If not admin, ensure user can only update their own appointments
  if (req.user.role !== 'admin') {
    query += ' AND patientId IN (SELECT id FROM patients WHERE userId = ?)';
    params.push(req.user.userId);
  }

  db.run(query, params, function(err) {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    if (this.changes === 0) {
      return res.status(404).json({ message: 'Appointment not found or access denied' });
    }

    res.json({ message: 'Appointment updated successfully' });
    db.close();
  });
});

// Delete appointment
router.delete('/:id', verifyToken, (req, res) => {
  const { id } = req.params;
  const db = new sqlite3.Database(dbPath);

  let query = 'DELETE FROM appointments WHERE id = ?';
  const params = [id];

  // If not admin, ensure user can only delete their own appointments
  if (req.user.role !== 'admin') {
    query += ' AND patientId IN (SELECT id FROM patients WHERE userId = ?)';
    params.push(req.user.userId);
  }

  db.run(query, params, function(err) {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    if (this.changes === 0) {
      return res.status(404).json({ message: 'Appointment not found or access denied' });
    }

    res.json({ message: 'Appointment deleted successfully' });
    db.close();
  });
});

// Get available time slots for a specific date
router.get('/availability/:date', (req, res) => {
  const { date } = req.params;
  const db = new sqlite3.Database(dbPath);

  // Get all booked appointments for the date
  db.all(
    'SELECT appointmentTime FROM appointments WHERE appointmentDate = ? AND status != "cancelled"',
    [date],
    (err, bookedSlots) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      // Generate available time slots (9 AM to 5 PM, 30-minute intervals)
      const allSlots = [];
      for (let hour = 9; hour < 17; hour++) {
        allSlots.push(`${hour.toString().padStart(2, '0')}:00`);
        allSlots.push(`${hour.toString().padStart(2, '0')}:30`);
      }

      // Filter out booked slots
      const bookedTimes = bookedSlots.map(slot => slot.appointmentTime);
      const availableSlots = allSlots.filter(slot => !bookedTimes.includes(slot));

      res.json({ availableSlots });
      db.close();
    }
  );
});

module.exports = router;