const express = require('express');
const router = express.Router();

/**
 * @route           GET api/contacts
 * @description     Get all user's contacts
 * @access          Public
 */
router.get('/', (req, res) => {
    res.send('Get user contacts');
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