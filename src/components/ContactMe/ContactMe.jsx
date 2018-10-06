import React from 'react';
import './ContactMe.css';
//import firebase from 'firebase/app';
//import 'firebase/database';
//import { DB_CONFIG } from '../../firebase';
//import {database} from '../../config/firebase';

import ContactForm from './ContactForm';

class ContactMe extends React.Component{
    render(){
        return(
            <div className='contact-me'>
                <ContactForm />
            </div>
        );
    }
}

export default ContactMe;
