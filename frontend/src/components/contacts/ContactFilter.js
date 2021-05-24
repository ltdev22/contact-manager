import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
    const query = useRef('');
    const contactContext = useContext(ContactContext);
    const { filterContacts, clearFilter, filtered } = contactContext;

    useEffect(() => {
        if (filtered === null) {
            query.current.value = '';
        }
    });

    const onChange = (e) => {
        if (query.current.value !== '') {
            filterContacts(e.target.value);
        } else {
            clearFilter();
        }
    };

    return (
        <form>
            <input ref={query} onChange={onChange} type="text" placeholder='&#xF002; Look for contacts...' style={searchStyles} />
        </form>
    )
}

const searchStyles = {
    fontFamily:'Arial, FontAwesome'
};

export default ContactFilter;
