import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);
    
    /** Initialise the user state */
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    // Destructuring
    const { email, password } = user;
    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        // Redirect to homepage if authenticated
        if (isAuthenticated) {
            props.history.push('/');
        }

        if (error) {
            if (error.id === 'login_failed') {
                setAlert(error.msg);
                clearErrors();
            }
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    /** Populate user state with the values the user types in */
    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('Please fill your login details', 'danger');
        } else {
            login({ email, password });
        }
    };

    return (
        <div className='form-container'>
            <h2>Sign In</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
            </form>
        </div>
    );
};

export default Login;
