import React, { Component } from 'react';

class ContactView extends Component {
  render() {
    const { displayName, title, company, location } = this.props.contact;
    return (
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card">
            <div className="card-content">
              <div className="card-title">{displayName}</div>
              <div>Title: {title}</div>
              <div>Company: {company}</div>
              <div>Location: {location}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactView;
