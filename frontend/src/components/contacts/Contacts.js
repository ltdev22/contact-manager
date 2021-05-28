import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactCard from './ContactCard';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
    const nodeRef = React.useRef(null);
    const contactContext = useContext(ContactContext);
    const { contacts, filteredContacts } = contactContext;
    const outputList = filteredContacts ? filteredContacts : contacts;

    if (contacts.length === 0) {
        return <p className="lead">It seems your contact list is empty.</p>;
    }

    return (
        <Fragment>
            <TransitionGroup>
                {outputList.map((contact) => (
                    <CSSTransition
                        nodeRef={nodeRef}
                        in
                        key={contact._id}
                        timeout={500}
                        classNames="item"
                    >
                        <ContactCard contact={contact} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </Fragment>
    );
};

export default Contacts;
