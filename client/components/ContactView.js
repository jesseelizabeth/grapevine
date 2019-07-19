import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactView extends Component {
  render() {
    const { displayName, id } = this.props.contact;
    return (
      <div className="collection">
        <div className="collection-item avatar valign-wrapper">
          <i className="material-icons circle blue"> account_circle</i>
          <Link to={`/contacts/${id}`}>
            <h5>{displayName}</h5>
          </Link>
        </div>
      </div>
    );
  }
}

export default ContactView;
