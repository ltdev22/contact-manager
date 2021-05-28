import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    SET_CURRENT,
    CLEAR_CURRENT,
    CLEAR_ALL,
    CONTACT_ERROR,
} from '../types';

const ContactState = (props) => {
    const initialState = {
        contacts: null,
        current: null,
        filtered: null,
        error: null,
    };
    const [state, dispatch] = useReducer(contactReducer, initialState);

    /**
     * section to put all Actions
     */

    /** Get Contacts */
    const getContacts = async () => {
        try {
            const res = await axios.get('/api/contacts');
            dispatch({ type: GET_CONTACTS, payload: res.data });
        } catch (error) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
        }
    };

    /** Add Contact */
    const addContact = async (contact) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const res = await axios.post('/api/contacts', contact, config);
            dispatch({ type: ADD_CONTACT, payload: res.data });
        } catch (error) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
        }
    };

    /** Delete Contact */
    const deleteContact = async (id) => {
        try {
            await axios.delete(`/api/contacts/${id}`);
            dispatch({ type: DELETE_CONTACT, payload: id });
        } catch (error) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
        }
    };

    /** Update Contact */
    const updateContact = async (contact) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const res = await axios.put(`/api/contacts/${contact._id}`, contact, config);
            dispatch({ type: UPDATE_CONTACT, payload: res.data });
        } catch (error) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
        }
    };

    /** Clear all contacts */
    const clearContacts = () => dispatch({ type: CLEAR_ALL });

    /** Set Current Contact */
    const setCurrentContact = (contact) => dispatch({ type: SET_CURRENT, payload: contact });

    /** Clear Current Contact */
    const clearCurrentContact = () => dispatch({ type: CLEAR_CURRENT });

    /** Filter Contacts */
    const filterContacts = (query) => dispatch({ type: FILTER_CONTACTS, payload: query });

    /** ClearFilter */
    const clearFilter = () => dispatch({ type: CLEAR_FILTER });

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                currentContact: state.current,
                filteredContacts: state.filtered,
                error: state.error,
                getContacts,
                addContact,
                deleteContact,
                updateContact,
                setCurrentContact,
                clearCurrentContact,
                filterContacts,
                clearFilter,
                clearContacts,
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;
