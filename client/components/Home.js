import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import SearchBar from './SearchBar';
import { getContacts } from '../store/contacts';

class Home extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return (
      <div className="container">
        <SearchBar />
        <ContactForm />
      </div>
    );
  }
}
const mapDispatch = {
  getContacts,
};

export default connect(
  null,
  mapDispatch
)(Home);
