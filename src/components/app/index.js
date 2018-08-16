import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Favicon from 'react-favicon';

// -------------------------------------------------------------------------------------------------
// COMPONENT IMPORTS
// -------------------------------------------------------------------------------------------------
import ScrollToTop from '../scroll-to-top';
import AuthRedirect from '../auth-redirect';
import Header from '../header';
import Dashboard from '../dashboard';

import favicon from '../../assets/favicon.png';
import ROUTES from '../../routes';
import '../../style/main.scss';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Favicon url={favicon}/>
          <Helmet>
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta property="og:title" content="Stackline-challenge" />
            <meta property="og:type" content="website" />
          </Helmet>
          <Header/>
          <Route path='*' component={AuthRedirect}/>
          <Route exact path={ROUTES.LANDING} component={Dashboard}/>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}
