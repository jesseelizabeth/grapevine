import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PetView extends Component {
  render() {
    const { displayName, type, contact } = this.props.pet;
    return (
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card">
            <div className="card-content">
              <div className="card-title">{displayName}</div>
              <div>{type}</div>
              <Link to={`/contacts/${contact.id}`}>
                <div>Owner: {contact.displayName}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PetView;
