import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PetView extends Component {
  render() {
    const { displayName, type, contact } = this.props.pet;
    return (
      <div className="collection">
        <div className="collection-item avatar valign-wrapper">
          <i className="material-icons circle blue">pets</i>

          <Link to={`/contacts/${contact.id}`}>
            <h5>
              {displayName} | {contact.displayName}'s {type}
            </h5>
          </Link>
        </div>
      </div>
    );
  }
}

export default PetView;
