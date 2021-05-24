import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
        current: null
    };
    const [state, dispatch] = useReducer(contactReducer, initialState);

    /**
     * section to put all Actions
     */

    /** Add Contact */
    const addContact = (contact) => {
        contact.id = uuidv4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    /** Delete Contact */
    const deleteContact = (id) => dispatch({ type: DELETE_CONTACT, payload: id });

    /** Update Contact */
    const updateContact = (contact) => dispatch({ type: UPDATE_CONTACT, payload: contact });

    /** Set Current Contact */
    const setCurrentContact = (contact) => dispatch({ type: SET_CURRENT, payload: contact });

    /** Clear Current Contact */
    const clearCurrentContact = () => dispatch({ type: CLEAR_CURRENT });

    /** Filter Contacts */
    /** ClearFilter */

    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            currentContact: state.current,
            addContact,
            deleteContact,
            updateContact,
            setCurrentContact,
            clearCurrentContact
        }}>{ props.children }</ContactContext.Provider>
    );
};

export default ContactState;