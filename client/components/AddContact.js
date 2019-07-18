import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import ContactForm from './ContactForm';

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
    )
  }
`;

class AddContact extends Component {
  render() {
    return (
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
        {addContact => <ContactForm handleSubmit={addContact} />}
      </Mutation>
    );
  }
}

export default AddContact;
