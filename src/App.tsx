import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { QueryProvider } from './providers/QueryProvider';
import ErrorBoundary from './components/UI/ErrorBoundary';
import LoadingScreen from './components/UI/LoadingScreen';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Activities from './pages/Activities';
import Vacancies from './pages/Vacancies';
import DistributorRegistration from './pages/DistributorRegistration';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import ShoppingCart from './components/Ecommerce/ShoppingCart';
import PageTester from './components/TestRunner/PageTester';
import { Toaster } from 'react-hot-toast';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showApp, setShowApp] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowApp(true);
  };

  return (
    <ErrorBoundary>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {showApp && (
        <>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: 'var(--color-bg-elevated)',
                color: 'var(--color-text-primary)',
                border: '1px solid var(--color-border-primary)',
              },
            }}
          />
          <QueryProvider>
            <ThemeProvider>
              <Router>
                <Layout>
                  <ShoppingCart />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/vacancies" element={<Vacancies />} />
                    <Route path="/distributor" element={<DistributorRegistration />} />
                    <Route path="/test" element={<PageTester />} />
                    {/* Catch-all route for 404 */}
                    <Route path="*" element={
                      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                        <div className="text-center">
                          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404 - Page Not Found</h1>
                          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
                          <Link 
                            to="/" 
                            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                          >
                            Go Home
                          </Link>
                        </div>
                      </div>
                    } />
                  </Routes>
                </Layout>
              </Router>
            </ThemeProvider>
          </QueryProvider>
        </>
      )}
    </ErrorBoundary>
  );
}

export default App;