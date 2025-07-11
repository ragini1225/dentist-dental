const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const router = express.Router();
const dbPath = path.join(__dirname, '../database/dental_clinic.db');

// Get all active services
router.get('/', (req, res) => {
  const db = new sqlite3.Database(dbPath);
  const { category } = req.query;

  let query = 'SELECT * FROM services WHERE isActive = 1';
  const params = [];

  if (category) {
    query += ' AND category = ?';
    params.push(category);
  }

  query += ' ORDER BY name';

  db.all(query, params, (err, services) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    res.json({ services });
    db.close();
  });
});

// Get service by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const db = new sqlite3.Database(dbPath);

  db.get(
    'SELECT * FROM services WHERE id = ? AND isActive = 1',
    [id],
    (err, service) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      if (!service) {
        return res.status(404).json({ message: 'Service not found' });
      }

      res.json({ service });
      db.close();
    }
  );
});

// Get service categories
router.get('/categories/list', (req, res) => {
  const db = new sqlite3.Database(dbPath);

  db.all(
    'SELECT DISTINCT category FROM services WHERE isActive = 1 ORDER BY category',
    [],
    (err, categories) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      const categoryList = categories.map(row => row.category);
      res.json({ categories: categoryList });
      db.close();
    }
  );
});

module.exports = router;