// backend/routes/preferences.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { savePreferences, getPreferences } = require('../controllers/preferencesController');

router.post('/preferences', authMiddleware, savePreferences);
router.get('/preferences', authMiddleware, getPreferences);

module.exports = router;
