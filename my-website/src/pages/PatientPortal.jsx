import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, FileText, CreditCard, User, Bell, Settings, LogOut, Eye, Download } from 'lucide-react';

const PatientPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const upcomingAppointments = [
    {
      id: 1,
      date: '2024-02-15',
      time: '10:00 AM',
      service: 'Regular Checkup',
      doctor: 'Dr. Samarpita Gaba',
      status: 'confirmed'
    },
    {
      id: 2,
      date: '2024-03-10',
      time: '2:30 PM',
      service: 'Teeth Cleaning',
      doctor: 'Dr. Samarpita Gaba',
      status: 'pending'
    }
  ];

  const appointmentHistory = [
    {
      id: 1,
      date: '2024-01-20',
      service: 'Dental Filling',
      doctor: 'Dr. Samarpita Gaba',
      status: 'completed',
      cost: '$250'
    },
    {
      id: 2,
      date: '2023-12-15',
      service: 'Regular Checkup',
      doctor: 'Dr. Samarpita Gaba',
      status: 'completed',
      cost: '$150'
    }
  ];

  const medicalRecords = [
    {
      id: 1,
      type: 'X-Ray Report',
      date: '2024-01-20',
      doctor: 'Dr. Samarpita Gaba',
      status: 'available'
    },
    {
      id: 2,
      type: 'Treatment Plan',
      date: '2023-12-15',
      doctor: 'Dr. Samarpita Gaba',
      status: 'available'
    }
  ];

  const invoices = [
    {
      id: 'INV-001',
      date: '2024-01-20',
      amount: '$250',
      service: 'Dental Filling',
      status: 'paid'
    },
    {
      id: 'INV-002',
      date: '2023-12-15',
      amount: '$150',
      service: 'Regular Checkup',
      status: 'paid'
    }
  ];

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: User },
    { id: 'appointments', name: 'Appointments', icon: Calendar },
    { id: 'records', name: 'Medical Records', icon: FileText },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
              <p className="opacity-90">Here's an overview of your dental care journey with us.</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Next Appointment</h3>
                    <p className="text-sm text-gray-600">Feb 15, 2024</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-blue-600">10:00 AM</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Total Visits</h3>
                    <p className="text-sm text-gray-600">This year</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-green-600">8</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Outstanding</h3>
                    <p className="text-sm text-gray-600">Balance</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-purple-600">$0</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {appointmentHistory.slice(0, 3).map((appointment) => (
                  <div key={appointment.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{appointment.service}</h4>
                      <p className="text-sm text-gray-600">{appointment.date} • {appointment.doctor}</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {appointment.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'appointments':
        return (
          <div className="space-y-8">
            {/* Upcoming Appointments */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">Upcoming Appointments</h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Book New
                </motion.button>
              </div>
              
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Calendar className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{appointment.service}</h4>
                          <p className="text-gray-600">{appointment.date} at {appointment.time}</p>
                          <p className="text-sm text-gray-500">{appointment.doctor}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          appointment.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status}
                        </span>
                        <button className="text-blue-600 hover:text-blue-700 font-medium">
                          Reschedule
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Appointment History */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Appointment History</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Service</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Doctor</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointmentHistory.map((appointment) => (
                      <tr key={appointment.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">{appointment.date}</td>
                        <td className="py-4 px-4">{appointment.service}</td>
                        <td className="py-4 px-4">{appointment.doctor}</td>
                        <td className="py-4 px-4">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {appointment.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-semibold">{appointment.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'records':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Medical Records</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {medicalRecords.map((record) => (
                  <div key={record.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <FileText className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{record.type}</h4>
                        <p className="text-sm text-gray-600">{record.date} • {record.doctor}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                        <Eye className="h-4 w-4" />
                        <span>View</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'billing':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Billing & Invoices</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Invoice #</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Service</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Amount</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice) => (
                      <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium">{invoice.id}</td>
                        <td className="py-4 px-4">{invoice.date}</td>
                        <td className="py-4 px-4">{invoice.service}</td>
                        <td className="py-4 px-4 font-semibold">{invoice.amount}</td>
                        <td className="py-4 px-4">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {invoice.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <button className="text-blue-600 hover:text-blue-700 font-medium">
                            Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Account Settings</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="john.doe@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      defaultValue="+1 (234) 567-8900"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Notification Preferences</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium text-gray-800">Appointment Reminders</h5>
                        <p className="text-sm text-gray-600">Get notified before your appointments</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium text-gray-800">Email Notifications</h5>
                        <p className="text-sm text-gray-600">Receive updates via email</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Save Changes
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JD
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">John Doe</h3>
                  <p className="text-sm text-gray-600">Patient ID: #12345</p>
                </div>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
                
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-600 hover:bg-gray-100 transition-all duration-200 mt-6 pt-6 border-t border-gray-200">
                  <LogOut className="h-5 w-5" />
                  <span className="font-medium">Sign Out</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderTabContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PatientPortal;