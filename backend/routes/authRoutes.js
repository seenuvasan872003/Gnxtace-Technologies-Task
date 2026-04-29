const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const { registerSchema, loginSchema, updateProfileSchema } = require('../schemas/authSchema');

router.post('/register', validate(registerSchema), authController.register);
router.post('/login', validate(loginSchema), authController.login);
router.put('/profile', auth, validate(updateProfileSchema), authController.updateProfile);

module.exports = router;
