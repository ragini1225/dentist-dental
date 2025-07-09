import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar, MessageSquare, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Contact form data:', data);
    // Handle form submission
    reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Clinic',
      details: [
        '123 Dental Avenue',
        'Medical District',
        'City, State 12345'
      ],
      action: 'Get Directions',
      link: '#'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+1 (234) 567-8900',
        '+1 (234) 567-8901 (Emergency)'
      ],
      action: 'Call Now',
      link: 'tel:+12345678900'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@drsamarpitaclinic.com',
        'appointments@drsamarpitaclinic.com'
      ],
      action: 'Send Email',
      link: 'mailto:info@drsamarpitaclinic.com'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ],
      action: 'Book Appointment',
      link: '/appointments'
    }
  ];

  const faqs = [
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, we accept most major dental insurance plans. Please contact our office to verify your coverage and benefits.'
    },
    {
      question: 'What should I expect during my first visit?',
      answer: 'Your first visit will include a comprehensive examination, digital X-rays if needed, and a consultation to discuss your treatment options.'
    },
    {
      question: 'Do you offer emergency dental services?',
      answer: 'Yes, we provide emergency dental care. Please call our emergency line for urgent situations outside of regular business hours.'
    },
    {
      question: 'How often should I visit the dentist?',
      answer: 'We recommend regular check-ups and cleanings every six months, though some patients may need more frequent visits based on their oral health needs.'
    }
  ];

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
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              We're here to help with all your dental needs. Reach out to us and 
              we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{info.title}</h3>
                <div className="space-y-2 mb-6">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <a
                  href={info.link}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <span>{info.action}</span>
                  <Send className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-3 rounded-full">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
                  <p className="text-gray-600">We'll respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                      <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
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
                      <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
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
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    {...register('subject', { required: 'Please select a subject' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Appointment Request</option>
                    <option value="question">General Question</option>
                    <option value="insurance">Insurance Inquiry</option>
                    <option value="emergency">Emergency</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive map coming soon</p>
                    <p className="text-sm text-gray-500">123 Dental Avenue, Medical District</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Find Us Here</h3>
                  <p className="text-gray-600 mb-4">
                    Our clinic is conveniently located in the heart of the medical district, 
                    with easy access to public transportation and ample parking.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Get Directions
                  </motion.button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <motion.a
                    href="/appointments"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <Calendar className="h-6 w-6" />
                    <span className="font-semibold">Book an Appointment</span>
                  </motion.a>
                  
                  <motion.a
                    href="tel:+12345678900"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-3 bg-gray-100 text-gray-700 p-4 rounded-lg hover:bg-gray-200 transition-all duration-300"
                  >
                    <Phone className="h-6 w-6" />
                    <span className="font-semibold">Call for Emergency</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our dental services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;