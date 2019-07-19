import React, { Component } from 'react';

class ContactView extends Component {
  render() {
    const { displayName, title, company, location } = this.props.contact;
    return (
      <div>
        <div>{displayName}</div>
        <div>{title}</div>
        <div>{company}</div>
        <div>{location}</div>
      </div>
    );
  }
}

export default ContactView;
