import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_CONTACTS = gql`
  {
    contacts {
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

class AllContacts extends Component {
  render() {
    return (
      <Query query={GET_CONTACTS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>Error</div>;
          return (
            <div>
              {data.contacts.map(contact => (
                <div key={contact.id} className="collection">
                  <div>{contact.displayName}</div>
                  <div>{contact.title}</div>
                  <div>{contact.company}</div>
                  {contact.relationships.map(relationship => (
                    <Link
                      key={relationship.id}
                      to={`/contacts/${relationship.id}`}
                    >
                      <div>
                        {relationship.type} - {relationship.contact.displayName}
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default AllContacts;
