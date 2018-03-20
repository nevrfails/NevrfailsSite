import React from 'react';
import './ContactMe.css';
import firebase from 'firebase/app';
import 'firebase/database';
import { DB_CONFIG } from '../../firebase';

import ContactForm from './ContactForm';

class ContactMe extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            requestType: '',
            firstName: '',
            lastName: '',
            email: '',
        };

        this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
        this.handleLastNameInput = this.handleLastNameInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);


    }

    handleFirstNameInput(e){
        this.setState({
            firstName: e.target.value,
        })
    }
    handleLastNameInput(e){
        this.setState({
            lastName: e.target.value,
        })
    }
    handleEmailInput(e){
        this.setState({
            email: e.target.value,
        })
    }
    makeRequest(e){
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
        })
    }

    render(){
        return(
            <div className='contact-me'>
                <ContactForm requestType={this.state.requestType} firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} />
            </div>
        );
    }
}

export default ContactMe;