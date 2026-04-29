const User = require('../models/User');

exports.getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('favorites');
    res.json(user.favorites);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.toggleFavorite = async (req, res) => {
  const { templateId } = req.params;
  try {
    const user = await User.findById(req.user.id);
    const index = user.favorites.indexOf(templateId);

    if (index > -1) {
      user.favorites.splice(index, 1);
      await user.save();
      return res.json({ message: 'Removed from favorites', action: 'removed' });
    }

    user.favorites.push(templateId);
    await user.save();
    res.status(201).json({ message: 'Added to favorites', action: 'added' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
