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

const reducer = (state, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
                loading: false,
            };
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts],
                loading: false,
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map((contact) => (contact._id === action.payload._id ? action.payload : contact)),
                loading: false,
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact._id !== action.payload),
                loading: false,
            };
        case CLEAR_ALL:
            return {
                ...state,
                contacts: null,
                loading: null,
                filtered: null,
                error: null,
                current: null,
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload,
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null,
            };
        case FILTER_CONTACTS:
            return {
                ...state,
                filtered: state.contacts.filter((contact) => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return contact.name.match(regex) || contact.email.match(regex) || contact.phone.match(regex) || contact.label.match(regex);
                }),
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null,
            };
        case CONTACT_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
