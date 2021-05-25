import React from 'react';

const Alert = ({ alert }) => {
    const { type, msg, icon } = alert;

    return (
        <div className={`alert alert-${type}`}>
            <i className={`fas fa-${icon}`} /> { msg }
        </div>
    );
};

export default Alert;
