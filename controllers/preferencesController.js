// backend/controllers/preferencesController.js
const Preferences = require('../models/Preferences');

exports.savePreferences = async (req, res) => {
  const { theme, layout } = req.body;
  try {
    const preferences = await Preferences.findOneAndUpdate(
      { user: req.userId },
      { theme, layout },
      { new: true, upsert: true }
    );
    res.status(200).json(preferences);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save preferences' });
  }
};

exports.getPreferences = async (req, res) => {
  try {
    const preferences = await Preferences.findOne({ user: req.userId });
    if (!preferences) return res.status(404).json({ message: 'Preferences not found' });
    res.status(200).json(preferences);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get preferences' });
  }
};
