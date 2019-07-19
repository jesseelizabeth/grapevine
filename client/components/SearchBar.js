import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchDatabase } from '../store/search';

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
    const { results, loading } = this.props;
    if (loading) {
      console.log('loading...');
    } else {
      console.log('RESULTS', results);
    }
    return (
      <div>
        <div className="input-field">
          <input
            type="text"
            value={this.state.symbol}
            onChange={this.handleChange}
            placeholder="Ticker"
          />
          <button
            className="teal accent-3 btn-small"
            type="submit"
            onClick={this.handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  results: state.search.results,
  loading: state.search.loading,
});

const mapDispatch = {
  searchDatabase,
};

export default connect(
  mapState,
  mapDispatch
)(SearchBar);
