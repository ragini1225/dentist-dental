import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { format } from 'date-fns';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of Regular Dental Checkups',
      excerpt: 'Discover why maintaining regular dental visits is crucial for your overall health and well-being.',
      content: 'Regular dental checkups are essential for maintaining optimal oral health...',
      image: 'https://images.unsplash.com/photo-1588776814546-b21fef52e1c1?auto=format&fit=crop&w=800&q=80',
      category: 'Preventive Care',
      author: 'Dr. Samarpita Gaba',
      date: new Date('2024-01-15'),
      readTime: '5 min read',
      tags: ['Prevention', 'Health', 'Checkups']
    },
    {
      id: 2,
      title: 'Understanding Dental Implants: A Complete Guide',
      excerpt: 'Everything you need to know about dental implants, from the procedure to recovery and maintenance.',
      content: 'Dental implants are a revolutionary solution for missing teeth...',
      image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=800&q=80',
      category: 'Oral Surgery',
      author: 'Dr. Samarpita Gaba',
      date: new Date('2024-01-10'),
      readTime: '8 min read',
      tags: ['Implants', 'Surgery', 'Restoration']
    },
    {
      id: 3,
      title: 'Cosmetic Dentistry: Transform Your Smile',
      excerpt: 'Learn about the various cosmetic dental procedures that can help you achieve the smile of your dreams.',
      content: 'Cosmetic dentistry offers numerous options to enhance your smile...',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981960a79e?auto=format&fit=crop&w=800&q=80',
      category: 'Cosmetic Dentistry',
      author: 'Dr. Samarpita Gaba',
      date: new Date('2024-01-05'),
      readTime: '6 min read',
      tags: ['Cosmetic', 'Veneers', 'Whitening']
    },
    {
      id: 4,
      title: 'Maintaining Oral Health During Pregnancy',
      excerpt: 'Essential tips for expectant mothers to maintain optimal oral health throughout pregnancy.',
      content: 'Pregnancy brings many changes to your body, including your oral health...',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80',
      category: 'General Health',
      author: 'Dr. Samarpita Gaba',
      date: new Date('2023-12-28'),
      readTime: '4 min read',
      tags: ['Pregnancy', 'Health', 'Care']
    },
    {
      id: 5,
      title: 'Emergency Dental Care: When to Seek Immediate Help',
      excerpt: 'Know the signs of dental emergencies and when to contact your dentist immediately.',
      content: 'Dental emergencies can happen at any time and require prompt attention...',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      category: 'Emergency Care',
      author: 'Dr. Samarpita Gaba',
      date: new Date('2023-12-20'),
      readTime: '3 min read',
      tags: ['Emergency', 'Pain', 'Urgent']
    },
    {
      id: 6,
      title: 'Children\'s Dental Health: Building Good Habits Early',
      excerpt: 'Tips for parents on how to establish healthy dental habits in children from an early age.',
      content: 'Starting good oral hygiene habits early is crucial for children\'s dental health...',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
      category: 'Pediatric Dentistry',
      author: 'Dr. Samarpita Gaba',
      date: new Date('2023-12-15'),
      readTime: '7 min read',
      tags: ['Children', 'Prevention', 'Habits']
    }
  ];

  const categories = [
    'all',
    'Preventive Care',
    'Oral Surgery',
    'Cosmetic Dentistry',
    'General Health',
    'Emergency Care',
    'Pediatric Dentistry'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

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
              Dental Health Blog
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Stay informed with the latest insights, tips, and advice on dental health 
              and oral care from our expert team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === 'all' && !searchTerm && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Article</h2>
            </motion.div>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{format(featuredPost.date, 'MMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600 font-medium">{featuredPost.author}</span>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {searchTerm ? `Search Results (${filteredPosts.length})` : 'Latest Articles'}
            </h2>
            <p className="text-gray-600">
              {searchTerm 
                ? `Showing results for "${searchTerm}"` 
                : 'Discover expert tips and insights for optimal dental health'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(selectedCategory === 'all' && !searchTerm ? 1 : 0).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{format(post.date, 'MMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center space-x-1 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                      >
                        <Tag className="h-3 w-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600 text-sm">{post.author}</span>
                    </div>
                    
                    <button className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-200">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or browse all categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                View All Articles
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter for the latest dental health tips and clinic updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;