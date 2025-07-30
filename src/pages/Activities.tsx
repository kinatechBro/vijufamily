import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const Activities: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [loading, setLoading] = useState(true);

  const activities = [
    {
      id: 1,
      title: 'Annual Quality Excellence Awards',
      description: 'Recognizing outstanding performance in quality control and product innovation across all departments.',
      date: '2024-03-15',
      location: 'Lagos Head Office',
      participants: 150,
      duration: '4 hours',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Community Health & Nutrition Workshop',
      description: 'Educational workshop for local communities about nutrition and healthy beverage choices.',
      date: '2024-02-20',
      location: 'Community Center, Lagos',
      participants: 200,
      duration: '6 hours',
      image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Employee Training Program',
      description: 'Comprehensive training on new production technologies and safety protocols.',
      date: '2024-01-10',
      location: 'Training Center, Lagos',
      participants: 80,
      duration: '8 hours',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Sustainability Initiative Launch',
      description: 'Launching our new eco-friendly packaging and sustainable production practices.',
      date: '2024-04-05',
      location: 'All Facilities',
      participants: 300,
      duration: '2 days',
      image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'upcoming'
    }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Activities
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay updated with our latest events, training programs, and community initiatives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                ref={ref}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                      activity.status === 'upcoming' 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-green-500 text-white'
                    }`}>
                      {activity.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {activity.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-700">
                        {new Date(activity.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-700">{activity.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-700">{activity.participants} participants</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-700">{activity.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;