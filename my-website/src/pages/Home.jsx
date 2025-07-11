import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Award, Users, Clock, Star, ArrowRight, Play, Shield, Heart, Sparkles, CheckCircle } from 'lucide-react';
import VideoHero from '../components/home/VideoHero';
import ServiceCard from '../components/home/ServiceCard';
import TestimonialCard from '../components/home/TestimonialCard';
import StatsSection from '../components/home/StatsSection';

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: 'General Dentistry',
      description: 'Comprehensive oral health care including cleanings, fillings, and preventive treatments.',
      image: 'https://images.unsplash.com/photo-1588776814546-b21fef52e1c1?auto=format&fit=crop&w=600&q=80',
    },
    {
      icon: Star,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, whitening, and aesthetic dental procedures.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981960a79e?auto=format&fit=crop&w=600&q=80',
    },
    {
      icon: Heart,
      title: 'Oral Surgery',
      description: 'Expert surgical procedures including implants, extractions, and reconstructive surgery.',
      image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Dr. Samarpita and her team provided exceptional care. The advanced technology and gentle approach made my treatment comfortable and effective.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Outstanding dental care! The clinic is modern, clean, and the staff is incredibly professional. Highly recommend for all dental needs.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'The best dental experience I\'ve ever had. Dr. Samarpita explained everything clearly and the results exceeded my expectations.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    },
  ];

  const features = [
    { 
      icon: Award, 
      title: 'Expert Care', 
      description: '15+ years of dental excellence',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    { 
      icon: Users, 
      title: '5000+ Patients', 
      description: 'Trusted by thousands of families',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
    { 
      icon: Clock, 
      title: 'Flexible Hours', 
      description: 'Evening and weekend appointments',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    { 
      icon: Shield, 
      title: 'Advanced Technology', 
      description: 'Latest dental equipment and techniques',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
  ];

  const benefits = [
    'State-of-the-art digital imaging',
    'Pain-free treatment options',
    'Flexible payment plans',
    'Emergency care available',
    'Insurance accepted',
    'Family-friendly environment'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen overflow-hidden"
    >
      {/* Hero Section with Video Background */}
      <VideoHero />

      {/* Floating Elements Animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Features Section with Enhanced Animations */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-teal-100 px-6 py-3 rounded-full mb-6"
            >
              <Sparkles className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-semibold">Why Choose Our Dental Clinic?</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Experience the{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Difference
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art technology, expert care, and patient-centered approach 
              that sets us apart from the rest.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className={`relative group ${feature.bgColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden`}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={false}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Floating Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} text-white rounded-2xl mb-6 group-hover:shadow-lg relative z-10`}
                >
                  <feature.icon className="h-8 w-8" />
                  
                  {/* Pulse Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl`}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <motion.h3 
                  className={`text-xl font-bold mb-3 group-hover:${feature.iconColor} transition-colors duration-300`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {feature.description}
                </motion.p>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className={`h-5 w-5 ${feature.iconColor}`} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with 3D Effects */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-teal-200 rounded-full opacity-20"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg"
            >
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-gray-800 font-semibold">Premium Services</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Dental Care
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tailored treatments designed to meet your unique needs and exceed your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Link
              to="/services"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-10 py-4 rounded-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              
              <span className="relative z-10 font-semibold">Explore All Services</span>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="relative z-10"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
              
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{ x: [-100, 300] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Benefits Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 px-6 py-3 rounded-full mb-8"
              >
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-800 font-semibold">Patient Benefits</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                Why Patients{' '}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Choose Us
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-full"
                    >
                      <CheckCircle className="h-4 w-4 text-white" />
                    </motion.div>
                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  alt="Modern dental clinic"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
                
                {/* Floating Play Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.button
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-full shadow-xl hover:bg-white transition-all duration-300 group"
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0.4)",
                        "0 0 0 20px rgba(59, 130, 246, 0)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="h-8 w-8 text-blue-600 group-hover:text-blue-700" />
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="text-3xl font-bold text-blue-600 mb-1">99%</div>
                <div className="text-sm text-gray-600">Patient Satisfaction</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="text-3xl font-bold text-teal-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Emergency Care</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Enhanced Cards */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg"
            >
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-gray-800 font-semibold">Patient Stories</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Patients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real stories from real patients who trust us with their dental care and beautiful smiles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
            >
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-white font-semibold">Ready to Start?</span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Transform Your{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                Smile Today
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Schedule your consultation and take the first step towards optimal oral health 
              and the confident smile you deserve.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/appointments"
                className="group relative inline-flex items-center space-x-3 bg-white text-blue-600 px-10 py-4 rounded-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105 font-semibold overflow-hidden"
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                <Calendar className="h-6 w-6 relative z-10 group-hover:text-white transition-colors" />
                <span className="relative z-10 group-hover:text-white transition-colors">Book Your Appointment</span>
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                />
              </Link>

              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center space-x-3 border-2 border-white/50 text-white px-10 py-4 rounded-full hover:bg-white/10 hover:border-white backdrop-blur-sm transition-all duration-500 font-semibold"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Play className="h-6 w-6" />
                </motion.div>
                <span>Call: (234) 567-8900</span>
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/80"
            >
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm">Fully Licensed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span className="text-sm">Award Winning</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5" />
                <span className="text-sm">5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5" />
                <span className="text-sm">Patient Focused</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;