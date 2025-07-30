import { useQuery, useMutation, useQueryClient, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { wpService, handleAPIError, APIParams } from '../lib/wordpress';
import { BlogPost, Product, Vacancy, ContactForm, DistributorForm } from '../types';

// Query Keys
export const queryKeys = {
  posts: ['posts'] as const,
  post: (id: number) => ['posts', id] as const,
  products: ['products'] as const,
  product: (id: number) => ['products', id] as const,
  vacancies: ['vacancies'] as const,
  activities: ['activities'] as const,
  pages: ['pages'] as const,
  page: (id: number) => ['pages', id] as const,
  categories: ['categories'] as const,
  tags: ['tags'] as const,
  search: (query: string) => ['search', query] as const,
} as const;

// Default query options
const defaultQueryOptions = {
  staleTime: 5 * 60 * 1000, // 5 minutes
  cacheTime: 10 * 60 * 1000, // 10 minutes
  retry: 3,
  retryDelay: (attemptIndex: number) => Math.min(1000 * 2 ** attemptIndex, 30000),
};

// Posts Hooks
export const usePosts = (params?: APIParams, options?: Partial<UseQueryOptions>) => {
  return useQuery({
    queryKey: [...queryKeys.posts, params],
    queryFn: () => wpService.getPosts(params),
    ...defaultQueryOptions,
    ...options,
  });
};

export const usePost = (id: number, options?: Partial<UseQueryOptions>) => {
  return useQuery({
    queryKey: queryKeys.post(id),
    queryFn: () => wpService.getPost(id),
    enabled: !!id,
    ...defaultQueryOptions,
    ...options,
  });
};

// Products Hooks
export const useProducts = (params?: APIParams, options?: Partial<UseQueryOptions>) => {
  return useQuery({
    queryKey: [...queryKeys.products, params],
    queryFn: () => wpService.getProducts(params),
    ...defaultQueryOptions,
    ...options,
  });
};

export const useProduct = (id: number, options?: Partial<UseQueryOptions>) => {
  return useQuery({
    queryKey: queryKeys.product(id),
    queryFn: () => wpService.getProduct(id),
    enabled: !!id,
    ...defaultQueryOptions,
    ...options,
  });
};

// Vacancies Hooks
export const useVacancies = (params?: APIParams, options?: Partial<UseQueryOptions>) => {
  return useQuery({
    queryKey: [...queryKeys.vacancies, params],
    queryFn: () => wpService.getVacancies(params),
    ...defaultQueryOptions,
    ...options,
  });
};

// Activities Hooks
export const useActivities = (params?: APIParams, options?: Partial<UseQueryOptions>) => {
  return useQuery({
    queryKey: [...queryKeys.activities, params],
    queryFn: () => wpService.getActivities(params),
    ...defaultQueryOptions,
    ...options,
  });
};

// Pages Hooks
export const usePages = (params?: APIParams, options?: Partial<UseQueryOptions>) => {
  return useQuery({
    queryKey: [...queryKeys.pages, params],
    queryFn: () => wpService.getPages(params),
    ...defaultQueryOptions,
    ...options,
  });
};

export const usePage = (id: number, options?: Partial<UseQueryOptions>) => {
  return useQuery({
    queryKey: queryKeys.page(id),
    queryFn: () => wpService.getPage(id),
    enabled: !!id,
    ...defaultQueryOptions,
    ...options,
  });
};

// Categories and Tags Hooks
export const useCategories = (params?: APIParams, options?: Partial<UseQueryOptions>) => {
  return useQuery({
    queryKey: [...queryKeys.categories, params],
    queryFn: () => wpService.getCategories(params),
    ...defaultQueryOptions,
    ...options,
  });
};

export const useTags = (params?: APIParams, options?: Partial<UseQueryOptions>) => {
  return useQuery({
    queryKey: [...queryKeys.tags, params],
    queryFn: () => wpService.getTags(params),
    ...defaultQueryOptions,
    ...options,
  });
};

// Search Hook
export const useSearch = (query: string, options?: Partial<UseQueryOptions>) => {
  return useQuery({
    queryKey: queryKeys.search(query),
    queryFn: () => wpService.search(query),
    enabled: !!query && query.length > 2,
    ...defaultQueryOptions,
    ...options,
  });
};

// Mutation Hooks for Form Submissions
export const useContactFormMutation = (options?: UseMutationOptions<any, any, ContactForm>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: ContactForm) => wpService.submitContactForm(formData),
    onSuccess: () => {
      // Optionally invalidate related queries
      queryClient.invalidateQueries({ queryKey: ['contact-submissions'] });
    },
    onError: (error) => {
      const apiError = handleAPIError(error);
      console.error('Contact form submission failed:', apiError);
    },
    ...options,
  });
};

export const useDistributorRegistrationMutation = (options?: UseMutationOptions<any, any, DistributorForm>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: DistributorForm) => wpService.submitDistributorRegistration(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['distributor-registrations'] });
    },
    onError: (error) => {
      const apiError = handleAPIError(error);
      console.error('Distributor registration failed:', apiError);
    },
    ...options,
  });
};

export const useNewsletterMutation = (options?: UseMutationOptions<any, any, string>) => {
  return useMutation({
    mutationFn: (email: string) => wpService.subscribeNewsletter(email),
    onError: (error) => {
      const apiError = handleAPIError(error);
      console.error('Newsletter subscription failed:', apiError);
    },
    ...options,
  });
};

// Prefetch utilities
export const usePrefetchPost = () => {
  const queryClient = useQueryClient();

  return (id: number) => {
    queryClient.prefetchQuery({
      queryKey: queryKeys.post(id),
      queryFn: () => wpService.getPost(id),
      ...defaultQueryOptions,
    });
  };
};

export const usePrefetchProduct = () => {
  const queryClient = useQueryClient();

  return (id: number) => {
    queryClient.prefetchQuery({
      queryKey: queryKeys.product(id),
      queryFn: () => wpService.getProduct(id),
      ...defaultQueryOptions,
    });
  };
};

// Cache management utilities
export const useInvalidateQueries = () => {
  const queryClient = useQueryClient();

  return {
    invalidatePosts: () => queryClient.invalidateQueries({ queryKey: queryKeys.posts }),
    invalidateProducts: () => queryClient.invalidateQueries({ queryKey: queryKeys.products }),
    invalidateVacancies: () => queryClient.invalidateQueries({ queryKey: queryKeys.vacancies }),
    invalidateActivities: () => queryClient.invalidateQueries({ queryKey: queryKeys.activities }),
    invalidateAll: () => queryClient.invalidateQueries(),
    clearCache: () => queryClient.clear(),
  };
};

// Optimistic updates
export const useOptimisticUpdate = () => {
  const queryClient = useQueryClient();

  return {
    updatePost: (id: number, updatedData: Partial<BlogPost>) => {
      queryClient.setQueryData(queryKeys.post(id), (oldData: any) => ({
        ...oldData,
        ...updatedData,
      }));
    },
    updateProduct: (id: number, updatedData: Partial<Product>) => {
      queryClient.setQueryData(queryKeys.product(id), (oldData: any) => ({
        ...oldData,
        ...updatedData,
      }));
    },
  };
};