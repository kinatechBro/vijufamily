import axios from 'axios';

// WordPress REST API base URL - replace with your actual WordPress site URL
const WP_API_BASE = 'https://your-wordpress-site.com/wp-json/wp/v2';

const api = axios.create({
  baseURL: WP_API_BASE,
  timeout: 10000,
});

export const wordpressAPI = {
  // Get all posts
  getPosts: async (params?: { per_page?: number; page?: number }) => {
    const response = await api.get('/posts', { params });
    return response.data;
  },

  // Get single post
  getPost: async (id: number) => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  },

  // Get pages
  getPages: async () => {
    const response = await api.get('/pages');
    return response.data;
  },

  // Get custom post types (products, vacancies, etc.)
  getCustomPosts: async (postType: string, params?: any) => {
    const response = await api.get(`/${postType}`, { params });
    return response.data;
  },

  // Get media
  getMedia: async (id: number) => {
    const response = await api.get(`/media/${id}`);
    return response.data;
  },

  // Submit contact form
  submitContactForm: async (formData: any) => {
    // This would typically go to a custom WordPress endpoint
    const response = await api.post('/contact-form', formData);
    return response.data;
  },

  // Submit distributor registration
  submitDistributorRegistration: async (formData: any) => {
    const response = await api.post('/distributor-registration', formData);
    return response.data;
  },
};

// Mock data for development (remove when WordPress is configured)
export const mockData = {
  posts: [
    {
      id: 1,
      title: 'Viju Industries Launches New Organic Beverage Line',
      excerpt: 'We are excited to announce our new line of organic beverages made from the finest ingredients sourced directly from certified organic farms.',
      content: 'Full content here...',
      image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15',
      author: 'Viju Industries'
    },
    {
      id: 2,
      title: 'Expansion into New Markets',
      excerpt: 'Viju Industries continues to grow with expansion into three new states, bringing our premium products to more customers.',
      content: 'Full content here...',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-10',
      author: 'Viju Industries'
    },
    {
      id: 3,
      title: 'Sustainability Initiative Success',
      excerpt: 'Our commitment to environmental responsibility shows positive results with 30% reduction in packaging waste.',
      content: 'Full content here...',
      image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-05',
      author: 'Viju Industries'
    }
  ],
  products: [
    {
      id: 1,
      title: 'Premium Orange Beverage',
      description: 'Fresh and natural orange beverage with no artificial additives, made from hand-picked oranges',
      image: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'beverages' as const,
      price: 120
    },
    {
      id: 2,
      title: 'Sparkling Lime Drink',
      description: 'Refreshing sparkling drink with natural lime flavor and zero artificial colors',
      image: 'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'beverages' as const,
      price: 80
    },
    {
      id: 3,
      title: 'Fresh Dairy Milk',
      description: 'Pure and fresh dairy milk from local farms, rich in nutrients and taste',
      image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'dairy' as const,
      price: 60
    },
    {
      id: 4,
      title: 'Mixed Fruit Beverage',
      description: 'Delicious blend of seasonal fruits packed with vitamins and natural goodness',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'beverages' as const,
      price: 140
    },
    {
      id: 5,
      title: 'Energy Drink',
      description: 'Natural energy boost with herbal extracts and essential vitamins',
      image: 'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'beverages' as const,
      price: 100
    },
    {
      id: 6,
      title: 'Greek Yogurt',
      description: 'Creamy and protein-rich Greek yogurt made from premium dairy',
      image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'dairy' as const,
      price: 90
    }
  ],
  vacancies: [
    // Current vacancies will be loaded from the extended list in Vacancies.tsx
  ]
};