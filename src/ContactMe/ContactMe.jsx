import React from 'react';
import './ContactMe.css';

class ContactMe extends React.Component{
    render(){
        return(
            <div className='contact-me'>
            <h2>Connect With Me</h2>
            <form>
                <select name="" id="">
                    <option value="">How can I help you?</option>
                    <option value="">Brand Development</option>
                    <option value="">UI/UX Design</option>
                    <option value="">Web Development</option>
                    <option value="">Consultant</option>
                </select>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="submit" value="Let's Get Connected Now!"/>
            </form>
            </div>
        );
    }
}

export default ContactMe;