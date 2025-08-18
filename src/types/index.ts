export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'beverages' | 'dairy';
  price?: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export interface Vacancy {
  id: number;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  requirements: string[];
  responsibilities?: string[];
  postedDate: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface DistributorForm {
  firstName: string;
  lastName: string;
  regNumber: number;
  numberOfTrucks: number;
  truckType: string;

  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  businessType: string;
  experience: string;
  territory: string;
  investment: string;
}