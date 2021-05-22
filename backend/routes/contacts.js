const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const User = require('../models/User');
const Contact = require('../models/Contact');

/**
 * @route           GET api/contacts
 * @description     Get all user's contacts
 * @access          Public
 */
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ name: 1 });
        res.json(contacts);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Oops! Something went wrong :(');
    }
});

/**
 * @route           POST api/contacts
 * @description     Add new contact
 * @access          Public
 */
 router.post('/', (req, res) => {
    res.send('Add new contact');
});

/**
 * @route           PUT api/contacts/:id
 * @description     Edit a contact
 * @access          Public
 */
 router.put('/:id', (req, res) => {
    res.send('Edit a contact');
});

/**
 * @route           DELETE api/contacts/:id
 * @description     Delete contact
 * @access          Public
 */
 router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;