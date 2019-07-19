import React, { Component } from 'react';

class AddPet extends Component {
  render() {
    return (
      <div className="row">
        <form className="col s8 offset-s2">
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Pet Name"
                type="text"
                name="pet displayName"
              />
            </div>
            <div className="input-field col s6">
              <input placeholder="Pet Type" type="text" name="pet type" />
            </div>
          </div>
          <button type="submit">Add Pet</button>
        </form>
      </div>
    );
  }
}

export default AddPet;
