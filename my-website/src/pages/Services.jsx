import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Star, Heart, Smile, Zap, Eye, ChevronDown, CheckCircle, Clock, Award } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'general',
      icon: Shield,
      title: 'General Dentistry',
      subtitle: 'Comprehensive oral health care',
      description: 'Complete preventive and restorative dental care to maintain optimal oral health.',
      image: 'https://images.unsplash.com/photo-1588776814546-b21fef52e1c1?auto=format&fit=crop&w=800&q=80',
      features: [
        'Routine Cleanings & Examinations',
        'Digital X-rays & Imaging',
        'Fillings & Restorations',
        'Root Canal Therapy',
        'Preventive Care Programs',
        'Oral Health Education'
      ],
      duration: '30-90 minutes',
      price: 'Starting from $150'
    },
    {
      id: 'cosmetic',
      icon: Star,
      title: 'Cosmetic Dentistry',
      subtitle: 'Transform your smile',
      description: 'Advanced aesthetic treatments to enhance your smile and boost your confidence.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981960a79e?auto=format&fit=crop&w=800&q=80',
      features: [
        'Professional Teeth Whitening',
        'Porcelain Veneers',
        'Dental Bonding',
        'Smile Makeovers',
        'Gum Contouring',
        'Invisalign Clear Aligners'
      ],
      duration: '1-3 hours',
      price: 'Starting from $500'
    },
    {
      id: 'surgery',
      icon: Heart,
      title: 'Oral Surgery',
      subtitle: 'Advanced surgical procedures',
      description: 'Expert surgical care including implants, extractions, and reconstructive procedures.',
      image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=800&q=80',
      features: [
        'Dental Implants',
        'Wisdom Tooth Extraction',
        'Bone Grafting',
        'Sinus Lift Procedures',
        'Oral Pathology',
        'Sedation Options Available'
      ],
      duration: '1-4 hours',
      price: 'Starting from $800'
    },
    {
      id: 'orthodontics',
      icon: Smile,
      title: 'Orthodontics',
      subtitle: 'Straighten your smile',
      description: 'Modern orthodontic solutions to achieve perfectly aligned teeth and improved function.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      features: [
        'Traditional Metal Braces',
        'Clear Ceramic Braces',
        'Invisalign Treatment',
        'Retainers & Maintenance',
        'Early Orthodontic Treatment',
        'Adult Orthodontics'
      ],
      duration: '12-24 months',
      price: 'Starting from $3,000'
    },
    {
      id: 'emergency',
      icon: Zap,
      title: 'Emergency Care',
      subtitle: '24/7 urgent dental care',
      description: 'Immediate relief for dental emergencies with same-day appointments available.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80',
      features: [
        'Severe Tooth Pain Relief',
        'Broken Tooth Repair',
        'Lost Filling/Crown Replacement',
        'Dental Trauma Treatment',
        'Abscess & Infection Care',
        'After-Hours Emergency Line'
      ],
      duration: '30-60 minutes',
      price: 'Starting from $200'
    },
    {
      id: 'pediatric',
      icon: Eye,
      title: 'Pediatric Dentistry',
      subtitle: 'Gentle care for kids',
      description: 'Specialized dental care designed to make children comfortable and build healthy habits.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
      features: [
        'Child-Friendly Environment',
        'Preventive Care Programs',
        'Fluoride Treatments',
        'Dental Sealants',
        'Early Orthodontic Assessment',
        'Behavior Management Techniques'
      ],
      duration: '30-45 minutes',
      price: 'Starting from $100'
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
              Comprehensive Dental Services
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              From routine cleanings to complex procedures, we offer complete dental care 
              tailored to your unique needs and goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of dental treatments, each delivered with 
              the highest standards of care and precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                  activeService === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                    <p className="text-sm opacity-90">{service.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span>{service.price}</span>
                    </div>
                  </div>

                  <button
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveService(index);
                    }}
                  >
                    <span>View Details</span>
                    <ChevronDown className={`h-4 w-4 transform transition-transform ${
                      activeService === index ? 'rotate-180' : ''
                    }`} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {activeService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <button
                  onClick={() => setActiveService(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full hover:bg-white transition-colors"
                >
                  ×
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                      {React.createElement(services[activeService].icon, { className: "h-6 w-6" })}
                    </div>
                    <h2 className="text-3xl font-bold">{services[activeService].title}</h2>
                  </div>
                  <p className="text-lg opacity-90">{services[activeService].subtitle}</p>
                </div>
              </div>

              <div className="p-8">
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      What's Included
                    </h3>
                    <div className="space-y-3">
                      {services[activeService].features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-800 mb-2">Duration</h4>
                      <p className="text-gray-600">{services[activeService].duration}</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-800 mb-2">Investment</h4>
                      <p className="text-gray-600">{services[activeService].price}</p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
                    >
                      Schedule Consultation
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule your consultation today and let us help you achieve the smile you've always wanted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Book Appointment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Call: (234) 567-8900
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;