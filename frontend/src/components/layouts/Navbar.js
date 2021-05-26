import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user } = authContext;

    const onLogout = () => {
        logout();
    };

    const authenticatedLinks = (
        <Fragment>
            <li>Logged in: { user && user.fullName.split(' ').slice(0, -1).join(' ') }</li>
            <li>
                <a href="#!" onClick={onLogout}>
                    <i className="fas fa-power-off"></i>&nbsp;
                    <span className="hide-sm">Sign Off</span>
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Sign Up</Link>
            </li>
            <li>
                <Link to='/login'>Sign In</Link>
            </li>
        </Fragment>
    );

    return (
        <nav className='navbar bg-primary'>
            <h1>
                <Link to='/'>
                    <i className={icon} />&nbsp;{ title }
                </Link>
            </h1>
            <ul>
                { isAuthenticated ? authenticatedLinks : guestLinks }
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
