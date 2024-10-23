import { CSSProperties } from 'react';

export const companyInfo = {
  name: 'TechInnovate Solutions',
  logo: '/logo.png',
  email: 'info@techinnovate.com',
  phone: '+1 (555) 123-4567',
  address: '123 Tech Street, Innovation City, TC 12345',
};

export const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications tailored to your business needs.',
  },
  {
    title: 'Mobile App Development',
    description: 'Innovative mobile solutions for iOS and Android platforms.',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Scalable and secure cloud infrastructure and migration services.',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions to drive business intelligence.',
  },
];

export const colors = {
  primary: '#1890ff',
  secondary: '#001529',
  accent: '#f5222d',
  background: '#f0f2f5',
  text: '#333333',
  other: '#F0F2F5',
};

export const globalStyles: { [key: string]: CSSProperties } = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    color: colors.secondary,
  },
  sectionSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: colors.primary,
  },
};
