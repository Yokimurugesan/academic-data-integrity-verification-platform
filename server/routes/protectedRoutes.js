const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

router.get('/dashboard', protect, (req, res) => {
  res.json({
    message: 'Protected data accessed',
    user: req.user
  });
});

module.exports = router;
