import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContact } from '../store/contact';

class ProfileView extends Component {
  constructor() {
    super();
    this.handleRedirect = this.handleRedirect.bind(this);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }
  handleRedirect(id) {
    this.props.getContact(id);
  }
  render() {
    const { loading, contact } = this.props;
    console.log(contact);
    if (loading) return <div>Loading</div>;
    return (
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card">
            <div className="card-content">
              <div className="card-title">{contact.displayName}</div>
              <div>Title: {contact.title}</div>
              <div>Company: {contact.company}</div>
              {contact.relationships
                ? contact.relationships.map(relationship => (
                    <div
                      className="blue-text"
                      key={relationship.relationshipId}
                      onClick={() =>
                        this.handleRedirect(relationship.relationshipId)
                      }
                    >
                      {relationship.type}
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
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
