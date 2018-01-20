import styled from 'styled-components';
import GoPlaybackPlay from 'react-icons/lib/go/playback-play';
import { Link } from 'react-router-dom';
import { MAIN_COLOR } from '../../colors';
import { HEIGHT, WIDTH, TRANSITION, MARGIN } from './constants';

export const MovieRowContent = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
`;
export const MovieRowContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  transition: all ${TRANSITION}s ease-out;
  margin-bottom:20px;
  margin-left:${({ margin }) => `${(margin * (WIDTH + (2 * MARGIN))) + 45}px`};
`;

export const MoviePreviewContainer = styled.div`
  position:relative;
  display:flex;
  height:${HEIGHT}px;
  width:${WIDTH}px;
  opacity:${({ hidden }) => hidden ? 0.5 : 1};
  z-index:100;
  transform:${({ hidden }) => hidden ? 'scale(0.9)' : 'scale(1)'};
  margin:${MARGIN}px;
  margin-top:25px;
  &:hover {
    transform:${({ hidden }) => hidden ? 'scale(0.8)' : 'scale(1.3)'};
    z-index:${({ hidden }) => hidden ? '100' : '110'};
    box-shadow: 0 0 50px 1px rgba(0,0,0,0.7);
  };
  overflow:hidden;
  transition: all ${TRANSITION}s ease-in-out;
  transition-delay: 0.05s;
`;

export const ScrollBarContainer = styled.div`
  position:absolute;
  top:0;
  left:calc(100vw - 300px);
  display: ${({ isHover }) => isHover ? 'none' : 'none'};
  transition: all 0.3s ease-in-out;
  width:200px;
  height:20px;
  background-color:red;
`;

export const ScrollBarInner = styled.div`
  position:relative;
  display:flex;
  background-color:${MAIN_COLOR};
  height:3px;
  border-radius:100px;
  transition: all ${TRANSITION}s;
  width:${({ width }) => `${width}px`};
  margin-left:${({ margin }) => `${margin}px`};
  opacity: 0.8;
`;

export const ShadowContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  width:100%;
  height:calc(100% - 20px);
  opacity: ${({ opacity }) => opacity};
  background:linear-gradient( 220deg, rgba(0,0,0,0), rgba(0,0,0,0.6));  30%);
  transition: all ${TRANSITION}s;
  padding:20px;
  padding-bottom:0;
  z-index:120;
`;

export const Title = styled.div`
  color:white;
  margin:0;
  opacity: ${({ opacity }) => opacity};
  transition: all ${TRANSITION}s;
  transition-delay:0.1s;
  font-size:1em;
  font-weight:900;
  align-self:flex-start;
  user-select: none;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-weight:1;
`;

export const PlayLogo = styled(GoPlaybackPlay)`
  color:white;
  font-size:2.8em;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color:${MAIN_COLOR};
  }
  margin-left:5px;
`;

export const LinkStyed = styled(Link)`
  display:flex;
  justify-content: center;
  align-items: center;
  text-decoration:none;
  border-width:3px;
  border-style: solid;
  border-color:white;
  border-radius:100%;
  margin:25px;
  min-width:37px;
  min-height:37px;
  max-width:37px;
  max-height:37px;
  &:focus {
    outline:none;
  }
  transition: all ${TRANSITION + 1}s;
  opacity: ${({ opacity }) => opacity};
  transition-delay: 0.3s;
  &:hover {
    color:${MAIN_COLOR};
  }
`;

export const DescriptionContainer = styled.div`
  display:flex;
  height: ${HEIGHT / 2}px;
  opacity: ${({ opacity }) => opacity};
  transition: all ${TRANSITION + 5}s;
  width:100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size:0.8em;
  margin-top:15px;
`;

export const DesciptionText = styled.p`
  color:white;
  user-select: none;
  background: linear-gradient(white, rgba(0,0,0,0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-align: justify;
`;

export const BackgroundImage = styled.div`
  position:absolute;
  display:flex;
  height:${HEIGHT}px;
  width:${WIDTH}px;
  background-image:${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter:${({ displayShadow, hidden }) => displayShadow && !hidden ? 'blur(1px)' : ' blur(0px)'};
  -webkit-backface-visibility: hidden;
  -ms-transform: translateZ(0);
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  transition: all 0.4s ease;
`;
