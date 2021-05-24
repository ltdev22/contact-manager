import React, { Fragment, useContext } from 'react';
import ContactCard from './ContactCard';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts } = contactContext;

    return (
        <Fragment>
            {contacts.map((contact) => <ContactCard key={contact.id} contact={contact} />)}
        </Fragment>
    )
}

export default Contacts;
