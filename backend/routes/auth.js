const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const User = require('../models/User');
const router = express.Router();

/**
 * @route           GET api/auth
 * @description     Get the logged in  user
 * @access          Private
 */
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Woah! Something went wrong :(');
    }
});

/**
 * @route           POST api/auth
 * @description     Authenticate user & get auth token
 * @access          Public
 */
 router.post('/', [
        check('email', 'Please enter your email').isEmail(),
        check('password', 'Please enter your password').exists()
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        try {
            // Check the user has provided the correct credentials 
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ id: 'login_failed', msg: 'Your credentials are invalid' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'Your credentials are invalid' });
            }

            // The credential check is passed, so we can return a response with a jwt token
            jwt.sign({
                    user: {
                        id: user.id
                    }
                },
                config.get('jwtSecretKey'),
                {
                    expiresIn: 3600 // 1h
                },
                (error, token) => {
                    if (error) {
                        throw error;
                    }
                    res.json({ token });
                }
            );
        } catch (error) {
            console.log(error.message);
            res.status(500).send('Woah! Something went wrong :(');
        }
});

module.exports = router;