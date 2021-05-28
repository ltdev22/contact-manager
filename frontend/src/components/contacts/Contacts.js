import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactCard from './ContactCard';
import Spinner from '../layouts/Spinner';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
    const nodeRef = React.useRef(null);
    const contactContext = useContext(ContactContext);
    const { contacts, filteredContacts, getContacts, loading } = contactContext;
    const outputList = filteredContacts !== null ? filteredContacts : contacts;

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, []);

    if (contacts !== null && contacts.length === 0 && !loading) {
        return <p className="lead">It seems your contact list is empty.</p>;
    }

    if (contacts === null && loading) {
        return <Spinner />;
    }

    return (
        <Fragment>
            <TransitionGroup>
                {outputList !== null &&
                    outputList.map((contact) => (
                        <CSSTransition nodeRef={nodeRef} in key={contact._id} timeout={500} classNames="item">
                            <ContactCard contact={contact} />
                        </CSSTransition>
                    ))}
            </TransitionGroup>
        </Fragment>
    );
};

export default Contacts;
