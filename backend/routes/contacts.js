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
 router.post('/', [ auth, [
        check('name', 'Please provide a name for your contact').not().isEmpty()
    ]], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, phone, label } = req.body;
        try {
            const newContact = new Contact({ 
                user: req.user.id,
                name, 
                email, 
                phone, 
                label 
            });
            const contact = await newContact.save();
            res.json(contact);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Oops! Something went wrong :(');
        }
});

/**
 * @route           PUT api/contacts/:id
 * @description     Edit a contact
 * @access          Public
 */
 router.put('/:id', auth, async (req, res) => {
    const { name, email, phone, label } = req.body;

    // Build contact object
    const contactFileds = {};
    if (name) contactFileds.name = name;
    if (email) contactFileds.email = email;
    if (phone) contactFileds.phone = phone;
    if (label) contactFileds.label = label;

    try {
        let contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ msg: 'Oops! We couldn\'t find the contact you are looking for :(' });
        }

        // Make sure the user owns this contact
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'You are not authorized to perform this action' });
        }

        // Finally we can update the contact
        contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { $set: contactFileds },
            { new: true } // if this contact doesn't exist, then create it
        );
        res.json(contact);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Oops! Something went wrong :(');
    }
});

/**
 * @route           DELETE api/contacts/:id
 * @description     Delete contact
 * @access          Public
 */
 router.delete('/:id', auth, async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ msg: 'Oops! We couldn\'t find the contact you are looking for :(' });
        }

        // Make sure the user owns this contact
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'You are not authorized to perform this action' });
        }

        // Finally we can update the contact
        await Contact.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Your contact has beed deleted' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Oops! Something went wrong :(');
    }
});

module.exports = router;