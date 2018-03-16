import React from 'react';
import {
  object,
  bool,
  func,
  number,
} from 'prop-types';
import {
  withStateHandlers,
  compose,
  lifecycle,
} from 'recompose';

import {
  MainContainer,
  BackgroundImage,
} from './styles';
import Shadow from './Shadow';

const MoviePreview = ({
  movie,
  displayShadow,
  isSmall,
  moviesCount,
  handleChangeShadowDisplay,
  pos,
  handleChangeIsPreviewOpen,
  loadDetailsData,
}) => (
  <MainContainer
    onMouseEnter={() => handleChangeShadowDisplay(true)}
    onMouseLeave={() => handleChangeShadowDisplay(false)}
    isSmall={isSmall}
    pos={pos}
    moviesCount={moviesCount}
  >
    {
      displayShadow &&
      <Shadow
        handleChangeIsPreviewOpen={handleChangeIsPreviewOpen}
        loadDetailsData={loadDetailsData}
        movie={movie}
        displayShadow={displayShadow}
      />
    }
    <BackgroundImage
      coverImage={movie.coverImage}
      displayShadow={displayShadow}
    />
  </MainContainer>
);

MoviePreview.propTypes = {
  movie: object.isRequired,
  isSmall: bool.isRequired,
  displayShadow: bool.isRequired,
  handleChangeShadowDisplay: func.isRequired,
  pos: number.isRequired,
  moviesCount: number.isRequired,
  loadDetailsData: func.isRequired,
  handleChangeIsPreviewOpen: func.isRequired,
};

const enhance = compose(

  withStateHandlers(
    {
      displayShadow: false,
      isSmall: true,
    },
    {
      handleChangeShadowDisplay: () => display => ({ displayShadow: display }),
      handleChangeSize: ({ isSmall }) => () => ({ isSmall: !isSmall }),
    },
  ),
  lifecycle({
    componentDidMount() {
      setTimeout(() => {
        this.props.handleChangeSize();
      }, 0.2);
    },
  }),
);

export default enhance(MoviePreview);

