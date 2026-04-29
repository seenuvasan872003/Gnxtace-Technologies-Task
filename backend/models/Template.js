const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail_url: { type: String, required: true },
  category: { type: String, required: true }
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

templateSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

module.exports = mongoose.model('Template', templateSchema);
