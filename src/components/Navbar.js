import React from 'react';
import styled from 'styled-components';
import { theme, mixins } from '../styles';
import { Link } from 'react-router-dom';

import xfinito_logo from '../assets/xfinito-logo.png';

const { colors } = theme;
const NavbarContainer = styled.nav`
  width: 100%;
  max-height: 100px;
  background-color: ${colors.white};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  ${mixins.flexCenter}
  ${mixins.bottomShadow}
  padding:10px 0px;
  img {
    width: 60px;
  }
  h1 {
    margin-left: 10px;
    font-weight: 600;
    color: ${colors.darkBlue1};
    letter-spacing: 1px;
    span {
      color: ${colors.lightBlue};
      font-size: 2rem;
      font-weight: 900;
    }
  }
`;

const Navbar = () => {
  return (
    <Link to="/">
      <NavbarContainer>
        <img src={xfinito_logo} alt="xfinito logo" />
        <h1>
          <span>X</span>finito
        </h1>
      </NavbarContainer>
    </Link>
  );
};

export default Navbar;
