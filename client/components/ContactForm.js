import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../store/contacts';
import AddRelationship from './AddRelationship';
import AddPet from './AddPet';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      title: '',
      company: '',
      location: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleAddContact() {
    const { displayName, title, company, location } = this.state;
    console.log(this.state);
    const contact = { displayName, title, company, location };
    this.props.addContact(contact);
    this.setState({ displayName: '', title: '', company: '', location: '' });
  }
  render() {
    return (
      <div className="row">
        <form className="col s8 offset-s2">
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Name"
                type="text"
                name="displayName"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Title"
                type="text"
                name="title"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Company"
                type="text"
                name="company"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Location"
                type="text"
                name="location"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </form>
        <button type="submit" onClick={this.handleAddContact}>
          Add Contact
        </button>
        <AddRelationship />
        <AddPet />
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
)(ContactForm);
