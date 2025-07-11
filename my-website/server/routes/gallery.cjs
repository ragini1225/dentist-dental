const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const router = express.Router();
const dbPath = path.join(__dirname, '../database/dental_clinic.db');

// Get all gallery items
router.get('/', (req, res) => {
  const db = new sqlite3.Database(dbPath);
  const { category, type } = req.query;

  let query = 'SELECT * FROM gallery_items WHERE isActive = 1';
  const params = [];

  if (category) {
    query += ' AND category = ?';
    params.push(category);
  }

  if (type) {
    query += ' AND type = ?';
    params.push(type);
  }

  query += ' ORDER BY createdAt DESC';

  db.all(query, params, (err, items) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    res.json({ items });
    db.close();
  });
});

// Get gallery item by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const db = new sqlite3.Database(dbPath);

  db.get(
    'SELECT * FROM gallery_items WHERE id = ? AND isActive = 1',
    [id],
    (err, item) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      if (!item) {
        return res.status(404).json({ message: 'Gallery item not found' });
      }

      res.json({ item });
      db.close();
    }
  );
});

// Get gallery categories
router.get('/categories/list', (req, res) => {
  const db = new sqlite3.Database(dbPath);

  db.all(
    'SELECT DISTINCT category FROM gallery_items WHERE isActive = 1 AND category IS NOT NULL ORDER BY category',
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