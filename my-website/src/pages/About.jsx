import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Award, GraduationCap, Heart, Users, CheckCircle, Star, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const milestones = [
    { 
      year: '2008', 
      event: 'Started dental practice',
      description: 'Began my journey in dentistry with a focus on patient-centered care',
      icon: GraduationCap 
    },
    { 
      year: '2012', 
      event: 'Opened first clinic',
      description: 'Established a state-of-the-art dental facility in downtown',
      icon: Heart 
    },
    { 
      year: '2018', 
      event: 'Expanded to current facility',
      description: 'Moved to our current location with advanced equipment and technology',
      icon: Users 
    },
    { 
      year: '2023', 
      event: 'Reached 5000+ patients',
      description: 'Celebrated serving over 5000 patients with exceptional care',
      icon: Award 
    },
  ];

  const qualifications = [
    'Doctor of Dental Surgery (DDS) - Harvard School of Dental Medicine',
    'Certificate in Oral and Maxillofacial Surgery',
    'Advanced Implantology Certification',
    'Continuing Education in Cosmetic Dentistry',
    'Member of American Dental Association',
    'Board Certified in Oral Surgery',
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, understanding, and genuine concern for their well-being.',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for the highest standards in dental care, using the latest technology and techniques.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Patient-Centered',
      description: 'Your comfort, needs, and goals are at the center of everything we do.',
      color: 'from-blue-500 to-purple-500'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-teal-50/30"
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Meet Dr. Samarpita Gaba
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed mb-8 opacity-90"
                variants={itemVariants}
              >
                With over 15 years of experience in dental care, Dr. Samarpita Gaba is dedicated to 
                providing exceptional dental services with a gentle touch and advanced technology.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
                variants={itemVariants}
              >
                {[
                  { text: "DDS Harvard", icon: GraduationCap },
                  { text: "15+ Years Experience", icon: Calendar },
                  { text: "5000+ Patients", icon: Users }
                ].map((badge, index) => (
                  <motion.div
                    key={badge.text}
                    className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <badge.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{badge.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <motion.a
                  href="#contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-4 w-4" />
                  <span>Book Appointment</span>
                </motion.a>
                <motion.a
                  href="#story"
                  className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
                  <img
                    src="./public/samar.jpg"
                    alt="Dr. Samarpita Gaba"
                    className="w-full h-96 rounded-xl object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute -bottom-6 -left-6 bg-white text-gray-800 rounded-2xl p-6 shadow-xl z-20"
              >
                <motion.div 
                  className="text-3xl font-bold text-blue-600"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  15+
                </motion.div>
                <div className="text-sm font-medium">Years Experience</div>
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute -top-6 -right-6 bg-gradient-to-r from-teal-400 to-blue-400 text-white rounded-2xl p-4 shadow-xl z-20"
              >
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-semibold">5.0</span>
                </div>
                <div className="text-xs opacity-90">Patient Rating</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight"
                whileHover={{ scale: 1.02 }}
              >
                My Journey in 
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text"> Dentistry</span>
              </motion.h2>
              
              {[
                "My passion for dentistry began during my undergraduate studies in biology. I was fascinated by the intricate connection between oral health and overall well-being. This led me to pursue my Doctor of Dental Surgery degree at Harvard School of Dental Medicine.",
                "Throughout my career, I've been committed to staying at the forefront of dental technology and techniques. I believe that combining advanced technology with compassionate care creates the best possible experience for my patients.",
                "When I'm not in the clinic, I enjoy spending time with my family, reading dental journals, and volunteering at local community health centers to provide dental care to underserved populations."
              ].map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-lg text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}

              <motion.div
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Based in Downtown</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>Available for Consultations</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="./public/samar.jpg"
                  alt="Dr. Samarpita Gaba at work"
                  className="w-full h-96 rounded-2xl shadow-2xl object-cover"
                />
              </motion.div>
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl"
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Professional 
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text"> Milestones</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of continuous learning and dedication to dental excellence.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-teal-600 rounded-full"
              style={{ height: `${milestones.length * 200}px` }}
              initial={{ height: 0 }}
              whileInView={{ height: `${milestones.length * 200}px` }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                className={`relative flex items-center mb-20 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <motion.div 
                  className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <div className={`flex items-center space-x-3 mb-4 ${
                      index % 2 === 0 ? 'justify-end' : 'justify-start'
                    }`}>
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-3 rounded-full"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <milestone.icon className="h-6 w-6" />
                      </motion.div>
                      <span className="text-3xl font-bold text-blue-600">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-600 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 + 0.5, type: "spring", stiffness: 300 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Qualifications Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Education & 
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text"> Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to excellence through continuous education and professional development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {qualifications.map((qualification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <motion.div
                  className="flex items-start space-x-4 bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-full"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                  </motion.div>
                  <span className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                    {qualification}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core 
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text"> Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our practice and shape every patient interaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group"
              >
                <motion.div
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundImage: `linear-gradient(to bottom right, ${value.color.split(' ')[0].slice(5)}, ${value.color.split(' ')[1].slice(3)})` }}
                  />
                  
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} text-white rounded-full mb-6 relative z-10`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <value.icon className="h-8 w-8" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 relative z-10">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">
                    {value.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;