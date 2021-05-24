import React from 'react';
import PropTypes from 'prop-types';

const ContactCard = ({ contact }) => {
    const { id, name, email, phone, label } = contact;
    return (
        <div className='card bg-light'>
            <h3 className="text-primary text-left">
                { name }
                <span className={' float-right badge ' + (label === 'personal' ? 'badge-dark' : 'badge-primary' )}>
                    { label }
                </span>
            </h3>
            <ul className="list">
                {email && (
                    <li>
                        <i className="fas fa-envelope"></i> { email }
                    </li>
                )}
                {phone && (
                    <li>
                        <i className="fas fa-phone"></i> { phone }
                    </li>
                )}
            </ul>
            <p>
                <button className="btn btn-sm btn-dark">Edit</button>
                <button className="btn btn-sm btn-danger">Delete</button>
            </p>
        </div>
    )
}

ContactCard.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default ContactCard;
