import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactView from './ContactView';
import PetView from './PetView';
import NoResults from './NoResults';

class SearchResults extends Component {
  render() {
    const { results, loading } = this.props;
    console.log(results);
    if (
      !loading &&
      !results.contacts.length &&
      !results.relContacts.length &&
      !results.pets.length
    ) {
      return <NoResults />;
    }
    return (
      <div className="container">
        {results.contacts
          ? results.contacts.map(contact => (
              <ContactView key={contact.id} contact={contact} />
            ))
          : null}
        {results.pets
          ? results.pets.map(pet => <PetView key={pet.id} pet={pet} />)
          : null}
        {results.relContacts
          ? results.relContacts.map(contact => (
              <ContactView key={contact.id} contact={contact} />
            ))
          : null}
      </div>
    );
  }
}

const mapState = state => ({
  results: state.search.results,
  loading: state.search.loading,
});

export default connect(mapState)(SearchResults);