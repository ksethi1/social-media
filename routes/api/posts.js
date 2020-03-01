const express = require('express');
const router = express.Router();

//@route    GET api/posts/test
//@desc     Tests post route
//@access   Public
router.get('/test', function (req, res) {
    res.json({
        key: 'posts test'
    });
});

module.exports = router;