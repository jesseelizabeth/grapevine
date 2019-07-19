import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {
  render() {
    const { results } = this.props;
    console.log(results);
    return (
      <div>
        <div>Results</div>
      </div>
    );
  }
}

const mapState = state => ({
  results: state.search.results,
});

export default connect(mapState)(SearchResults);
