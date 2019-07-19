import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchDatabase } from '../store/search';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      keyword: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ keyword: event.target.value });
  }
  handleSearch() {
    const { keyword } = this.state;
    this.props.searchDatabase(keyword);
  }

  render() {
    return (
      <div>
        <div className="input-field">
          <input
            type="text"
            value={this.state.symbol}
            onChange={this.handleChange}
            placeholder="Search"
          />
          <Link to="/results">
            <button
              className="teal accent-3 btn-small"
              type="submit"
              onClick={this.handleSearch}
              disabled={!this.state.keyword}
            >
              Search
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatch = {
  searchDatabase,
};

export default connect(
  null,
  mapDispatch
)(SearchBar);
