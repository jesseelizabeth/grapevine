import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import { getContacts } from '../store/contacts';
import AddContact from './AddContact';

class Home extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return (
      <div className="container">
        <SearchBar />
        <AddContact />
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
