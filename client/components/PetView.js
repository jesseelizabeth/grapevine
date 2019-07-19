import React, { Component } from 'react';

class PetView extends Component {
  render() {
    const { displayName, type, contact } = this.props.pet;
    return (
      <div>
        <div>{displayName}</div>
        <div>{type}</div>
        <div>{contact.displayName}</div>
      </div>
    );
  }
}

export default PetView;
