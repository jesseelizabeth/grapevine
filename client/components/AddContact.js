import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../store/contacts';
import ContactForm from './ContactForm';

class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      title: '',
      company: '',
      location: '',
      relationshipName: '',
      relationshipType: '',
      petName: '',
      petType: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleAddContact(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }
  render() {
    return (
      <div>
        <ContactForm
          {...this.state}
          handleChange={this.handleChange}
          handleAddContact={this.handleAddContact}
        />
      </div>
    );
  }
}

const mapDispatch = {
  addContact,
};

export default connect(
  null,
  mapDispatch
)(AddContact);
