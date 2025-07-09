import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1588776814546-b21fef52e1c1?auto=format&fit=crop&w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1588776814546-b21fef52e1c1?auto=format&fit=crop&w=400&q=80',
      title: 'Modern Dental Equipment',
      category: 'equipment',
      description: 'State-of-the-art dental tools for precise treatments'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400&q=80',
      title: 'Patient Treatment Room',
      category: 'facility',
      description: 'Comfortable and modern treatment environment'
    },
    {
      id: 3,
      type: 'video',
      src: '/api/placeholder/video/dental-procedure.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1609840114035-3c981960a79e?auto=format&fit=crop&w=400&q=80',
      title: 'Cosmetic Dentistry Procedure',
      category: 'procedures',
      description: 'Watch our cosmetic dentistry transformation process'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
      title: 'Dr. Samarpita at Work',
      category: 'team',
      description: 'Our experienced dentist providing patient care'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=400&q=80',
      title: 'Surgical Suite',
      category: 'facility',
      description: 'Advanced surgical facilities for complex procedures'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80',
      title: 'Before & After Results',
      category: 'results',
      description: 'Amazing transformation results from our treatments'
    },
    {
      id: 7,
      type: 'video',
      src: '/api/placeholder/video/clinic-tour.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400&q=80',
      title: 'Virtual Clinic Tour',
      category: 'facility',
      description: 'Take a virtual tour of our modern dental facility'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80',
      title: 'Patient Consultation',
      category: 'team',
      description: 'Comprehensive patient consultation and care planning'
    }
  ];

  const categories = [
    { id: 'all', name: 'All', count: mediaItems.length },
    { id: 'facility', name: 'Facility', count: mediaItems.filter(item => item.category === 'facility').length },
    { id: 'equipment', name: 'Equipment', count: mediaItems.filter(item => item.category === 'equipment').length },
    { id: 'procedures', name: 'Procedures', count: mediaItems.filter(item => item.category === 'procedures').length },
    { id: 'team', name: 'Team', count: mediaItems.filter(item => item.category === 'team').length },
    { id: 'results', name: 'Results', count: mediaItems.filter(item => item.category === 'results').length },
  ];

  const filteredItems = filter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === filter);

  const openModal = (media, index) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const navigateMedia = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredItems.length
      : currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredItems[newIndex]);
  };

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
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Explore our state-of-the-art facility, advanced equipment, and the amazing 
              transformations we've achieved for our patients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                  onClick={() => openModal(item, index)}
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <Play className="h-8 w-8" />
                        </div>
                      </div>
                    )}

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                        <Eye className="h-5 w-5 text-gray-700" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-gray-500">No items found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Content */}
              <div className="relative">
                {selectedMedia.type === 'image' ? (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                ) : (
                  <video
                    src={selectedMedia.src}
                    controls
                    autoPlay
                    className="w-full h-auto max-h-[70vh]"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}

                {/* Navigation Buttons */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      onClick={() => navigateMedia('prev')}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full transition-all duration-300"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={() => navigateMedia('next')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full transition-all duration-300"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full transition-all duration-300"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Modal Footer */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedMedia.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedMedia.description}
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {selectedMedia.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;