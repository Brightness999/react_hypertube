import React from 'react';
import PropTypes from 'prop-types';
import { withStateHandlers } from 'recompose';

import { MoviePreviewContainer, Shadow, Title } from './styles';

const MoviePreview = ({
  movie,
  displayShadow,
  showShadow,
  hideShadow,
}) => (
  <MoviePreviewContainer
    onMouseEnter={showShadow}
    onMouseLeave={hideShadow}
    coverImage={movie.coverImage}
  >
    {displayShadow &&
      <Shadow>
        <Title>{movie.name}</Title>
      </Shadow>
    }
  </MoviePreviewContainer>
);

MoviePreview.propTypes = {
  movie: PropTypes.object.isRequired,
  displayShadow: PropTypes.bool.isRequired,
  showShadow: PropTypes.func.isRequired,
  hideShadow: PropTypes.func.isRequired,
};

const enhance = withStateHandlers(
  {
    displayShadow: false,
  },
  {
    showShadow: () => () => ({ displayShadow: true }),
    hideShadow: () => () => ({ displayShadow: false }),
  },
);

export default enhance(MoviePreview);

