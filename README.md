# Dr. Samarpita Gaba Dental Clinic - Complete Application

A modern, full-stack dental clinic management system built with React, TypeScript, Node.js, and SQLite.

## Features

### Frontend (React + TypeScript)
- **Modern UI/UX**: Beautiful, responsive design with Framer Motion animations
- **Multi-page Application**: Home, About, Services, Gallery, Appointments, Contact, Blog, Patient Portal
- **Authentication System**: Login/Register with JWT tokens
- **Patient Portal**: Dashboard, appointment management, medical records, billing
- **Appointment Booking**: Real-time availability checking and booking system
- **Blog System**: Articles with search and categorization
- **Gallery**: Interactive media gallery with filtering
- **Contact System**: Contact form with validation

### Backend (Node.js + Express)
- **RESTful API**: Complete API for all frontend functionality
- **Authentication**: JWT-based authentication with bcrypt password hashing
- **Database**: SQLite database with comprehensive schema
- **Email Integration**: Nodemailer for contact form and notifications
- **File Upload**: Support for gallery and medical record uploads
- **Security**: Helmet, CORS, input validation, and sanitization

### Database Schema
- **Users**: Patient and staff management
- **Patients**: Extended patient information and medical history
- **Appointments**: Scheduling system with availability checking
- **Services**: Dental services catalog
- **Blog Posts**: Content management system
- **Gallery**: Media management
- **Contact Messages**: Contact form submissions
- **Medical Records**: Patient medical record storage

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Clone and Install Dependencies
```bash
# Install all dependencies
npm install
```

### 2. Environment Configuration
```bash
# Copy environment template
cp .env.example .env

# Edit .env file with your configuration
```

### 3. Start the Application

#### Development Mode
```bash
# Start backend server (Terminal 1)
npm run server

# Start frontend development server (Terminal 2)
npm run dev
```

#### Production Mode
```bash
# Build frontend
npm run build

# Start production server
NODE_ENV=production npm run server
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new patient
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Appointments
- `GET /api/appointments` - Get appointments
- `POST /api/appointments` - Create appointment
- `PATCH /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Delete appointment
- `GET /api/appointments/availability/:date` - Check availability

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID
- `GET /api/services/categories/list` - Get service categories

### Blog
- `GET /api/blog` - Get blog posts
- `GET /api/blog/:id` - Get blog post by ID
- `GET /api/blog/categories/list` - Get blog categories
- `GET /api/blog/recent/posts` - Get recent posts

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get contact messages (admin)
- `PATCH /api/contact/:id` - Update message status (admin)

### Gallery
- `GET /api/gallery` - Get gallery items
- `GET /api/gallery/:id` - Get gallery item by ID
- `GET /api/gallery/categories/list` - Get gallery categories

### Patients
- `GET /api/patients/profile` - Get patient profile
- `PUT /api/patients/profile` - Update patient profile
- `GET /api/patients/medical-records` - Get medical records
- `GET /api/patients/dashboard` - Get dashboard stats

## Default Login Credentials

### Admin Account
- **Email**: admin@drsamarpita.com
- **Password**: admin123

## Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **React Hook Form** for form handling
- **Lucide React** for icons
- **Date-fns** for date manipulation

### Backend
- **Node.js** with Express
- **SQLite3** for database
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Nodemailer** for email
- **Helmet** for security
- **CORS** for cross-origin requests
- **Morgan** for logging

## Project Structure

```
├── src/                    # Frontend source code
│   ├── components/         # React components
│   │   ├── auth/          # Authentication components
│   │   ├── home/          # Home page components
│   │   └── layout/        # Layout components
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── services/          # API service functions
│   └── types/             # TypeScript type definitions
├── server/                # Backend source code
│   ├── database/          # Database setup and migrations
│   ├── routes/            # API route handlers
│   └── uploads/           # File upload directory
├── public/                # Static assets
└── dist/                  # Built frontend files
```

## Features in Detail

### Patient Portal
- **Dashboard**: Overview of appointments and health stats
- **Appointments**: View, book, and manage appointments
- **Medical Records**: Access to treatment history and documents
- **Profile Management**: Update personal and medical information
- **Billing**: View invoices and payment history

### Appointment System
- **Real-time Availability**: Check available time slots
- **Service Selection**: Choose from various dental services
- **Conflict Prevention**: Automatic conflict detection
- **Status Management**: Track appointment status
- **Notifications**: Email confirmations and reminders

### Content Management
- **Blog System**: Rich content with categories and tags
- **Gallery Management**: Organize photos and videos by category
- **Service Catalog**: Detailed service descriptions and pricing
- **Contact Management**: Handle inquiries and responses

## Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt for secure password storage
- **Input Validation**: Comprehensive input sanitization
- **CORS Protection**: Configured cross-origin resource sharing
- **Helmet Security**: Security headers and protection
- **Role-based Access**: Different access levels for patients and staff

## Deployment

### Environment Variables
Set the following environment variables for production:

```bash
NODE_ENV=production
PORT=5000
JWT_SECRET=your-production-jwt-secret
SMTP_HOST=your-smtp-host
SMTP_USER=your-email
SMTP_PASS=your-email-password
```

### Database
The SQLite database is automatically created and initialized with default data on first run.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact:
- Email: admin@drsamarpita.com
- Phone: +1 234 567 890

---

Built with ❤️ for modern dental practice management.
