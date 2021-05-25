import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <Link to='/'>
                    <i className={icon} />&nbsp;{ title }
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/register'>Sign Up</Link>
                </li>
                <li>
                    <Link to='/login'>Sign In</Link>
                </li>
            </ul>
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
