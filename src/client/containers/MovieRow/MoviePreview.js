import React from 'react';
import PropTypes from 'prop-types';

import { MoviePreviewContainer } from './styles';

const MoviePreview = ({
  movie,
  handleGoLeft,
  handleGoRight,
  start,
  end,
}) => (
  <MoviePreviewContainer
    coverImage={movie.coverImage}
    hidden={movie.id < start || movie.id >= ((end + start) - 1)}
  >
  </MoviePreviewContainer>
);

MoviePreview.propTypes = {
  movie: PropTypes.object.isRequired,
  handleGoLeft: PropTypes.func.isRequired,
  handleGoRight: PropTypes.func.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
};

export default MoviePreview;
