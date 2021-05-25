import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const initContact = {
    name: '',
    email: '',
    phone: '',
    label: 'personal'
};

const ContactForm = () => {
    const contactContext = useContext(ContactContext);
    const { addContact, updateContact, currentContact, clearCurrentContact } = contactContext;
    const [contact, setContact] = useState(initContact);

    useEffect(() => {
        if (currentContact !== null) {
            setContact(currentContact);
        } else {
            setContact(initContact);    
        }
    }, [contactContext, currentContact]); // to kick-in only if contactContext or currentContact has changed

    const { name, email, phone, label} = contact;

    /** Populate the state with the contact details the users fills in the form */
    const onChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

    /** Submitting the form */
    const onSubmit = (e) => {
        e.preventDefault();
        if (currentContact) {
            updateContact(contact);
        } else {
            addContact(contact);
        }
        clearAll();
    };

    const clearAll = () => clearCurrentContact();

    return (
        <div className='add-contact'>
            <h2 className="text-primary">{(currentContact) ? 'Edit ' + name : 'New Contact' }</h2>
            <form onSubmit={onSubmit}>
                <input type="text" value={name} onChange={onChange} name="name" placeholder="contact's name" />
                <input type="text" value={email} onChange={onChange} name="email" placeholder="contact's email address" />
                <input type="text" value={phone} onChange={onChange} name="phone" placeholder="contact's phone number" />
                <span>Is:</span>{'  '}
                <input type="radio" name="label" value="personal" checked={label === 'personal'} onChange={onChange} /> Personal{'  '}
                <input type="radio" name="label" value="business" checked={label === 'business'} onChange={onChange} /> Business
                <button type="submit" className='btn btn-primary btn-block'>Save</button>
                {currentContact && <button onClick={clearAll} className='btn btn-light btn-block'>Clear</button>}
            </form>
        </div>
    )
}

export default ContactForm;
