import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactFilter from '../contacts/ContactFilter';
import ContactForm from '../contacts/ContactForm';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='grid-2'>
            <section className='my-contacts'>
                <ContactFilter />
                <Contacts />
            </section>
            <section className='new-contact'><ContactForm /></section>
        </div>
    )
}

export default Home;
