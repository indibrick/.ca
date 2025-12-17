import { Property, MarketStat, Service, Testimonial, Lead, Partner, MortgageRate } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Detached Home',
    price: 1250000,
    address: '123 Maple Drive',
    city: 'Brampton',
    bedrooms: 4,
    bathrooms: 3,
    type: 'Detached',
    purpose: 'Sale',
    imageUrl: 'https://picsum.photos/seed/home1/800/600',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Luxury Condo Suite',
    price: 650000,
    address: '45 Bay Street',
    city: 'Toronto',
    bedrooms: 2,
    bathrooms: 2,
    type: 'Condo',
    purpose: 'Sale',
    imageUrl: 'https://picsum.photos/seed/home2/800/600',
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Pre-Con Townhouse',
    price: 950000,
    address: '88 Future Way',
    city: 'Mississauga',
    bedrooms: 3,
    bathrooms: 3,
    type: 'Townhouse',
    purpose: 'Pre-Construction',
    imageUrl: 'https://picsum.photos/seed/home3/800/600',
    isFeatured: true,
  },
  {
    id: '4',
    title: 'Investment Semi',
    price: 899000,
    address: '22 Investor Lane',
    city: 'Vaughan',
    bedrooms: 3,
    bathrooms: 2,
    type: 'Semi-Detached',
    purpose: 'Sale',
    imageUrl: 'https://picsum.photos/seed/home4/800/600',
    isFeatured: false,
  },
  {
    id: '5',
    title: 'Downtown Rental',
    price: 2800,
    address: '101 King St W',
    city: 'Toronto',
    bedrooms: 1,
    bathrooms: 1,
    type: 'Condo',
    purpose: 'Rent',
    imageUrl: 'https://picsum.photos/seed/home5/800/600',
    isFeatured: false,
  },
];

export const MARKET_STATS: MarketStat[] = [
  { month: 'Jan', avgPrice: 980000, avgRent: 2400 },
  { month: 'Feb', avgPrice: 995000, avgRent: 2450 },
  { month: 'Mar', avgPrice: 1020000, avgRent: 2500 },
  { month: 'Apr', avgPrice: 1050000, avgRent: 2550 },
  { month: 'May', avgPrice: 1040000, avgRent: 2600 },
  { month: 'Jun', avgPrice: 1080000, avgRent: 2650 },
];

export const SERVICES: Service[] = [
  {
    id: 'mortgage',
    title: 'Mortgage Financing',
    description: 'Get pre-approved, refinance, or renew with Mudit Chhura, Mortgage Agent Level 1.',
    iconName: 'BadgeDollarSign',
    link: '/services',
  },
  {
    id: 'renovation',
    title: 'Renovation Financing',
    description: 'Purchase Plus Improvements and trusted contractor quotes.',
    iconName: 'HardHat',
    link: '/renovation-financing',
  },
  {
    id: 'realtor',
    title: 'Partner Realtor Network',
    description: 'Connect with our trusted Real Estate partners for buying or selling.',
    iconName: 'Users',
    link: '/services',
  },
  {
    id: 'precon',
    title: 'Pre-Construction Access',
    description: 'Exclusive access to pricing and floor plans via our partner network.',
    iconName: 'Building2',
    link: '/pre-construction',
  },
  {
    id: 'legal',
    title: 'Legal Professionals',
    description: 'Referrals to trusted Real Estate Lawyers to close your transaction securely.',
    iconName: 'Hammer',
    link: '/services',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'First-Time Buyer',
    content: 'Mudit helped me navigate the mortgage process when the bank said no. Seamless experience!',
    avatarUrl: 'https://picsum.photos/seed/face1/100/100',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Real Estate Investor',
    content: 'The financial insights were spot on. Highly recommended for investment financing.',
    avatarUrl: 'https://picsum.photos/seed/face2/100/100',
  },
  {
    id: '3',
    name: 'Amrit Singh',
    role: 'Homeowner',
    content: 'Refinancing my home to fund a renovation was easy with Pineapple.',
    avatarUrl: 'https://picsum.photos/seed/face3/100/100',
  },
];

export const MOCK_LEADS: Lead[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', phone: '555-1234', serviceNeeded: 'Mortgage Only', consent: true, status: 'New', date: '2023-10-25' },
  { id: '2', name: 'Jane Smith', email: 'jane@test.com', phone: '555-5678', serviceNeeded: 'Real Estate Agent', consent: true, status: 'Contacted', date: '2023-10-24' },
];

export const PARTNERS: Partner[] = [
  {
    id: 'sarah-connor',
    name: 'Sarah Connor',
    role: 'Sales Representative',
    brokerage: 'ReMax Reality Inc.',
    imageUrl: 'https://picsum.photos/seed/sarah/200/200',
    email: 'sarah@example.com',
    phone: '(416) 555-9999'
  },
  {
    id: 'john-smith',
    name: 'John Smith',
    role: 'Real Estate Lawyer',
    brokerage: 'Smith Law PC',
    imageUrl: 'https://picsum.photos/seed/john/200/200',
    email: 'john@law.com',
    phone: '(905) 555-8888'
  }
];

export const MORTGAGE_RATES: MortgageRate[] = [
  { id: '1', term: '3-Year Fixed', rate: 4.79, type: 'Fixed' },
  { id: '2', term: '5-Year Fixed', rate: 4.49, type: 'Fixed' },
  { id: '3', term: '5-Year Variable', rate: 5.55, type: 'Variable' },
];