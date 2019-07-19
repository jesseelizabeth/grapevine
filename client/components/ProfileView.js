import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContact } from '../store/contact';
import AddRelationship from './AddRelationship';
import AddPet from './AddPet';

class ProfileView extends Component {
  constructor() {
    super();
    this.state = {
      relationshipForm: false,
      petForm: false,
    };
    this.handleRedirect = this.handleRedirect.bind(this);
    this.toggleRelationshipForm = this.toggleRelationshipForm.bind(this);
    this.togglePetForm = this.togglePetForm.bind(this);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }
  handleRedirect(id) {
    this.props.getContact(id);
  }
  toggleRelationshipForm() {
    this.setState(prevState => ({
      relationshipForm: !prevState.relationshipForm,
    }));
  }
  togglePetForm() {
    this.setState(prevState => ({
      petForm: !prevState.petForm,
    }));
  }
  render() {
    const { loading, contact } = this.props;
    const { relationshipForm, petForm } = this.state;
    if (loading) return <div>Loading</div>;
    return (
      <div className="container">
        <div>
          <h4>{contact.displayName}</h4>
          <div>
            {contact.title} | {contact.company}
          </div>
          <div>{contact.location}</div>
        </div>
        <div>
          <h5 className="col">
            Relationships{' '}
            <i
              onClick={this.toggleRelationshipForm}
              className="col material-icons blue-text"
            >
              add_circle_outline
            </i>
          </h5>
          {contact.relationships
            ? contact.relationships.map(relationship => (
                <div
                  className="blue-text"
                  key={relationship.relationshipId}
                  onClick={() =>
                    this.handleRedirect(relationship.relationshipId)
                  }
                >
                  {relationship.type}
                </div>
              ))
            : 'No Relationships'}
          {relationshipForm ? <AddRelationship id={contact.id} /> : null}
        </div>
        <div>
          <h5>
            Pets{' '}
            <i
              onClick={this.togglePetForm}
              className="col material-icons blue-text"
            >
              add_circle_outline
            </i>
          </h5>
          {contact.pets ? (
            contact.pets.map(pet => (
              <div key={pet.id}>
                {pet.displayName} | {pet.type}
              </div>
            ))
          ) : (
            <div>No Pets</div>
          )}
          {petForm ? <AddPet id={contact.id} /> : null}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  contact: state.contact.selected,
  loading: state.contact.loading,
});

const mapDispatch = {
  getContact,
};

export default connect(
  mapState,
  mapDispatch
)(ProfileView);
