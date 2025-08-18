import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Send, Building, Users, MapPin, DollarSign } from 'lucide-react';
import { DistributorForm } from '../types';

const schema = yup.object().shape({
  companyName: yup.string().required('Company name is required'),
  contactPerson: yup.string().required('Contact person is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  pincode: yup.string().required('Pincode is required'),
  businessType: yup.string().required('Business type is required'),
  experience: yup.string().required('Experience is required'),
  territory: yup.string().required('Territory is required'),
  investment: yup.string().required('Investment capacity is required'),
});

const DistributorRegistration: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DistributorForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: DistributorForm) => {
    try {
      // In a real app, this would submit to WordPress API
      console.log('Distributor registration submitted:', data);
      alert('Thank you for your interest! We will review your application and get back to you soon.');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  const businessTypes = [
    'Wholesale Distribution',
    'Retail Chain',
    'Supermarket',
    'Convenience Store',
    'Restaurant/Hotel',
    'Other'
  ];

  const experienceOptions = [
    'Less than 1 year',
    '1-3 years',
    '3-5 years',
    '5-10 years',
    'More than 10 years'
  ];

  const investmentOptions = [
    'Less than ₦500,000 Naria',
    '₦500,000-1,000,000 Naria',
    '₦1,000,000-2,500,000 Naria',
    '₦2,500,000-5,000,000 Naria',
    'More than ₦5,000,000 Naria'
  ];

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
              Become Our Distributor
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our growing network of distributors and be part of a leading beverage company
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Established Brand</h3>
              <p className="text-gray-600">Partner with a trusted name in the industry</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing Support</h3>
              <p className="text-gray-600">Comprehensive marketing and promotional support</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Territory Protection</h3>
              <p className="text-gray-600">Exclusive territory rights for your area</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Attractive Margins</h3>
              <p className="text-gray-600">Competitive pricing and profit margins</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Distributor Registration Form
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      {...register('firstName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter first name"
                    />
                    {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      {...register('lastName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter Last name"
                    />
                    {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
                  </div>
                </div>

                {/* Company Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      {...register('companyName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter company name"
                    />
                    {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="regNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Reg Number *
                    </label>
                    <input
                      type="text"
                      id="regNumber"
                      {...register('regNumber')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter Registration Number"
                    />
                    {errors.regNumber && <p className="mt-1 text-sm text-red-600">{errors.regNumber.message}</p>}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter email address"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter phone number"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="numberOfTrucks" className="block text-sm font-medium text-gray-700 mb-2">
                      No. of Trucks *
                    </label>
                    <input
                      type="text"
                      id="numberOfTrucks"
                      {...register('numberOfTrucks')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter Number of Trucks"
                    />
                    {errors.numberOfTrucks && <p className="mt-1 text-sm text-red-600">{errors.numberOfTrucks.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="truckType" className="block text-sm font-medium text-gray-700 mb-2">
                      Truck Types *
                    </label>
                    <input
                      type="text"
                      id="truckType"
                      {...register('truckType')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter Truck type"
                    />
                    {errors.truckType && <p className="mt-1 text-sm text-red-600">{errors.truckType.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="territory" className="block text-sm font-medium text-gray-700 mb-2">
                      Location/Area Cover *
                    </label>
                    <input
                      type="text"
                      id="territory"
                      {...register('territory')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter preferred territory"
                    />
                    {errors.territory && <p className="mt-1 text-sm text-red-600">{errors.territory.message}</p>}
                  </div>

                </div>

                {/* Address Information */}
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <textarea
                    id="address"
                    rows={3}
                    {...register('address')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter complete address"
                  ></textarea>
                  {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
                </div>



                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      {...register('city')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter city"
                    />
                    {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      {...register('state')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter state"
                    />
                    {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      {...register('pincode')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter pincode"
                    />
                    {errors.pincode && <p className="mt-1 text-sm text-red-600">{errors.pincode.message}</p>}
                  </div>
                </div> */}

                {/* Business Information */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type *
                    </label>
                    <select
                      id="businessType"
                      {...register('businessType')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select business type</option>
                      {businessTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.businessType && <p className="mt-1 text-sm text-red-600">{errors.businessType.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Experience in Distribution *
                    </label>
                    <select
                      id="experience"
                      {...register('experience')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select experience</option>
                      {experienceOptions.map(exp => (
                        <option key={exp} value={exp}>{exp}</option>
                      ))}
                    </select>
                    {errors.experience && <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>}
                  </div>
                </div> */}

                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="territory" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Territory *
                    </label>
                    <input
                      type="text"
                      id="territory"
                      {...register('territory')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter preferred territory"
                    />
                    {errors.territory && <p className="mt-1 text-sm text-red-600">{errors.territory.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="investment" className="block text-sm font-medium text-gray-700 mb-2">
                      Investment Capacity *
                    </label>
                    <select
                      id="investment"
                      {...register('investment')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select investment capacity</option>
                      {investmentOptions.map(inv => (
                        <option key={inv} value={inv}>{inv}</option>
                      ))}
                    </select>
                    {errors.investment && <p className="mt-1 text-sm text-red-600">{errors.investment.message}</p>}
                  </div>
                </div> */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Submit Application
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DistributorRegistration;