import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactView extends Component {
  render() {
    const {
      displayName,
      title,
      company,
      location,
      pets,
      relationships,
    } = this.props.contact;
    return (
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card">
            <div className="card-content">
              <div className="card-title">{displayName}</div>
              <div>Title: {title}</div>
              <div>Company: {company}</div>
              <div>Location: {location}</div>
              <div>Pets:</div>
              {pets
                ? pets.map(pet => <div key={pet.id}>{pet.displayName}</div>)
                : null}
              <div>Relationships:</div>
              {relationships
                ? relationships.map(relationship => (
                    <Link
                      to={`/contacts/${relationship.relationshipId}`}
                      key={relationship.relationshipId}
                    >
                      <div>{relationship.type}</div>
                    </Link>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactView;
