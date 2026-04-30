const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const Template = require('./models/Template');

const templates = [
  {
    name: 'Nexus AI Platform',
    description: 'Enterprise-grade AI orchestration dashboard with real-time model monitoring and neural network visualization.',
    thumbnail_url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    category: 'Artificial Intelligence'
  },
  {
    name: 'Lumina CRM Pro',
    description: 'Next-generation customer relationship management with predictive lead scoring and automated sales pipelines.',
    thumbnail_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    category: 'CRM'
  },
  {
    name: 'Quantum Analytics',
    description: 'Deep data insights platform featuring webgl-powered 3D data mapping and multi-source integration.',
    thumbnail_url: 'https://images.unsplash.com/photo-1551288049-bbbda5366a71?w=800&auto=format&fit=crop',
    category: 'Analytics'
  },
  {
    name: 'Vault FinTech Suite',
    description: 'Ultra-secure banking infrastructure template with encrypted transaction flows and regulatory compliance modules.',
    thumbnail_url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop',
    category: 'Finance'
  },
  {
    name: 'Velocity SaaS Framework',
    description: 'The ultimate starter kit for high-growth startups. Includes multi-tenant architecture and Stripe integration patterns.',
    thumbnail_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    category: 'SaaS'
  },
  {
    name: 'Horizon Project Hub',
    description: 'Agile project management for remote teams. Featuring real-time collaboration tools and dynamic Gantt charts.',
    thumbnail_url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop',
    category: 'Productivity'
  },
  {
    name: 'CyberGuard Monitor',
    description: 'Real-time threat detection and network security dashboard with automated incident response playbooks.',
    thumbnail_url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop',
    category: 'Security'
  },
  {
    name: 'Evolve E-commerce Kit',
    description: 'High-conversion storefront template with headless CMS integration and performance-first architecture.',
    thumbnail_url: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop',
    category: 'E-commerce'
  },
  {
    name: 'SocialGraph Connect',
    description: 'Modern social networking UI with interactive activity feeds, dark mode, and real-time notification systems.',
    thumbnail_url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop',
    category: 'Social'
  },
  {
    name: 'CloudScale Infrastructure',
    description: 'DevOps-focused monitoring tool for multi-cloud environments. visualize nodes, pods, and server health.',
    thumbnail_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
    category: 'Infrastructure'
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
