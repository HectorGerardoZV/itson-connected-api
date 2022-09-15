const express = require('express');

const router = express.Router();

router.get('/', (__req, res) => {
    res.json({ message: 'Server running' });
});

module.exports = router;
