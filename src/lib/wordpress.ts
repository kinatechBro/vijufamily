import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// WordPress REST API Configuration
const WP_API_BASE = import.meta.env.VITE_WP_API_URL || 'https://your-wordpress-site.com/wp-json/wp/v2';
const WP_API_TIMEOUT = 10000;

// Create axios instance with default configuration
const createWordPressAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: WP_API_BASE,
    timeout: WP_API_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

  // Request interceptor for authentication and CORS
  api.interceptors.request.use(
    (config) => {
      // Add authentication token if available
      const token = localStorage.getItem('wp_auth_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // Add custom headers for CORS
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
      
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor for error handling
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // Handle common errors
      if (error.response?.status === 401) {
        // Handle unauthorized access
        localStorage.removeItem('wp_auth_token');
        console.warn('WordPress API: Unauthorized access');
      } else if (error.response?.status === 404) {
        console.warn('WordPress API: Resource not found');
      } else if (error.code === 'ECONNABORTED') {
        console.error('WordPress API: Request timeout');
      }
      
      return Promise.reject(error);
    }
  );

  return api;
};

export const wordpressAPI = createWordPressAPI();

// API Endpoints Configuration
export const endpoints = {
  posts: '/posts',
  pages: '/pages',
  media: '/media',
  categories: '/categories',
  tags: '/tags',
  users: '/users',
  comments: '/comments',
  // Custom post types
  products: '/products',
  vacancies: '/vacancies',
  activities: '/activities',
  testimonials: '/testimonials',
  // Custom endpoints
  contact: '/contact-form-7/v1/contact-forms',
  distributor: '/custom/v1/distributor-registration',
  newsletter: '/custom/v1/newsletter',
} as const;

// API Request Parameters Interface
export interface APIParams {
  per_page?: number;
  page?: number;
  search?: string;
  categories?: string;
  tags?: string;
  status?: 'publish' | 'draft' | 'private';
  orderby?: 'date' | 'title' | 'menu_order' | 'modified';
  order?: 'asc' | 'desc';
  include?: number[];
  exclude?: number[];
  featured_media?: boolean;
  _embed?: boolean;
}

// WordPress API Service Class
export class WordPressService {
  private api: AxiosInstance;

  constructor() {
    this.api = wordpressAPI;
  }

  // Generic GET request
  async get<T>(endpoint: string, params?: APIParams): Promise<T> {
    const config: AxiosRequestConfig = {
      params: {
        _embed: true, // Include embedded resources by default
        ...params,
      },
    };

    const response = await this.api.get<T>(endpoint, config);
    return response.data;
  }

  // Generic POST request
  async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await this.api.post<T>(endpoint, data);
    return response.data;
  }

  // Generic PUT request
  async put<T>(endpoint: string, data: any): Promise<T> {
    const response = await this.api.put<T>(endpoint, data);
    return response.data;
  }

  // Generic DELETE request
  async delete<T>(endpoint: string): Promise<T> {
    const response = await this.api.delete<T>(endpoint);
    return response.data;
  }

  // Posts
  async getPosts(params?: APIParams) {
    return this.get(endpoints.posts, params);
  }

  async getPost(id: number) {
    return this.get(`${endpoints.posts}/${id}`, { _embed: true });
  }

  // Pages
  async getPages(params?: APIParams) {
    return this.get(endpoints.pages, params);
  }

  async getPage(id: number) {
    return this.get(`${endpoints.pages}/${id}`, { _embed: true });
  }

  // Custom Post Types
  async getProducts(params?: APIParams) {
    return this.get(endpoints.products, params);
  }

  async getProduct(id: number) {
    return this.get(`${endpoints.products}/${id}`, { _embed: true });
  }

  async getVacancies(params?: APIParams) {
    return this.get(endpoints.vacancies, params);
  }

  async getActivities(params?: APIParams) {
    return this.get(endpoints.activities, params);
  }

  // Media
  async getMedia(id: number) {
    return this.get(`${endpoints.media}/${id}`);
  }

  // Categories and Tags
  async getCategories(params?: APIParams) {
    return this.get(endpoints.categories, params);
  }

  async getTags(params?: APIParams) {
    return this.get(endpoints.tags, params);
  }

  // Form Submissions
  async submitContactForm(formData: any) {
    return this.post('/contact-form-7/v1/contact-forms/1/feedback', formData);
  }

  async submitDistributorRegistration(formData: any) {
    return this.post(endpoints.distributor, formData);
  }

  async subscribeNewsletter(email: string) {
    return this.post(endpoints.newsletter, { email });
  }

  // Search
  async search(query: string, type?: string) {
    const params: APIParams = {
      search: query,
      per_page: 20,
    };

    if (type) {
      return this.get(`/${type}`, params);
    }

    // Search across multiple post types
    const [posts, products, pages] = await Promise.allSettled([
      this.get(endpoints.posts, params),
      this.get(endpoints.products, params),
      this.get(endpoints.pages, params),
    ]);

    return {
      posts: posts.status === 'fulfilled' ? posts.value : [],
      products: products.status === 'fulfilled' ? products.value : [],
      pages: pages.status === 'fulfilled' ? pages.value : [],
    };
  }
}

// Export singleton instance
export const wpService = new WordPressService();

// CORS Configuration Helper
export const configureCORS = () => {
  // This would typically be configured on the WordPress backend
  // Add this to your WordPress theme's functions.php:
  /*
  function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  }
  add_action('init','add_cors_http_header');

  // Enable REST API for custom post types
  function enable_rest_api_for_custom_post_types() {
    global $wp_post_types;
    
    $wp_post_types['products']->show_in_rest = true;
    $wp_post_types['products']->rest_base = 'products';
    $wp_post_types['products']->rest_controller_class = 'WP_REST_Posts_Controller';
    
    $wp_post_types['vacancies']->show_in_rest = true;
    $wp_post_types['vacancies']->rest_base = 'vacancies';
    $wp_post_types['vacancies']->rest_controller_class = 'WP_REST_Posts_Controller';
  }
  add_action('init', 'enable_rest_api_for_custom_post_types', 25);
  */
};

// Error handling utilities
export const handleAPIError = (error: any) => {
  if (error.response) {
    // Server responded with error status
    const { status, data } = error.response;
    return {
      type: 'server_error',
      status,
      message: data?.message || `Server error: ${status}`,
      details: data,
    };
  } else if (error.request) {
    // Request was made but no response received
    return {
      type: 'network_error',
      message: 'Network error: Unable to connect to WordPress API',
      details: error.request,
    };
  } else {
    // Something else happened
    return {
      type: 'unknown_error',
      message: error.message || 'An unknown error occurred',
      details: error,
    };
  }
};