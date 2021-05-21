const express = require('express');
const  router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

/**
 * @route           POST api/users
 * @description     Register a users
 * @access          Public
 */
router.post('/', [
        check('fullName', 'Please provide your name').not().isEmpty(),
        check('email', 'Please provide a valid email').isEmail(),
        check('password', 'Please provide a password with 6 characters or more').isLength({ min: 6 })
    ], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                errors: errors.array()
            });
        }
        res.send(req.body);
});


module.exports = router;