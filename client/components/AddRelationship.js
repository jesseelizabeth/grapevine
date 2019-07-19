import React, { Component } from 'react';

class AddRelationship extends Component {
  render() {
    return (
      <div className="row">
        <form className="col s8 offset-s2">
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Relationship Name"
                type="text"
                name="relationship displayName"
              />
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Relationship Type"
                type="text"
                name="relationship type"
              />
            </div>
          </div>
          <button type="submit">Add Relationship</button>
        </form>
      </div>
    );
  }
}

export default AddRelationship;
