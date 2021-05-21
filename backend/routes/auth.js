const express = require('express');
const router = express.Router();

/**
 * @route           GET api/auth
 * @description     Get the logged in  user
 * @access          Private
 */
router.get('/', (req, res) => {
    res.send('Get the logged in  user');
});

/**
 * @route           POST api/auth
 * @description     Authenticate user & get auth token
 * @access          Public
 */
 router.post('/', (req, res) => {
    res.send('Authenticate user');
});

module.exports = router;