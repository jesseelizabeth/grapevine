import React from 'react';

const ContactForm = props => {
  const { handleSubmit, error } = props;

  return (
    <div className="row">
      <form className="col s8 offset-s2" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Name" type="text" name="displayName" />
          </div>
          <div className="input-field col s6">
            <input placeholder="Title" type="text" name="title" />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Company" type="text" name="company" />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Location" type="text" name="location" />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Pets" type="text" name="pets" />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Relationships"
              type="text"
              name="relationships"
            />
          </div>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

export default ContactForm;
