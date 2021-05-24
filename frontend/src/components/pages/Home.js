import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactFilter from '../contacts/ContactFilter';
import ContactForm from '../contacts/ContactForm';

const Home = () => {
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
