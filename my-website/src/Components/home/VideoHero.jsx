import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Play, ArrowRight, Sparkles, Star, Heart } from 'lucide-react';

const VideoHero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80"
        >
          <source src="/api/placeholder/video" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-teal-900/80" />
      </div>

      {/* Fallback Image */}
      {!isVideoLoaded && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-teal-900/80" />
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-5 w-5 text-yellow-300" />
            </motion.div>
            <span className="text-white font-semibold">Award-Winning Dental Care</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block"
            >
              Experience
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block bg-gradient-to-r from-yellow-300 via-blue-200 to-teal-200 bg-clip-text text-transparent"
            >
              Exceptional
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="block"
            >
              Dental Care
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xl md:text-3xl max-w-4xl mx-auto leading-relaxed opacity-90"
          >
            At Dr. Samarpita Gaba's clinic, we combine{' '}
            <motion.span
              className="text-yellow-300 font-semibold"
              animate={{ textShadow: ["0 0 0px #fbbf24", "0 0 20px #fbbf24", "0 0 0px #fbbf24"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              cutting-edge technology
            </motion.span>
            {' '}with compassionate care to deliver the highest quality dental treatments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <Link
              to="/appointments"
              className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 hover:from-blue-600 hover:via-purple-600 hover:to-teal-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <Calendar className="h-6 w-6" />
              </motion.div>
              <span className="relative z-10">Book Your Appointment</span>
              <motion.div
                className="relative z-10"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="h-6 w-6" />
              </motion.div>
              
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                animate={{ x: [-100, 400] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </Link>

            <motion.button 
              className="group inline-flex items-center space-x-3 border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-500 backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Play className="h-6 w-6" />
                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-white rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <span>Watch Our Story</span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-wrap justify-center items-center gap-8 pt-12 text-white/80"
          >
            {[
              { icon: Star, text: "5-Star Rated", count: "500+" },
              { icon: Heart, text: "Happy Patients", count: "5000+" },
              { icon: Calendar, text: "Years Experience", count: "15+" }
            ].map((item, index) => (
              <motion.div
                key={item.text}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  <item.icon className="h-5 w-5 text-yellow-300" />
                </motion.div>
                <div className="text-left">
                  <div className="text-lg font-bold">{item.count}</div>
                  <div className="text-sm opacity-80">{item.text}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center relative"
          >
            <motion.div
              animate={{ y: [0, 16, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/75 rounded-full mt-3"
            />
            
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 border-2 border-white/30 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoHero;