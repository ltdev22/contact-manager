const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
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
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                errors: errors.array()
            });
        }

        const { fullName, email, password } = req.body;
        
        try {
            // Do we have already a user with this email?
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ id: 'user_exists', msg: `The email ${email} already exists with another account.` });
            }
            
            // Is a new user, so create a new instance, hash the password 
            // and save the user in the database. Also we will return a 
            // jwt token as a reponse.
            user = new User({ fullName, email, password });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();

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