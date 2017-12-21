import styled from 'styled-components';

export const MoviesContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:calc(100vw - 185px);
  margin-left:85px;
  min-height:calc(100vh - 100px);
  padding:50px;
  margin-top:100px;
`;

export const MoviePreviewContainer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap:wrap;
  width:100%;
  margin-top:25px;
`;
