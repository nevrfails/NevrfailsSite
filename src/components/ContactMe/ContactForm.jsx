import React from 'react';

function ContactForm(props) {

        return (
            <div>
                 <h2>Connect With Me</h2>
            <form>
                <select name="requestType" id="requestType">
                    <option value="">How can I help you?</option>
                    <option value="branding">Brand Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="webdev">Web Development</option>
                    <option value="consult">Consultant</option>
                </select>
                <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameInput} />
                <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameInput} />
                <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailInput} />
                <input type="submit" onClick={this.makeRequest} value="Let's Get Connected Now!"/>
            </form>
            </div>
        );
}

export default ContactForm;