// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // ✅ Import auth routes
const profileRoutes = require('./routes/profile');
const preferencesRoutes = require('./routes/preferences');
const dashboardRoutes = require('./routes/dashboard');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // ✅ Parse JSON body

// API Routes
app.use('/api', authRoutes); // ✅ Mount auth routes
app.use('/api', profileRoutes);
app.use('/api', preferencesRoutes);
app.use('/api', dashboardRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
