import React, { Fragment, useContext } from 'react';
import ContactCard from './ContactCard';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filteredContacts } = contactContext;
    const outputList = filteredContacts ? filteredContacts : contacts ;

    if (contacts.length === 0) {
        return <p className="lead">It seems your contact list is empty.</p>
    }

    return (
        <Fragment>
            {outputList.map((contact) => <ContactCard key={contact.id} contact={contact} />)}
        </Fragment>
    )
}

export default Contacts;
