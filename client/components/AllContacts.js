import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getContacts } from '../store/contacts';
import { Link } from 'react-router-dom';

class AllContacts extends Component {
  // componentDidMount() {
  //   this.props.getContacts();
  // }
  render() {
    const { loading, contacts } = this.props;
    if (loading) return <div>Loading</div>;
    console.log(contacts);
    return (
      <div>
        <h1>HEY</h1>
        {contacts.map(contact => (
          <div key={contact.id} className="collection">
            <div>{contact.displayName}</div>
            <div>{contact.title}</div>
            <div>{contact.company}</div>
            {contact.pets
              ? contact.pets.map(pet => (
                  <div key={pet.id}>{pet.displayName}</div>
                ))
              : null}
            {contact.relationships
              ? contact.relationships.map(relationship => (
                  <Link
                    key={relationship.relationshipId}
                    to={`/contacts/${relationship.relationshipId}`}
                  >
                    <div>{relationship.type}</div>
                  </Link>
                ))
              : null}
          </div>
        ))}
        ); }}
      </div>
    );
  }
}

const mapState = state => ({
  contacts: state.contacts.all,
  loading: state.contacts.loading,
});

// const mapDispatch = {
//   getContacts,
// };

export default connect(mapState)(AllContacts);
