import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactView extends Component {
  render() {
    const { relation, contact } = this.props;
    return (
      <div className="collection">
        <div className="collection-item avatar valign-wrapper">
          <i className="material-icons circle blue"> account_circle</i>
          <Link to={`/contacts/${contact.id}`}>
            {relation ? (
              <h5>
                {contact.displayName} | {relation.contact.displayName}'s{' '}
                {relation.type}{' '}
              </h5>
            ) : (
              <h5>{contact.displayName}</h5>
            )}
          </Link>
        </div>
      </div>
    );
  }
}

export default ContactView;
