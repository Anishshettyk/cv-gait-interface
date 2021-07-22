import React from 'react';
import { GlobalStyles } from '../styles';
import { Navbar } from '../components';
import { VideoLoad, Home, UserDetails } from '../pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiThemes } from '../styles';

const StyledMainContainer = styled.main`
  position: relative;
`;
const App = () => {
  return (
    <StyledMainContainer>
      <MuiThemeProvider theme={MuiThemes}>
        <Router>
          <GlobalStyles />
          <Navbar />
          <Switch>
            <Route component={VideoLoad} path="/upload-video" exact />
            <Route component={Home} path="/" exact />
            <Route component={UserDetails} path="/enter-your-details" exact />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </StyledMainContainer>
  );
};

export default App;
