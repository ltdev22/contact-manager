import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactCard = ({ contact }) => {
    const contactContext = useContext(ContactContext);
    const { deleteContact, setCurrentContact, clearCurrentContact } = contactContext;
    const { _id, name, email, phone, label } = contact;

    /** Deleting contact */
    const onDelete = () => {
        deleteContact(_id);
        clearCurrentContact();
    };

    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {name}
                <span className={' float-right badge ' + (label === 'personal' ? 'badge-dark' : 'badge-primary')}>{label}</span>
            </h3>
            <ul className="list">
                {email && (
                    <li>
                        <i className="fas fa-envelope"></i> {email}
                    </li>
                )}
                {phone && (
                    <li>
                        <i className="fas fa-phone"></i> {phone}
                    </li>
                )}
            </ul>
            <p>
                <button onClick={() => setCurrentContact(contact)} className="btn btn-sm btn-dark">
                    Edit
                </button>
                <button onClick={onDelete} className="btn btn-sm btn-danger">
                    Delete
                </button>
            </p>
        </div>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default ContactCard;
