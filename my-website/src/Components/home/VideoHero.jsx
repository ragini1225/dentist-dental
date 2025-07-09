import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Patients', color: 'text-blue-600' },
    { icon: Award, value: '15+', label: 'Years Experience', color: 'text-teal-600' },
    { icon: Clock, value: '24/7', label: 'Emergency Care', color: 'text-indigo-600' },
    { icon: Heart, value: '99%', label: 'Satisfaction Rate', color: 'text-pink-600' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Our commitment to excellence is reflected in the numbers and the smiles we create.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4 group-hover:bg-white/20 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-4xl md:text-5xl font-bold text-white mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-blue-100 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;