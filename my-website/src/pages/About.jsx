import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart, Users, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2008', event: 'Started dental practice', icon: GraduationCap },
    { year: '2012', event: 'Opened first clinic', icon: Heart },
    { year: '2018', event: 'Expanded to current facility', icon: Users },
    { year: '2023', event: 'Reached 5000+ patients', icon: Award },
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
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for the highest standards in dental care, using the latest technology and techniques.',
    },
    {
      icon: Users,
      title: 'Patient-Centered',
      description: 'Your comfort, needs, and goals are at the center of everything we do.',
    },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Dr. Samarpita Gaba
              </h1>
              <p className="text-xl leading-relaxed mb-8 opacity-90">
                With over 15 years of experience in dental care, Dr. Samarpita Gaba is dedicated to 
                providing exceptional dental services with a gentle touch and advanced technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-medium">DDS Harvard</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-medium">15+ Years Experience</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-medium">5000+ Patients</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80"
                  alt="Dr. Samarpita Gaba"
                  className="w-full rounded-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                My Journey in Dentistry
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                My passion for dentistry began during my undergraduate studies in biology. I was 
                fascinated by the intricate connection between oral health and overall well-being. 
                This led me to pursue my Doctor of Dental Surgery degree at Harvard School of 
                Dental Medicine.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Throughout my career, I've been committed to staying at the forefront of dental 
                technology and techniques. I believe that combining advanced technology with 
                compassionate care creates the best possible experience for my patients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not in the clinic, I enjoy spending time with my family, reading dental 
                journals, and volunteering at local community health centers to provide dental 
                care to underserved populations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80"
                alt="Dr. Samarpita Gaba at work"
                className="w-full rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Professional Milestones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of continuous learning and dedication to dental excellence.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-teal-600 rounded-full"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`bg-white rounded-2xl p-6 shadow-lg ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-2 rounded-full">
                        <milestone.icon className="h-5 w-5" />
                      </div>
                      <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                    </div>
                    <p className="text-gray-700 font-medium">{milestone.event}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Education & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to excellence through continuous education and professional development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {qualifications.map((qualification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{qualification}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
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
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;