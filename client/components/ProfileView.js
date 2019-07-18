import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_CONTACT = gql`
  {
    query Contact($id: ID!) {
      contact(id: $id) {
        displayName
        title
        company
        location
        pets {
          displayName
          type
        }
        relationships {
          type
          contact {
            displayName
          }
        }
      }
    }
  }
`;

class ProfileView extends Component {
  render() {
    const { id } = this.props.location.match;
    return (
      <Query query={GET_CONTACT} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>Error</div>;
          return (
            <div key={data.contact.id}>
              <div>{data.contact.displayName}</div>
              <div>{data.contact.title}</div>
              <div>{data.contact.company}</div>
              {data.contact.relationships.map(relationship => (
                <div key={relationship.id}>
                  {relationship.type} - {relationship.contact.displayName}
                </div>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ProfileView;
