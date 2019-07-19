import React from 'react';

const ContactForm = props => {
  const {
    handleAddContact,
    handleChange,
    displayName,
    title,
    company,
    location,
    petName,
    petType,
    relationshipName,
    relationshipType,
  } = props;
  return (
    <form onSubmit={handleAddContact}>
      <div className="row">
        <div className="input-field col s6">
          <input
            placeholder="Name"
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
          />
        </div>
        <div className="input-field col s6">
          <input
            placeholder="Title"
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input
            placeholder="Company"
            type="text"
            name="company"
            value={company}
            onChange={handleChange}
          />
        </div>
        <div className="input-field col s6">
          <input
            placeholder="Location"
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Relationship Name"
              type="text"
              name="relationshipName"
              value={relationshipName}
              onChange={handleChange}
            />
          </div>
          <div className="input-field col s6">
            <input
              placeholder="Relationship Type"
              type="text"
              name="relationshipType"
              value={relationshipType}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Pet Name"
              type="text"
              name="petName"
              value={petName}
              onChange={handleChange}
            />
          </div>
          <div className="input-field col s6">
            <input
              placeholder="Pet Type"
              type="text"
              name="petType"
              value={petType}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <button className="btn" type="submit" disabled={!displayName}>
          Add Contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
