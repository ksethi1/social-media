const express = require('express');
const router = express.Router();

router.get('/test', function (req, res) {
    res.json({
        key: 'profile test'
    });
});

module.exports = router;