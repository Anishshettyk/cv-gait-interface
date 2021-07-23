import React from 'react';
import styled from 'styled-components';
import { theme, mixins } from '../styles';
import { useSelector } from 'react-redux';
import { ImArrowUp } from 'react-icons/im';

const { colors } = theme;

const VideoLoadContainer = styled.div`
  height: 90vh;
  max-height: 90vh;
  background: linear-gradient(to right, ${colors.red}, ${colors.blue});
  ${mixins.flexCenter};
`;
const VideoWidget = styled.div`
  background-color: ${colors.white};
  max-width: 500px;
  width: 100%;
  padding: 40px;
  border-radius: 5px;
  background-color: ${colors.white};
  ${mixins.SmallShadow}
  text-align: center;
  h1 {
    font-weight: 500;
    font-size: 1.5rem;
  }
  p {
    margin-top: 10px;
    font-size: 0.7rem;
    text-transform: uppercase;
    color: ${colors.darkBlue};
    opacity: 0.6;
    margin-bottom: 30px;
  }
  label {
    background-color: ${colors.blue};
    color: ${colors.white};
    padding: 10px;
    border-radius: 5px;
    ${mixins.bottomShadow}
    input {
      display: none;
    }
    svg {
      margin-right: 15px;
    }
    span {
      border-left: 0.5px solid ${colors.rgbWhite030};
      padding: 0px 10px;
    }
  }
`;

const VideoLoad = () => {
  const { userDetails } = useSelector((state) => state.user);
  return (
    <VideoLoadContainer>
      <VideoWidget>
        <h1>You can Upload video here</h1>
        <p>{userDetails?.fullName ? userDetails.fullName : ''} please click on the button to upload your video.</p>
        <label>
          <ImArrowUp />
          <input type="file" />
          <span>Upload video</span>
        </label>
      </VideoWidget>
    </VideoLoadContainer>
  );
};

export default VideoLoad;
