import React,{Component} from 'react';
//import {database} from '../../config/firebase';



class ContactForm extends Component {

  constructor(props){
    super(props);

    this.state = {
        requestType: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    };

    this.handleRequest = this.handleRequest.bind(this);
    this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
    this.handleLastNameInput = this.handleLastNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePhoneInput = this.handlePhoneInput.bind(this);
  };

  //const clients = database.database().ref().child('clients');

  handleRequest(e){
    this.setState({
      requestType: e.target.value
    })
  }

  handleFirstNameInput(e){
      this.setState({
          firstName: e.target.value
      });
  };
  handleLastNameInput(e){
      this.setState({
          lastName: e.target.value
      });
  };
  handleEmailInput(e){
      this.setState({
          email: e.target.value
      });
  };
  handlePhoneInput(e){
      this.setState({
          phone: e.target.value
      });
  };
  makeRequest(e){
      this.setState({
          requestType: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
      })

      // let client = {
      //   requestType: this.requestType,
      //   firstName: this.firstName,
      //   lastName: this.lastName,
      //   email: this.email,
      //   phone: this.phone
      // }

      //clients.push(client);
  }

render(){
        return (
            <div>
                 <h2>Connect With Me</h2>
            <form>
                <select name="requestType" id="requestType" value={this.state.requestType}>
                    <option value="">How can I help you?</option>
                    <option value="branding">Brand Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="webdev">Web Development</option>
                    <option value="consult">Consultant</option>
                </select>
                <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameInput} />
                <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameInput} />
                <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailInput} />
                <input type="text" name="phone" placeholder="Phone" value={this.state.phone} onChange={this.handlePhoneInput} />
                <input type="submit" onClick={this.makeRequest} value="Let's Get Connected Now!"/>
            </form>
            </div>
        );
      }
}

export default ContactForm;
