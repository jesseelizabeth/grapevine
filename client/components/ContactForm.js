import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

const ADD_CONTACT = gql`
  mutation addContact(
    $displayName: String!
    $title: String!
    $company: String!
    $location: String!
    $pets: petInput
    $relationships: relationshipInput
  ) {
    addContact(
      displayName: $displayName
      title: $title
      company: $company
      location: $location
      pets: $pets
      relationships: $relationships
    ) {
      id
      displayName
      title
      company
      location
    }
  }
`;

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      title: '',
      company: '',
      location: '',
      relationships: {
        displayName: '',
        type: '',
      },
      pets: {
        displayName: '',
        type: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const {
      displayName,
      title,
      company,
      location,
      pets,
      relationships,
    } = this.state;
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
                value={this.state.displayName}
              />
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Title"
                type="text"
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
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
                value={this.state.company}
              />
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Location"
                type="text"
                name="location"
                onChange={this.handleChange}
                value={this.state.location}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Pet Name"
                type="text"
                name={`pets.${displayName}`}
                onChange={this.handleChange}
                value={this.state.pets.displayName}
              />
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Pet Type"
                type="text"
                name="pets.type"
                onChange={this.handleChange}
                value={this.state.pets.type}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Relationship Name"
                type="text"
                name={relationships.displayName}
                onChange={this.handleChange}
                value={this.state.relationships.displayName}
              />
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Relationship Type"
                type="text"
                name={relationships.type}
                onChange={this.handleChange}
                value={this.state.relationships.type}
              />
            </div>
          </div>
          <Mutation
            mutation={ADD_CONTACT}
            variables={{
              displayName,
              title,
              company,
              location,
              relationships,
              pets,
            }}
          >
            {addContact => (
              <button type="button" onClick={addContact}>
                submit
              </button>
            )}
          </Mutation>
        </form>
      </div>
    );
  }
}

export default ContactForm;
