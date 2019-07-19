import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContacts } from '../store/contacts';

class Home extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return <div>Home</div>;
  }
}
const mapDispatch = {
  getContacts,
};

export default connect(
  null,
  mapDispatch
)(Home);
