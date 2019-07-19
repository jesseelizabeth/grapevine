import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactView from './ContactView';
import PetView from './PetView';

class SearchResults extends Component {
  render() {
    const { results } = this.props;
    console.log(results);
    return (
      <div>
        {results.contacts
          ? results.contacts.map(contact => (
              <ContactView key={contact.id} contact={contact} />
            ))
          : null}
        {results.pets
          ? results.pets.map(pet => <PetView key={pet.id} pet={pet} />)
          : null}
      </div>
    );
  }
}

const mapState = state => ({
  results: state.search.results,
});

export default connect(mapState)(SearchResults);
