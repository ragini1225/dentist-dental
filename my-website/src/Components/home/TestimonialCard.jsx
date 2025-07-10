import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <div className="flex space-x-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        <Quote className="h-8 w-8 text-blue-100 ml-auto" />
      </div>
      
      <p className="text-gray-600 italic leading-relaxed">
        "{testimonial.text}"
      </p>
    </motion.div>
  );
};

export default TestimonialCard;