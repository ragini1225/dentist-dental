const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bcrypt = require('bcryptjs');

const dbPath = path.join(__dirname, 'dental_clinic.db');

function initializeDatabase() {
  const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('Error opening database:', err.message);
    } else {
      console.log('📁 Connected to SQLite database');
      createTables(db);
    }
  });
}

function createTables(db) {
  // Users table (patients and staff)
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      phone TEXT,
      role TEXT DEFAULT 'patient',
      isActive BOOLEAN DEFAULT 1,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Patients table (extended user info)
  db.run(`
    CREATE TABLE IF NOT EXISTS patients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER NOT NULL,
      dateOfBirth DATE,
      address TEXT,
      emergencyContact TEXT,
      emergencyPhone TEXT,
      medicalHistory TEXT,
      allergies TEXT,
      insurance TEXT,
      FOREIGN KEY (userId) REFERENCES users (id)
    )
  `);

  // Services table
  db.run(`
    CREATE TABLE IF NOT EXISTS services (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      duration INTEGER NOT NULL,
      price DECIMAL(10,2),
      category TEXT,
      isActive BOOLEAN DEFAULT 1,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Appointments table
  db.run(`
    CREATE TABLE IF NOT EXISTS appointments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      patientId INTEGER NOT NULL,
      serviceId INTEGER NOT NULL,
      appointmentDate DATE NOT NULL,
      appointmentTime TIME NOT NULL,
      status TEXT DEFAULT 'scheduled',
      notes TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (patientId) REFERENCES patients (id),
      FOREIGN KEY (serviceId) REFERENCES services (id)
    )
  `);

  // Blog posts table
  db.run(`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      excerpt TEXT,
      content TEXT NOT NULL,
      image TEXT,
      category TEXT,
      tags TEXT,
      authorId INTEGER,
      isPublished BOOLEAN DEFAULT 0,
      publishedAt DATETIME,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (authorId) REFERENCES users (id)
    )
  `);

  // Contact messages table
  db.run(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      status TEXT DEFAULT 'new',
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Gallery items table
  db.run(`
    CREATE TABLE IF NOT EXISTS gallery_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      type TEXT NOT NULL,
      src TEXT NOT NULL,
      thumbnail TEXT,
      category TEXT,
      isActive BOOLEAN DEFAULT 1,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Medical records table
  db.run(`
    CREATE TABLE IF NOT EXISTS medical_records (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      patientId INTEGER NOT NULL,
      type TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      filePath TEXT,
      doctorId INTEGER,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (patientId) REFERENCES patients (id),
      FOREIGN KEY (doctorId) REFERENCES users (id)
    )
  `);

  // Insert default data
  insertDefaultData(db);
}

function insertDefaultData(db) {
  // Insert default admin user
  const adminPassword = bcrypt.hashSync('admin123', 10);
  db.run(`
    INSERT OR IGNORE INTO users (email, password, firstName, lastName, role)
    VALUES ('admin@drsamarpita.com', ?, 'Dr. Samarpita', 'Gaba', 'admin')
  `, [adminPassword]);

  // Insert default services
  const services = [
    ['General Dentistry', 'Comprehensive oral health care including cleanings, fillings, and preventive treatments.', 60, 150.00, 'general'],
    ['Cosmetic Dentistry', 'Transform your smile with veneers, whitening, and aesthetic dental procedures.', 90, 500.00, 'cosmetic'],
    ['Oral Surgery', 'Expert surgical procedures including implants, extractions, and reconstructive surgery.', 120, 800.00, 'surgery'],
    ['Orthodontics', 'Straighten your smile with modern orthodontic solutions.', 60, 200.00, 'orthodontics'],
    ['Emergency Care', 'Immediate relief for dental emergencies with same-day appointments.', 45, 200.00, 'emergency'],
    ['Pediatric Dentistry', 'Gentle care for kids with child-friendly environment.', 45, 100.00, 'pediatric']
  ];

  services.forEach(service => {
    db.run(`
      INSERT OR IGNORE INTO services (name, description, duration, price, category)
      VALUES (?, ?, ?, ?, ?)
    `, service);
  });

  // Insert sample blog posts
  const blogPosts = [
    [
      'The Importance of Regular Dental Checkups',
      'Discover why maintaining regular dental visits is crucial for your overall health and well-being.',
      'Regular dental checkups are essential for maintaining optimal oral health. During these visits, your dentist can detect problems early, provide professional cleaning, and offer personalized advice for your oral care routine. Studies show that people who visit their dentist regularly have better overall health outcomes and lower healthcare costs in the long run.',
      'https://images.unsplash.com/photo-1588776814546-b21fef52e1c1?auto=format&fit=crop&w=800&q=80',
      'Preventive Care',
      'prevention,health,checkups',
      1,
      1,
      new Date().toISOString()
    ],
    [
      'Understanding Dental Implants: A Complete Guide',
      'Everything you need to know about dental implants, from the procedure to recovery and maintenance.',
      'Dental implants are a revolutionary solution for missing teeth. They provide a permanent, natural-looking replacement that functions just like your original teeth. The procedure involves placing a titanium post into the jawbone, which serves as an artificial tooth root. After healing, a crown is attached to complete the restoration.',
      'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=800&q=80',
      'Oral Surgery',
      'implants,surgery,restoration',
      1,
      1,
      new Date().toISOString()
    ]
  ];

  blogPosts.forEach(post => {
    db.run(`
      INSERT OR IGNORE INTO blog_posts (title, excerpt, content, image, category, tags, authorId, isPublished, publishedAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, post);
  });

  // Insert sample gallery items
  const galleryItems = [
    ['Modern Dental Equipment', 'State-of-the-art dental tools for precise treatments', 'image', 'https://images.unsplash.com/photo-1588776814546-b21fef52e1c1?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1588776814546-b21fef52e1c1?auto=format&fit=crop&w=400&q=80', 'equipment'],
    ['Patient Treatment Room', 'Comfortable and modern treatment environment', 'image', 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400&q=80', 'facility'],
    ['Dr. Samarpita at Work', 'Our experienced dentist providing patient care', 'image', 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80', 'team']
  ];

  galleryItems.forEach(item => {
    db.run(`
      INSERT OR IGNORE INTO gallery_items (title, description, type, src, thumbnail, category)
      VALUES (?, ?, ?, ?, ?, ?)
    `, item);
  });

  console.log('✅ Default data inserted successfully');
}

module.exports = { initializeDatabase };