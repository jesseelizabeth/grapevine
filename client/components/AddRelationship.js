import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRelationship } from '../store/contact';

class AddRelationship extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      type: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddRelationship = this.handleAddRelationship.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleAddRelationship(event) {
    event.preventDefault();
    this.props.addRelationship(this.props.id, this.state);
    this.setState({ displayName: '', type: '' });
  }
  render() {
    return (
      <div className="row">
        <form onSubmit={this.handleAddRelationship}>
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Relationship Name"
                type="text"
                name="displayName"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Relationship Type"
                type="text"
                name="type"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button
            className="btn"
            type="submit"
            disabled={!this.state.displayName}
          >
            Add Relationship
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatch = {
  addRelationship,
};

export default connect(
  null,
  mapDispatch
)(AddRelationship);
