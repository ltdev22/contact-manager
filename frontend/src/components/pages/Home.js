import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';

const Home = () => {
    return (
        <div className='grid-2'>
            <section className='my-contacts'><Contacts /></section>
            <section className='new-contact'><ContactForm /></section>
        </div>
    )
}

export default Home;
