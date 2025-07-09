import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
            <service.icon className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {service.description}
        </p>
        <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-all duration-300">
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;