import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTERS,
    SET_CURRENT,
    CLEAR_CURRENT,
} from '../types';

const ContactState = (props) => {
    const initialState = {
        // @TODO should be an empty array - set some demo data temporarily
        contacts: [{
                id:1,
                name: 'Test One',
                email: 'one@test.com',
                phone: '111-111-1111',
                label: 'personal',
            },
            {
                id: 2,
                name: 'Test Two',
                email: 'two@test.com',
                phone: '222-222-2222',
                label: 'personal',
            },
            {
                id: 3,
                name: 'Test Three',
                email: 'three@test.com',
                phone: '333-333-33333',
                label: 'business',
            },
        ],
    };
    const [state, dispatch] = useReducer(contactReducer, initialState);

    /**
     * section to put all Actions
     */

    /** Add Contact */
    /** Delete Contact */
    /** Update Contact */
    /** Set Current Contact */
    /** Clear Current Contact */
    /** Filter Contacts */
    /** ClearFilter */

    return (
        <ContactContext.Provider value={{
            contacts: state.contacts
        }}>{ props.children }</ContactContext.Provider>
    );
};

export default ContactState;