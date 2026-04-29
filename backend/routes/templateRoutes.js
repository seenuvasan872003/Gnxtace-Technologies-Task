const express = require('express');
const router = express.Router();
const templateController = require('../controllers/templateController');
const validate = require('../middleware/validate');
const { templateSchema } = require('../schemas/templateSchema');

// Public routes
router.get('/', templateController.getTemplates);
router.get('/:id', templateController.getTemplateById);

// Admin routes with validation
router.post('/', validate(templateSchema), templateController.createTemplate);
router.put('/:id', validate(templateSchema), templateController.updateTemplate);
router.delete('/:id', templateController.deleteTemplate);

module.exports = router;
