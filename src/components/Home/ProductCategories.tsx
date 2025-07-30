import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Droplets, Zap, Milk } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../UI/Card';
import Button from '../UI/Button';

const ProductCategories: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = [
    {
      id: 'juices',
      title: 'Fresh Juices',
      description: 'Premium quality juices made from the finest fruits, bursting with natural flavors and essential nutrients',
      image: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Droplets,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      products: ['Orange Juice', 'Apple Juice', 'Mixed Fruit', 'Seasonal Specials']
    },
    {
      id: 'beverages',
      title: 'Refreshing Beverages',
      description: 'Sparkling and still beverages crafted for every occasion, delivering refreshment and energy',
      image: 'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Zap,
      gradient: 'from-emerald-500 to-green-500',
      bgGradient: 'from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20',
      products: ['Sparkling Water', 'Flavored Drinks', 'Energy Drinks', 'Soft Drinks']
    },
    {
      id: 'dairy',
      title: 'Pure Dairy',
      description: 'Fresh dairy products from trusted local farms, rich in nutrients and authentic taste',
      image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Milk,
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      products: ['Fresh Milk', 'Yogurt', 'Cheese', 'Butter']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-full text-orange-700 dark:text-orange-300 text-sm font-medium mb-6"
          >
            Our Product Range
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Premium Product Categories
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Discover our wide range of premium products, each crafted with care and attention to quality, 
            bringing you the finest taste experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card hover interactive className="h-full overflow-hidden group">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20`}>
                      <category.icon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Product List */}
                  <div className="space-y-3 mb-8">
                    {category.products.map((product, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                        <div className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                        <span className="font-medium">{product}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Link
                    to={`/products?category=${category.id}`}
                    className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold group transition-colors duration-200"
                  >
                    View Products
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-30 translate-y-30"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience Quality?
              </h3>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Explore our complete product range and discover why thousands of customers trust Viju Industries for their beverage and dairy needs.
              </p>
              <Link to="/products">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="bg-white text-red-600 hover:bg-red-50 border-0 shadow-lg hover:shadow-xl"
                >
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;