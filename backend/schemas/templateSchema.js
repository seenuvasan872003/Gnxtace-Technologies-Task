const Joi = require('joi');

const templateSchema = Joi.object({
  name: Joi.string().min(3).max(100).required().messages({
    'string.empty': 'Template name is required'
  }),
  description: Joi.string().min(10).required().messages({
    'string.min': 'Description should be at least 10 characters'
  }),
  thumbnail_url: Joi.string().uri().required().messages({
    'string.uri': 'Please provide a valid URL for the thumbnail'
  }),
  category: Joi.string().required().messages({
    'string.empty': 'Category is required'
  })
});

module.exports = {
  templateSchema
};
