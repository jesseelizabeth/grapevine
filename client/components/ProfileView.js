import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_CONTACT = gql`
  {
    contact(id: 8) {
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
`;

class ProfileView extends Component {
  render() {
    return (
      <Query query={GET_CONTACT}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>Error</div>;
          console.log(data);
          return (
            <div>
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
