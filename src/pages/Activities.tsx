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
      title: "Viju Milk Continues LongStanding Children's Day Tradition with 'Celebrate Their Brilliance' Campaign Across Lagos and Ogun States",
      description: "As part of its enduring commitment to community development and children's welfare, Viju Milk celebrated Children's Day with special events across Lagos and Ogun States.",
      date: '2025-05-28',
      location: 'Lagos and Ogun States',
      participants: 500,
      duration: '1 day',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed'
    },
    {
      id: 2,
      title: "Children's Day Celebration",
      description: "In the spirit of Children's Day, Viju Milk is proud to announce its annual celebration dedicated to the joy and development of children in our communities.",
      date: '2024-06-05',
      location: 'Community Centers, Lagos',
      participants: 350,
      duration: '6 hours',
      image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Viju Spreads Joy This Holiday Season: Donates Products to Schools and NGOs for Christmas Celebrations',
      description: 'In the spirit of spreading joy and fostering community spirit, Viju donated products to schools and NGOs for Christmas celebrations.',
      date: '2023-12-12',
      location: 'Various Schools and NGOs',
      participants: 1000,
      duration: '2 weeks',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed'
    },
    {
      id: 4,
      title: "Children's Day Celebration",
      description: "In line with the international children's day, Viju joined in celebrating and supporting children across our communities.",
      date: '2023-05-26',
      location: 'Multiple Locations',
      participants: 300,
      duration: '1 day',
      image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed'
    },
    {
      id: 5,
      title: "African's Most Preferred Premium Healthy Drinking Table Water Brand of The Year 2022",
      description: "The starting point of all achievements is desire. We are proud to be recognized as Africa's most preferred premium healthy drinking table water brand.",
      date: '2022-08-15',
      location: 'Lagos, Nigeria',
      participants: 200,
      duration: 'Award Ceremony',
      image: 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed'
    },
    {
      id: 6,
      title: "The Most Reliable Premium Bottle Water Brand of the Year",
      description: "The starting point of all achievements is desire. Viju Industries received recognition as the most reliable premium bottle water brand of the year.",
      date: '2022-05-10',
      location: 'Lagos, Nigeria',
      participants: 150,
      duration: 'Award Ceremony',
      image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed'
    },
    {
      id: 7,
      title: "V-Smartic Wheat Milk Drink and V-Joy Chocolate Milk Drink",
      description: "Viju Industries Nigeria Limited has introduced a new range of delicious and nutritious milk drinks: V-Smartic wheat milk and V-Joy chocolate milk.",
      date: '2020-07-19',
      location: 'Nationwide',
      participants: 500,
      duration: 'Product Launch',
      image: 'https://images.pexels.com/photos/5946650/pexels-photo-5946650.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed'
    },
    {
      id: 8,
      title: "VIJU EDUCATIONAL TOUR (EXCURSION)",
      description: "Viju Educational Tour (Excursion) 2020 kicks off in February, providing educational opportunities and facility tours for students.",
      date: '2020-07-19',
      location: 'Viju Industries Facilities',
      participants: 300,
      duration: 'Ongoing Program',
      image: 'https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed'
    },
    {
      id: 9,
      title: "Viju Milk Support Lagos and Ogun State Government Fight Against COVID-19",
      description: "Viju Industries (Nigeria) Limited, a leading player in the dairy industry, supported Lagos and Ogun State Governments in the fight against COVID-19.",
      date: '2020-07-19',
      location: 'Lagos and Ogun States',
      participants: 'Widespread',
      duration: 'COVID-19 Relief Period',
      image: 'https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed'
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
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
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
                        ? 'bg-red-500 text-white' 
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