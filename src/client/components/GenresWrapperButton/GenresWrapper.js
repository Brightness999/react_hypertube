import React from 'react';
import {
  array,
  func,
} from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { reqMovies } from '../../request';
import {
  updateMovies,
  resetMovies,
} from '../../actions/movies';
import { getGenres } from '../../selectors/movies';
import {
  GenresWrapperContainer,
  GenresWrapperOverlay,
  Genre,
} from './styles';

const GenresWrapper = ({
  genres,
  handleChangeWrapped,
  updateMovies,
  resetMovies,
}) => (
  <GenresWrapperOverlay>
    <GenresWrapperContainer>
      {genres.map(genre => (
        <Genre onClick={() => {
          reqMovies({limit: 25, offset: 0, genres: genre })
            .then(data => {
              resetMovies();
              updateMovies(data, genre);
            });
        }}>
          {genre.toLowerCase()}
        </Genre>
      ))}
    </GenresWrapperContainer>
  </GenresWrapperOverlay>
);

GenresWrapper.propTypes = {
  genres: array.isRequired,
  handleChangeWrapped: func.isRequired,
  resetMovies: func.isRequired,
};

const mapStateToProps = state => ({
  genres: getGenres(state),
});

const actions = { updateMovies, resetMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GenresWrapper);
