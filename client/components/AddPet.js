import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPet } from '../store/contact';

class AddPet extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      type: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddPet = this.handleAddPet.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleAddPet(event) {
    event.preventDefault();
    this.props.addPet(this.props.id, this.state);
    this.setState({ displayName: '', type: '' });
  }
  render() {
    return (
      <div className="row">
        <form onSubmit={this.handleAddPet}>
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Pet Name"
                type="text"
                name="displayName"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Pet Type"
                type="text"
                name="type"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button className="btn" type="submit">
            Add Pet
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatch = {
  addPet,
};

export default connect(
  null,
  mapDispatch
)(AddPet);
