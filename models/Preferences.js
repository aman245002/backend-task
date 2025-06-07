// backend/models/Preferences.js
const mongoose = require('mongoose');

const preferencesSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  theme: { type: String, default: 'light' },
  layout: { type: String, default: 'grid' },
});

module.exports = mongoose.model('Preferences', preferencesSchema);
