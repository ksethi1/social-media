const express = require('express');
const router = express.Router();

router.get('/test', function (req, res) {
    res.json({
        key: 'posts test'
    });
});

module.exports = router;