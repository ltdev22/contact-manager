import React, { useState } from 'react';

const Register = () => {
    /** Initialise the user state */
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });
    const { fullName, email, password, passwordConfirm } = user;

    /** Populate user state with the values the user types in */
    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('TODO register user');
    };

    return (
        <div className='form-container'>
            <h2>Create an account</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Your name:</label>
                    <input type="text" name="fullName" value={fullName} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your email address:</label>
                    <input type="text" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Choose a password:</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordConfirm">Re-enter your password:</label>
                    <input type="password" name="passwordConfirm" value={passwordConfirm} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
        </div>
    );
};

export default Register;
