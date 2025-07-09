import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Stethoscope, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Patient Portal', path: '/patient-portal' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'General Dentistry', path: '/services#general' },
        { name: 'Cosmetic Dentistry', path: '/services#cosmetic' },
        { name: 'Oral Surgery', path: '/services#surgery' },
        { name: 'Orthodontics', path: '/services#orthodontics' },
      ],
    },
    {
      title: 'Contact Info',
      content: [
        { icon: MapPin, text: '123 Dental Avenue, Medical District, City 12345' },
        { icon: Phone, text: '+1 (234) 567-8900' },
        { icon: Mail, text: 'info@drsamarpitaclinic.com' },
        { icon: Clock, text: 'Mon-Fri: 9AM-6PM, Sat: 9AM-2PM' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-400 to-teal-400 p-3 rounded-full">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Samarpita Gaba</h3>
                <p className="text-blue-200 text-sm">Dental Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing exceptional dental care with cutting-edge technology and compassionate service. 
              Your smile is our priority.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-blue-200">{section.title}</h4>
              <div className="space-y-2">
                {section.links?.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
                {section.content?.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                    <item.icon className="h-4 w-4 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span className="leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2025 Dr. Samarpita Gaba Dental Clinic. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;