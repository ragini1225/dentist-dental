import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { format, addDays, isWeekend, isBefore, startOfDay } from 'date-fns';

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Generate available dates (next 30 days, excluding weekends)
  const generateAvailableDates = () => {
    const dates = [];
    const today = startOfDay(new Date());
    
    for (let i = 1; i <= 45; i++) {
      const date = addDays(today, i);
      if (!isWeekend(date)) {
        dates.push(date);
      }
    }
    return dates.slice(0, 20); // Show next 20 available dates
  };

  const availableDates = generateAvailableDates();

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  const services = [
    { id: 'consultation', name: 'Initial Consultation', duration: '60 min', price: '$150' },
    { id: 'cleaning', name: 'Dental Cleaning', duration: '45 min', price: '$120' },
    { id: 'filling', name: 'Dental Filling', duration: '60 min', price: '$200' },
    { id: 'whitening', name: 'Teeth Whitening', duration: '90 min', price: '$400' },
    { id: 'extraction', name: 'Tooth Extraction', duration: '45 min', price: '$250' },
    { id: 'implant', name: 'Dental Implant Consultation', duration: '75 min', price: '$300' },
    { id: 'emergency', name: 'Emergency Visit', duration: '30 min', price: '$200' },
  ];

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Appointment Data:', {
      ...data,
      date: selectedDate,
      time: selectedTime
    });
    
    setIsSubmitted(true);
    setIsLoading(false);
    reset();
    setSelectedDate(null);
    setSelectedTime('');
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-16 min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full mx-4 bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Appointment Booked Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for booking with us. We'll send you a confirmation email shortly with 
            all the details and preparation instructions.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Book Another Appointment
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Schedule your visit with Dr. Samarpita Gaba and take the first step 
              towards optimal oral health and a beautiful smile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-8">
              <h2 className="text-2xl font-bold mb-2">Schedule Your Visit</h2>
              <p className="opacity-90">Fill out the form below and we'll confirm your appointment within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <User className="h-5 w-5 mr-2 text-blue-600" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      {...register('firstName', { required: 'First name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your first name"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      {...register('lastName', { required: 'Last name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your last name"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone', { required: 'Phone number is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="+1 (234) 567-8900"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
                  Select Service
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className="relative flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                      <input
                        type="radio"
                        value={service.id}
                        {...register('service', { required: 'Please select a service' })}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-800">{service.name}</span>
                          <span className="text-blue-600 font-semibold">{service.price}</span>
                        </div>
                        <span className="text-sm text-gray-500">{service.duration}</span>
                      </div>
                      <div className="ml-4 w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 transition-opacity" />
                      </div>
                    </label>
                  ))}
                </div>
                {errors.service && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Date Selection */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Choose Date & Time
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Preferred Date *
                    </label>
                    <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                      {availableDates.map((date) => (
                        <button
                          key={date.toISOString()}
                          type="button"
                          onClick={() => setSelectedDate(date)}
                          className={`p-3 text-sm rounded-lg border transition-all duration-200 ${
                            selectedDate && format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                          }`}
                        >
                          <div className="font-medium">{format(date, 'MMM d')}</div>
                          <div className="text-xs opacity-75">{format(date, 'EEEE')}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Preferred Time *
                    </label>
                    <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          disabled={!selectedDate}
                          className={`p-3 text-sm rounded-lg border transition-all duration-200 ${
                            selectedTime === time
                              ? 'bg-blue-600 text-white border-blue-600'
                              : selectedDate
                              ? 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                              : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    {!selectedDate && (
                      <p className="mt-2 text-sm text-gray-500">Please select a date first</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  {...register('notes')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Any specific concerns, questions, or special requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  type="submit"
                  disabled={isLoading || !selectedDate || !selectedTime}
                  whileHover={{ scale: !isLoading ? 1.02 : 1 }}
                  whileTap={{ scale: !isLoading ? 0.98 : 1 }}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      <span>Booking...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="h-5 w-5" />
                      <span>Book Appointment</span>
                    </>
                  )}
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="sm:w-auto bg-gray-100 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Instead</span>
                </motion.button>
              </div>

              <div className="text-center text-sm text-gray-500">
                By booking an appointment, you agree to our terms of service and privacy policy.
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Appointments;