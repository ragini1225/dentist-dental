const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const router = express.Router();
const dbPath = path.join(__dirname, '../database/dental_clinic.db');

// Get all published blog posts
router.get('/', (req, res) => {
  const db = new sqlite3.Database(dbPath);
  const { category, search, limit = 10, offset = 0 } = req.query;

  let query = `
    SELECT 
      bp.*,
      u.firstName,
      u.lastName
    FROM blog_posts bp
    LEFT JOIN users u ON bp.authorId = u.id
    WHERE bp.isPublished = 1
  `;
  const params = [];

  if (category) {
    query += ' AND bp.category = ?';
    params.push(category);
  }

  if (search) {
    query += ' AND (bp.title LIKE ? OR bp.excerpt LIKE ? OR bp.content LIKE ?)';
    const searchTerm = `%${search}%`;
    params.push(searchTerm, searchTerm, searchTerm);
  }

  query += ' ORDER BY bp.publishedAt DESC LIMIT ? OFFSET ?';
  params.push(parseInt(limit), parseInt(offset));

  db.all(query, params, (err, posts) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    // Get total count for pagination
    let countQuery = 'SELECT COUNT(*) as total FROM blog_posts WHERE isPublished = 1';
    const countParams = [];

    if (category) {
      countQuery += ' AND category = ?';
      countParams.push(category);
    }

    if (search) {
      countQuery += ' AND (title LIKE ? OR excerpt LIKE ? OR content LIKE ?)';
      const searchTerm = `%${search}%`;
      countParams.push(searchTerm, searchTerm, searchTerm);
    }

    db.get(countQuery, countParams, (err, countResult) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      res.json({
        posts,
        pagination: {
          total: countResult.total,
          limit: parseInt(limit),
          offset: parseInt(offset),
          hasMore: countResult.total > parseInt(offset) + parseInt(limit)
        }
      });
      db.close();
    });
  });
});

// Get blog post by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const db = new sqlite3.Database(dbPath);

  db.get(
    `
    SELECT 
      bp.*,
      u.firstName,
      u.lastName
    FROM blog_posts bp
    LEFT JOIN users u ON bp.authorId = u.id
    WHERE bp.id = ? AND bp.isPublished = 1
    `,
    [id],
    (err, post) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      if (!post) {
        return res.status(404).json({ message: 'Blog post not found' });
      }

      res.json({ post });
      db.close();
    }
  );
});

// Get blog categories
router.get('/categories/list', (req, res) => {
  const db = new sqlite3.Database(dbPath);

  db.all(
    'SELECT DISTINCT category FROM blog_posts WHERE isPublished = 1 AND category IS NOT NULL ORDER BY category',
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

// Get recent posts
router.get('/recent/posts', (req, res) => {
  const { limit = 5 } = req.query;
  const db = new sqlite3.Database(dbPath);

  db.all(
    `
    SELECT 
      bp.id,
      bp.title,
      bp.excerpt,
      bp.image,
      bp.category,
      bp.publishedAt,
      u.firstName,
      u.lastName
    FROM blog_posts bp
    LEFT JOIN users u ON bp.authorId = u.id
    WHERE bp.isPublished = 1
    ORDER BY bp.publishedAt DESC
    LIMIT ?
    `,
    [parseInt(limit)],
    (err, posts) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      res.json({ posts });
      db.close();
    }
  );
});

module.exports = router;