require('dotenv').config();
const mongoose = require('mongoose');
const Template = require('./models/Template');

const templates = [
  {
    name: 'SaaS Dashboard Pro',
    description: 'A premium dashboard template with charts, stats, and dark mode support.',
    thumbnail_url: 'https://images.unsplash.com/photo-1551288049-bbbda5366a71?w=800&auto=format&fit=crop',
    category: 'Dashboard'
  },
  {
    name: 'E-commerce UI Kit',
    description: 'Complete set of UI components for modern e-commerce websites.',
    thumbnail_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    category: 'E-commerce'
  },
  {
    name: 'AI Landing Page',
    description: 'Futuristic landing page for AI startups with glassmorphism effects.',
    thumbnail_url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    category: 'Landing Page'
  },
  {
    name: 'Social Media Connect',
    description: 'Clean and minimal social networking template with profile views.',
    thumbnail_url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop',
    category: 'Social'
  },
  {
    name: 'Portfolio Elegance',
    description: 'Showcase your work with this minimalist and elegant portfolio template.',
    thumbnail_url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop',
    category: 'Portfolio'
  },
  {
    name: 'FinTech App Shell',
    description: 'Robust banking and financial application template with secure UI components.',
    thumbnail_url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop',
    category: 'Finance'
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Template.deleteMany({});
    await Template.insertMany(templates);
    console.log('Database Seeded Successfully');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
