import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Send, MapPin, Phone, Mail, CheckCircle, Globe, Users, Clock, ArrowRight, MessageCircle, Zap } from 'lucide-react';
import { ContactForm as ContactFormType } from '../../types';
import { useContactFormMutation } from '../../hooks/useWordPress';
import LoadingSpinner from '../UI/LoadingSpinner';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  message: yup.string().required('Message is required'),
});

const ContactForm: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>({
    resolver: yupResolver(schema),
  });

  const contactMutation = useContactFormMutation({
    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = async (data: ContactFormType) => {
    try {
      await contactMutation.mutateAsync(data);
    } catch (error) {
      console.error('Contact form submission failed:', error);
    }
  };

  const contactMethods = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      primary: '1, Awose close Awosika Avenue',
      secondary: 'Off Sapara Street, Off Oba Akran road, Ikeja Industrial Estate, Ikeja, Lagos.',
      gradient: 'from-red-500 to-red-400',
      glowColor: 'red'
    },
    {
      icon: Phone,
      title: 'Call Us Directly',
      primary: '+2348161674349',
      secondary: '+2348168108573',
      gradient: 'from-red-400 to-red-500',
      glowColor: 'orange'
    },
    {
      icon: Mail,
      title: 'Send Email',
      primary: 'info@vijuindustries.com',
      secondary: 'We respond within 24 hours',
      gradient: 'from-red-600 to-red-400',
      glowColor: 'red'
    }
  ];

  const stats = [
    { icon: Users, value: '100K+', label: 'Happy Customers', color: 'text-red-500' },
    { icon: Globe, value: '15+', label: 'States Covered', color: 'text-orange-500' },
    { icon: Clock, value: '24/7', label: 'Support Available', color: 'text-red-600' },
    { icon: Zap, value: '99%', label: 'Response Rate', color: 'text-orange-600' }
  ];

  return (
    <div className="pt-16">
      {/* Ultra-Modern Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800"
      >
        {/* Dynamic gradient background with brand colors */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/80 via-red-50/60 to-red-100/70 dark:from-red-900/20 dark:via-red-800/10 dark:to-red-800/20"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-red-100/50 via-transparent to-red-100/40 dark:from-red-900/10 dark:via-transparent dark:to-red-900/10"></div>
          
          {/* Animated orbs with brand colors */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-200/40 to-red-200/40 dark:from-red-400/30 dark:to-red-400/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-red-200/30 to-red-200/30 dark:from-red-400/20 dark:to-red-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          
          {/* Floating shapes */}
          <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-red-200/30 dark:border-red-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-red-200/30 dark:border-red-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-orange-200 dark:bg-white/10 dark:border-white/20 text-orange-700 dark:text-orange-300 font-semibold text-sm shadow-xl"
            >
              <MessageCircle className="w-4 h-4 text-red-500" />
              Let's Start a Conversation
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            </motion.div>

            {/* Main headline */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-6xl md:text-8xl font-black leading-none"
              >
                <span className="block text-gray-900 dark:text-white">Get in</span>
                <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                  Touch
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-xl md:text-2xl text-gray-700 dark:text-white/80 leading-relaxed max-w-3xl mx-auto font-light"
              >
                Ready to experience the Viju Industries (Nigeria) Limited difference? We're here to answer your questions, discuss partnerships, and help you discover our premium product range.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border border-white/30 dark:border-slate-700/30 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`} />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section 
        ref={infoRef}
        className="py-20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-50/30 via-orange-50/20 to-red-50/30 dark:from-red-900/10 dark:via-orange-900/5 dark:to-red-900/10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Multiple Ways to 
              <span className="block bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose your preferred method to reach out. We're committed to providing exceptional support across all channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative font-bold"
              >
                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 dark:border-slate-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Floating glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${method.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10`}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{method.title}</h3>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{method.primary}</p>
                  <p className="text-gray-600 dark:text-gray-400">{method.secondary}</p>
                  
                  {/* Hover effect */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        ref={formRef}
        className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-50/20 via-transparent to-red-50/20 dark:from-red-900/5 dark:via-transparent dark:to-red-900/5"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-red-100/30 to-transparent dark:from-red-900/10 dark:to-transparent rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-red-100/30 to-transparent dark:from-red-900/10 dark:to-transparent rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Send Us a 
                <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                  Message
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/30 dark:border-slate-700/30 shadow-2xl">
              {contactMutation.isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
                    Thank you for reaching out to Viju Industries (Nigeria) Limited. Our team will review your message and respond within 24 hours.
                  </p>
                  <motion.button
                    onClick={() => contactMutation.reset()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-xl"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                        Full Name *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        id="name"
                        {...register('name')}
                        className="w-full px-6 py-4 bg-white/50 dark:bg-slate-700/50 backdrop-blur-xl border-2 border-gray-200/50 dark:border-slate-600/50 rounded-2xl focus:border-orange-500 dark:focus:border-orange-400 focus:ring-0 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-medium"
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm font-medium mt-2"
                        >
                          {errors.name?.message}
                        </motion.p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                        Email Address *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="email"
                        id="email"
                        {...register('email')}
                        className="w-full px-6 py-4 bg-white/50 dark:bg-slate-700/50 backdrop-blur-xl border-2 border-gray-200/50 dark:border-slate-600/50 rounded-2xl focus:border-orange-500 dark:focus:border-orange-400 focus:ring-0 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-medium"
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm font-medium mt-2"
                        >
                          {errors.email?.message}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                      Phone Number *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className="w-full px-6 py-4 bg-white/50 dark:bg-slate-700/50 backdrop-blur-xl border-2 border-gray-200/50 dark:border-slate-600/50 rounded-2xl focus:border-orange-500 dark:focus:border-orange-400 focus:ring-0 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-medium"
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm font-medium mt-2"
                      >
                        {errors.phone?.message}
                      </motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                      Your Message *
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      id="message"
                      rows={6}
                      {...register('message')}
                      className="w-full px-6 py-4 bg-white/50 dark:bg-slate-700/50 backdrop-blur-xl border-2 border-gray-200/50 dark:border-slate-600/50 rounded-2xl focus:border-orange-500 dark:focus:border-orange-400 focus:ring-0 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-medium resize-none"
                      placeholder="Tell us about your inquiry, partnership opportunities, or any questions you have..."
                    ></motion.textarea>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm font-medium mt-2"
                      >
                        {errors.message?.message}
                      </motion.p>
                    )}
                  </div>

                  {contactMutation.isError && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-6 bg-red-50/80 dark:bg-red-900/20 backdrop-blur-xl border-2 border-red-200/50 dark:border-red-800/50 rounded-2xl"
                    >
                      <p className="text-red-600 dark:text-red-400 font-medium">
                        Failed to send message. Please try again or contact us directly at info@vijuindustries.com
                      </p>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={contactMutation.isPending}
                    whileHover={{ scale: contactMutation.isPending ? 1 : 1.05 }}
                    whileTap={{ scale: contactMutation.isPending ? 1 : 0.95 }}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-2xl hover:shadow-red-500/25 focus:outline-none focus:ring-4 focus:ring-red-500/20"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <LoadingSpinner size="sm" />
                        <span className="ml-3">Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="mr-3 w-5 h-5" />
                        Send Message
                        <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Find Us on the 
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Map
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Visit our state-of-the-art facility in Lagos, Nigeria's industrial hub.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 dark:border-slate-700/30 shadow-2xl overflow-hidden group"
          >
            {/* Real Google Maps Integration */}
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.3792057147393896!3d6.552186995329129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0x4e5f306c8d8f0a0f!2sIkeja%20Industrial%20Estate%2C%20Ikeja%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1690883200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
                title="Viju Industries (Nigeria) Limited Location"
              ></iframe>
              
              {/* Overlay with company info */}
              <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/30 dark:border-slate-700/30">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm">Viju Industries (Nigeria) Limited</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 max-w-48">
                      1, Awose close Awosika Avenue, Off Sapara Street, Ikeja Industrial Estate
                    </p>
                  </div>
                </div>
              </div>

              {/* Action buttons overlay */}
              <div className="absolute bottom-4 right-4 flex gap-3">
                <motion.a
                  href={`https://www.google.com/maps/dir/?api=1&destination=1+Awose+close+Awosika+Avenue+Off+Sapara+Street+Off+Oba+Akran+road+Ikeja+Industrial+Estate+Ikeja+Lagos+Nigeria`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-xl text-sm flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Directions
                </motion.a>
                
                <motion.a
                  href={`https://www.google.com/maps/search/?api=1&query=1+Awose+close+Awosika+Avenue+Off+Sapara+Street+Off+Oba+Akran+road+Ikeja+Industrial+Estate+Ikeja+Lagos+Nigeria`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 text-gray-900 dark:text-white px-4 py-2 rounded-xl font-semibold hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 shadow-xl text-sm flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  View Larger
                </motion.a>
              </div>

              {/* Animated ping indicators */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Enhanced company details below map */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-center p-6 bg-white/50 dark:bg-slate-700/50 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-slate-600/30"
              >
                <MapPin className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Our Location</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Strategic location in Lagos Industrial Hub for optimal distribution
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-center p-6 bg-white/50 dark:bg-slate-700/50 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-slate-600/30"
              >
                <Clock className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Business Hours</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Mon - Fri: 8:00 AM - 5:00 PM<br />
                  Sat: 9:00 AM - 4:00 PM
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-center p-6 bg-white/50 dark:bg-slate-700/50 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-slate-600/30"
              >
                <Phone className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Quick Contact</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Call us for directions or<br />
                  immediate assistance
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;