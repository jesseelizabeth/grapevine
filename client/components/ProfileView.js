import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContact } from '../store/contact';

class ProfileView extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }
  render() {
    const { loading, contact } = this.props;
    console.log(contact);
    if (loading) return <div>Loading</div>;
    return (
      <div>
        <div>{contact.displayName}</div>
        <div>{contact.title}</div>
        <div>{contact.company}</div>
        {contact.relationships
          ? contact.relationships.map(relationship => (
              <div key={relationship.id}>{relationship.type}</div>
            ))
          : null}
      </div>
    );
  }
}

const mapState = state => ({
  contact: state.contact.selected,
  loading: state.contact.loading,
});

const mapDispatch = {
  getContact,
};

export default connect(
  mapState,
  mapDispatch
)(ProfileView);
