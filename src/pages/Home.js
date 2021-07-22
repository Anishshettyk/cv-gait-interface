import React from 'react';
import styled from 'styled-components';
import { theme, mixins } from '../styles';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';

const { colors } = theme;
const HomeContainer = styled.main`
  width: 100%;
  height: 90vh;
  position: absolute;
  overflow: hidden;
`;
const StyledCircle = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  animation: circleRotate 2s linear infinite;
  opacity: 0.8;

  @keyframes circleRotate {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  &.circle1 {
    top: -5%;
    left: 0%;
    width: 100px;
    height: 100px;
    background: linear-gradient(to right, ${colors.grey3}, ${colors.lightBlue});
  }
  &.circle2 {
    top: 25%;
    left: 35%;
    background: linear-gradient(to right, ${colors.grey1}, ${colors.lightBlue});
  }
  &.circle3 {
    top: 50%;
    left: -6%;
    width: 200px;
    height: 200px;
    background: linear-gradient(to right, ${colors.grey3}, ${colors.lightestBlue});
  }
  &.circle4 {
    bottom: -10%;
    right: 20%;
    width: 300px;
    height: 300px;

    background: linear-gradient(to right, ${colors.grey3}, ${colors.lightestBlue});
  }
  &.circle5 {
    bottom: -10%;
    left: 20%;
    width: 150px;
    height: 150px;
    background: linear-gradient(to right, ${colors.grey1}, ${colors.lightBlue});
  }
  &.circle6 {
    top: 0%;
    right: -12%;
    width: 250px;
    height: 250px;
    background: linear-gradient(to right, ${colors.grey3}, ${colors.lightestBlue});
    opacity: 1;
    animation-duration: 4s;
  }
  &.circle7 {
    top: -10%;
    right: 30%;
    width: 150px;
    height: 150px;
    background: linear-gradient(to right, ${colors.grey3}, ${colors.lightBlue});
    opacity: 0.6;
  }
`;
const StyledHomeInfo = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  z-index: 100;
  ${mixins.flexCenter};
  flex-direction: column;
  h1 {
    text-align: center;
  }
  p {
    color: ${colors.darkBlue};
    font-size: 1.2em;
    margin-top: 10px;
    font-weight: bold;
    opacity: 0.8;
  }
  button {
    margin-top: 30px;
    ${mixins.blueButton};
    ${mixins.flexCenter};
  }
`;

const Home = () => {
  const history = useHistory();
  const StartAnalyserOnClick = () => {
    history.push('/enter-your-details');
  };
  return (
    <HomeContainer>
      <StyledCircle className="circle1"></StyledCircle>
      <StyledCircle className="circle2"></StyledCircle>
      <StyledCircle className="circle3"></StyledCircle>
      <StyledCircle className="circle4"></StyledCircle>
      <StyledCircle className="circle5"></StyledCircle>
      <StyledCircle className="circle6"></StyledCircle>
      <StyledCircle className="circle7"></StyledCircle>
      <StyledHomeInfo>
        <h1 className="gradient-huge-heading-green-blue-purple">
          <span className="gradient-huge-heading-red-blue">Welcome to </span>
          <br /> CV gait analyser
        </h1>
        <p>lorem ipsum dolor sit am ghjd kfllf kklg ooghhd iif</p>
        <button onClick={() => StartAnalyserOnClick()}>
          Start analyser <IoArrowForwardOutline />
        </button>
      </StyledHomeInfo>
    </HomeContainer>
  );
};

export default Home;
