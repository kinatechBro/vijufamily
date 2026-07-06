import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Send,
  Building,
  Users,
  MapPin,
  DollarSign,
  User,
  Mail,
  Phone,
  Hash,
  Truck,
  MapPinned,
  Home,
  CheckCircle,
  ClipboardList,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { DistributorForm } from '../types';
import LoadingSpinner from '../components/UI/LoadingSpinner';

// Applications are delivered by email through FormSubmit (no backend needed).
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/distributor@vijufamily.com';

// Validate exactly the fields rendered in the form below.
const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  companyName: yup.string().required('Business name is required'),
  regNumber: yup.string().required('Registration number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  numberOfTrucks: yup.string().required('Number of trucks is required'),
  truckType: yup.string().required('Truck type is required'),
  territory: yup.string().required('Location/area cover is required'),
  address: yup.string().required('Address is required'),
});

type FieldConfig = {
  name: keyof DistributorForm;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  type?: string;
  placeholder: string;
  textarea?: boolean;
};

const DistributorRegistration: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DistributorForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: DistributorForm) => {
    setSubmitError(false);
    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Distributor Application — ${data.companyName}`,
          _template: 'table',
          'First Name': data.firstName,
          'Last Name': data.lastName,
          'Business Name': data.companyName,
          'Reg Number': data.regNumber,
          Email: data.email,
          Phone: data.phone,
          'No. of Trucks': data.numberOfTrucks,
          'Truck Types': data.truckType,
          'Location/Area Cover': data.territory,
          Address: data.address,
        }),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      toast.success(
        'Thank you for your interest! We will review your application and get back to you soon.',
        { duration: 6000 }
      );
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(true);
      toast.error('There was an error submitting your application. Please try again.');
    }
  };

  const benefits = [
    {
      icon: Building,
      title: 'Established Brand',
      copy: 'Partner with a trusted name in the industry',
    },
    {
      icon: Users,
      title: 'Marketing Support',
      copy: 'Comprehensive marketing and promotional support',
    },
    {
      icon: MapPin,
      title: 'Territory Protection',
      copy: 'Exclusive territory rights for your area',
    },
    {
      icon: DollarSign,
      title: 'Attractive Margins',
      copy: 'Competitive pricing and profit margins',
    },
  ];

  const personalFields: FieldConfig[] = [
    { name: 'firstName', label: 'First Name', icon: User, placeholder: 'Enter first name' },
    { name: 'lastName', label: 'Last Name', icon: User, placeholder: 'Enter last name' },
  ];

  const businessFields: FieldConfig[] = [
    { name: 'companyName', label: 'Business Name', icon: Building, placeholder: 'Enter company name' },
    { name: 'regNumber', label: 'Registration Number', icon: Hash, placeholder: 'Enter registration number' },
    { name: 'email', label: 'Email Address', icon: Mail, type: 'email', placeholder: 'Enter email address' },
    { name: 'phone', label: 'Phone Number', icon: Phone, type: 'tel', placeholder: 'Enter phone number' },
  ];

  const fleetFields: FieldConfig[] = [
    { name: 'numberOfTrucks', label: 'No. of Trucks', icon: Truck, placeholder: 'e.g. 3' },
    { name: 'truckType', label: 'Truck Type', icon: Truck, placeholder: 'e.g. 5-tonne flatbed' },
    { name: 'territory', label: 'Location / Area Cover', icon: MapPinned, placeholder: 'Enter preferred territory' },
  ];

  const renderField = (field: FieldConfig, index: number) => {
    const Icon = field.icon;
    const error = errors[field.name];

    return (
      <motion.div
        key={field.name}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="space-y-2"
      >
        <label
          htmlFor={field.name}
          className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-slate-200"
        >
          <Icon className="w-4 h-4 text-orange-500" />
          {field.label} <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type={field.type ?? 'text'}
            id={field.name}
            {...register(field.name)}
            className={`w-full pl-4 pr-4 py-3.5 bg-white/70 dark:bg-slate-700/40 backdrop-blur-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-400 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 ${
              error
                ? 'border-red-400 dark:border-red-500 focus:ring-red-500/10'
                : 'border-gray-200 dark:border-slate-600/60 focus:border-orange-500 dark:focus:border-orange-400 focus:ring-orange-500/10'
            }`}
            placeholder={field.placeholder}
          />
        </div>
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -6, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-sm font-medium text-red-500 dark:text-red-400"
            >
              {error.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-red-50 via-orange-50 to-red-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-300/30 dark:bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-red-300/30 dark:bg-red-500/10 rounded-full blur-3xl" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 dark:bg-slate-800/70 backdrop-blur text-sm font-semibold text-orange-600 dark:text-orange-400 shadow-sm mb-6">
              <ClipboardList className="w-4 h-4" />
              Distributor Partnership Program
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Become Our Distributor
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-300 mb-8">
              Join our growing network of distributors and be part of a leading beverage company
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map(({ icon: Icon, title, copy }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-slate-400">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-gray-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 dark:border-slate-700/40 p-8 md:p-12">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 260, delay: 0.1 }}
                      className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/20"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      Application Submitted!
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                      Thank you for your interest in partnering with Viju Industries. Our team will
                      review your application and get back to you soon.
                    </p>
                    <motion.button
                      onClick={() => setSubmitted(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-xl shadow-orange-500/20"
                    >
                      Submit Another Application
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="text-center mb-10">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Distributor Registration Form
                      </h2>
                      <p className="text-gray-500 dark:text-slate-400">
                        Fill in your details below and our partnerships team will reach out.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                      {/* Personal Information */}
                      <div>
                        <div className="flex items-center gap-2 mb-5">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-bold">
                            1
                          </span>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            Personal Information
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {personalFields.map((f, i) => renderField(f, i))}
                        </div>
                      </div>

                      {/* Business Information */}
                      <div>
                        <div className="flex items-center gap-2 mb-5">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-bold">
                            2
                          </span>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            Business Information
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {businessFields.map((f, i) => renderField(f, i))}
                        </div>
                      </div>

                      {/* Fleet & Coverage */}
                      <div>
                        <div className="flex items-center gap-2 mb-5">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-bold">
                            3
                          </span>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            Fleet &amp; Coverage
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {fleetFields.map((f, i) => renderField(f, i))}
                        </div>
                      </div>

                      {/* Address */}
                      <div>
                        <div className="flex items-center gap-2 mb-5">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-bold">
                            4
                          </span>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            Address
                          </h3>
                        </div>
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4 }}
                          className="space-y-2"
                        >
                          <label
                            htmlFor="address"
                            className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-slate-200"
                          >
                            <Home className="w-4 h-4 text-orange-500" />
                            Complete Address <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="address"
                            rows={3}
                            {...register('address')}
                            className={`w-full px-4 py-3.5 bg-white/70 dark:bg-slate-700/40 backdrop-blur-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-400 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 resize-none ${
                              errors.address
                                ? 'border-red-400 dark:border-red-500 focus:ring-red-500/10'
                                : 'border-gray-200 dark:border-slate-600/60 focus:border-orange-500 dark:focus:border-orange-400 focus:ring-orange-500/10'
                            }`}
                            placeholder="Enter complete address"
                          />
                          <AnimatePresence>
                            {errors.address && (
                              <motion.p
                                initial={{ opacity: 0, y: -6, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-sm font-medium text-red-500 dark:text-red-400"
                              >
                                {errors.address.message}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </div>

                      {submitError && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-5 bg-red-50/80 dark:bg-red-900/20 backdrop-blur-xl border-2 border-red-200/50 dark:border-red-800/50 rounded-2xl"
                        >
                          <p className="text-red-600 dark:text-red-400 font-medium">
                            Something went wrong sending your application. Please try again, or email us
                            directly at distributor@vijufamily.com.
                          </p>
                        </motion.div>
                      )}

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-xl shadow-orange-500/20 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
                      >
                        {isSubmitting ? (
                          <>
                            <LoadingSpinner size="sm" />
                            <span className="ml-3">Submitting Application...</span>
                          </>
                        ) : (
                          <>
                            Submit Application
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DistributorRegistration;
