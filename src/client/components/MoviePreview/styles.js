import styled from 'styled-components';

export const MoviePreviewContainer = styled.div`
  display:flex;
  width:250px;
  height:380px;
  background-color:rgb(45,45,45);
  border-radius:2px;
  margin:20px;
  transition: all 0.2s ease;
  cursor: pointer;
  background-image:${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Shadow = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: flex-start;
  width:100%;
  height:100%;
  background:linear-gradient( 220deg, rgba(0,0,0,0), rgba(0,0,0,0.8));  30%);
  padding:10px;
`;

export const Title = styled.p`
  color:rgb(240,240,240);
  margin:0;
  font-size:1em;
`;
