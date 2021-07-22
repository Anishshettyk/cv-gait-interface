import React from 'react';
import { GlobalStyles } from '../styles';
import { Layout } from '../components';
import { VideoLoad, Home, UserDetails } from '../pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiThemes } from '../styles';
import { Provider } from 'react-redux';
import store from '../redux/store';

const StyledMainContainer = styled.main`
  position: relative;
`;
const App = () => {
  return (
    <Provider store={store}>
      <StyledMainContainer>
        <MuiThemeProvider theme={MuiThemes}>
          <Router>
            <GlobalStyles />
            <Layout>
              <Switch>
                <Route component={VideoLoad} path="/upload-video" exact />
                <Route component={Home} path="/" exact />
                <Route component={UserDetails} path="/enter-your-details" exact />
              </Switch>
            </Layout>
          </Router>
        </MuiThemeProvider>
      </StyledMainContainer>
    </Provider>
  );
};

export default App;
