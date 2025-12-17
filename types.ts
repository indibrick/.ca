import React from 'react';

export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  type: 'Detached' | 'Semi-Detached' | 'Townhouse' | 'Condo';
  purpose: 'Sale' | 'Rent' | 'Pre-Construction';
  imageUrl: string;
  isFeatured?: boolean;
  builderId?: string;
  brochureUrl?: string;
}

export interface CityData {
  slug: string;
  name: string;
  description: string;
  avgHomePrice: string;
  avgRent: string;
  marketTrend: string;
  mortgageInsights: string;
  realtorInsights: string;
  legalInsights: string;
  renoInsights: string;
  faqs: FAQ[];
}

export interface PreConCityData {
  slug: string;
  cityName: string;
  projects: {
    name: string;
    builder: string;
    type: string;
    status: string;
    highlights: string[];
    description: string;
  }[];
}

export interface Builder {
  id: string;
  name: string;
  logo: string;
  about: string;
  licenseNumber: string; // Tarion/HCRA
  officeLocation: string;
  rating: number;
  completedProjects: string[];
  upcomingProjects: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  source: string;
  date: string;
  url: string;
  status: 'pending' | 'approved';
  summary: string;
}

export interface SiteSettings {
  enableMortgageCalculator: boolean;
  enableTriggerRateTool: boolean;
  enableLTTCalculator: boolean;
  enableNewsScraper: boolean;
  useExternalRatesWidget: boolean;
  ratesWidgetUrl: string;
}

export interface MarketStat {
  month: string;
  avgPrice: number;
  avgRent: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  link: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  consent: boolean;
  status: 'New' | 'Contacted' | 'In-Progress' | 'Closed' | 'Dead';
  date: string;
  assignedTo?: string;
}

export interface RecruitmentLead extends Lead {
  resumeUrl?: string;
  position: string;
}

export interface Partner {
  id: string;
  name: string;
  role: string;
  brokerage: string;
  imageUrl: string;
  email: string;
  phone: string;
}

export interface MortgageRate {
  id: string;
  term: string;
  rate: number;
  type: 'Fixed' | 'Variable';
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Article {
  id: string;
  slug: string;
  category: string;
  title: string;
  snippet: string;
  content: React.ReactNode;
  faqs: FAQ[];
}
