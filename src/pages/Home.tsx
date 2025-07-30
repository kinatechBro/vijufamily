import React from 'react';
import Hero from '../components/Home/Hero';
import ProductCategories from '../components/Home/ProductCategories';
import NewsSection from '../components/Home/NewsSection';
import ContactForm from '../components/Forms/ContactForm';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProductCategories />
      <NewsSection />
      <ContactForm />
    </div>
  );
};

export default Home;