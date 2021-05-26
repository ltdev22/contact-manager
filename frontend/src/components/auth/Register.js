import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
    // Initialize context and state
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    // Destructuring
    const { fullName, email, password, passwordConfirm } = user;
    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;
 
    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }

        if (error) {
            if (error.id === 'user_exists') {
                setAlert(error.msg, 'danger');
                clearErrors();
            }
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    /** Populate user state with the values the user types in */
    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = (e) => {
        e.preventDefault();
        if (fullName === '' || email === '' || password === '') {
            setAlert('Please submit all required fields', 'danger');
        } else if(password !== passwordConfirm) {
            setAlert('Passwords don\'t match', 'danger');
        } else {
            register({ fullName, email, password });
        }
    };

    return (
        <div className='form-container'>
            <h2>Create an account</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Your name (*):</label>
                    <input type="text" name="fullName" value={fullName} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your email address (*):</label>
                    <input type="text" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Choose a password (*):</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordConfirm">Re-enter your password:</label>
                    <input type="password" name="passwordConfirm" value={passwordConfirm} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
            <hr />
            <p>* = Required fields</p>
        </div>
    );
};

export default Register;
