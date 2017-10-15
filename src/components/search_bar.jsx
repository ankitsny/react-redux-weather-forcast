import React from 'react';
import PropTypes from 'prop-types';

// const SearchBar = () => <input />;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onSearchTermChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onSearchTermChange(event.target.value)}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearchTermChange: PropTypes.func,
};

SearchBar.defaultProps = {
  onSearchTermChange: null,
};

export default SearchBar;
