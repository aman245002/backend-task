// routes/dashboard.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/dashboard-summary', authMiddleware, (req, res) => {
  res.json({
    teamMembers: 12,
    activeProjects: 5,
    notifications: 3,
  });
});

module.exports = router;
