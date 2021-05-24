import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon} />&nbsp;{ title }
            </h1>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Contact Manager',
    icon: 'fas fa-address-book',
}

export default Navbar;
