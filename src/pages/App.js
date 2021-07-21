import React from 'react';
import { GlobalStyles } from '../styles';
import { Navbar } from '../components';
import { VideoLoad, Home } from '../pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const StyledMainContainer = styled.main`
  position: relative;
`;
const App = () => {
  return (
    <StyledMainContainer>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route component={VideoLoad} path="/upload-video" exact />
          <Route component={Home} path="/" exact />
        </Switch>
      </Router>
    </StyledMainContainer>
  );
};

export default App;
