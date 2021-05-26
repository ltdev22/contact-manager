import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    USER_LOADED,
    AUTH_ERROR,
    CLEAR_ERRORS
} from '../types';

const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    /**
     * section to put all Actions
     */

    /** Load user */

    /** Register user */
    const register = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/users', formData, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data // should be the token returned from the backend api
            });
        } catch (error) {
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data // the object contains the msg if fails
            });
        }
    };

    /** Login user */
    /** Logout user */
    /** Clear errors */
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS});

    /**
     * end section Actions
     */

    return (
        <AuthContext.Provider value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error,
            register,
            clearErrors
        }}>
            { props.children }
        </AuthContext.Provider>
    )
};

export default AuthState;
