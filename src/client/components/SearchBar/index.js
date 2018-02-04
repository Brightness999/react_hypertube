import React from 'react';
import { withStateHandlers, compose } from 'recompose';
import { Debounce } from 'react-throttle';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  bool,
  func,
  string,
  array,
} from 'prop-types';

import req from '../../request';
import {
  getMovies,
  getMoviesCount,
  getSelectedGenre,
} from '../../selectors/movies';
import {
  SearchBarContainer,
  SearchLogo,
  SearchBox,
  SearchInput,
} from './styles';
import {
  addMovies,
  resetMovies,
  changeParams,
} from '../../actions/movies';

const search = (value, addMovies, resetMovies, changeParams,  movies, selectedGenre) => {
  if (value.length === 0) {
    req.movies({})
      .then(data => {
        resetMovies();
        addMovies(data);
      });
  } else {
    req.movies({ q: value })
      .then(data => {
        resetMovies();
        addMovies(data);
        changeParams({ q: value });
      });
  }
};

const SearchBar = ({
  wrapped,
  value,
  handleChangeWrapped,
  handleChangevalue,
  addMovies,
  movies,
  selectedGenre,
  resetMovies,
  changeParams,
}) => (
  <SearchBarContainer>
    <SearchBox wrapped={wrapped}>
      <SearchLogo onClick={() => handleChangeWrapped()} />
      {!wrapped &&
        <Debounce time="400" handler="onChange">
          <SearchInput onChange={e => search(e.target.value, addMovies, resetMovies, changeParams, movies, selectedGenre)} />
        </Debounce>
      }
    </SearchBox>
  </SearchBarContainer>
);

SearchBar.propTypes = {
  wrapped: bool.isRequired,
  value: string.isRequired,
  handleChangeWrapped: func.isRequired,
  handleChangevalue: func.isRequired,
  addMovies: func.isRequired,
  movies: array.isRequired,
  selectedGenre: string.isRequired,
  resetMovies: func.isRequired,
  changeParams: func.isRequired,
};

const actions = { addMovies, resetMovies, changeParams };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  movies: getMovies(state),
  selectedGenre: getSelectedGenre(state),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(
    {
      wrapped: true,
      value: '',
    },
    {
      handleChangeWrapped: ({ wrapped }) => () => ({ wrapped: !wrapped }),
      handleChangevalue: () => value => ({ value }),
    },
  ),
)(SearchBar);
