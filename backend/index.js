const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const templateRoutes = require('./routes/templateRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/favorites', favoriteRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Mini SaaS Template Store API - MongoDB Version' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
