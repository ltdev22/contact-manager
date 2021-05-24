import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        label: 'personal',
    });

    const { name, email, phone, label} = contact;

    /** Populate the state with the contact details the users fills in the form */
    const onChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    /** Submitting the form */
    const onSubmit = (e) => {
        e.preventDefault();
        contactContext.addContact(contact);
        setContact({
            name: '',
            email: '',
            phone: '',
            label: 'personal'
        });
    };

    return (
        <div className='add-contact'>
            <h2 className="text-primary">New Contact</h2>
            <form onSubmit={onSubmit}>
                <input type="text" value={name} onChange={onChange} name="name" placeholder="contact's name" />
                <input type="text" value={email} onChange={onChange} name="email" placeholder="contact's email address" />
                <input type="text" value={phone} onChange={onChange} name="phone" placeholder="contact's phone number" />
                <span>Is:</span>{'  '}
                <input type="radio" name="label" value="personal" checked={label === 'personal'} onChange={onChange} /> Personal{'  '}
                <input type="radio" name="label" value="business" checked={label === 'business'} onChange={onChange} /> Business
                <button type="submit" className='btn btn-primary btn-block'>Add Contact</button>
            </form>
        </div>
    )
}

export default ContactForm;
