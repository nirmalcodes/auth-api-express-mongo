const express = require('express');
const router = express.Router();
const { register, login, getUser } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/signup', register);
router.post('/login', login);
router.get('/profile', authMiddleware, getUser);

module.exports = router;
