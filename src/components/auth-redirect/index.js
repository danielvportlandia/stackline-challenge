import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../../routes';

class AuthRedirect extends Component {
  render() {
    const destinationRoute = ROUTES.LANDING;
    
    return (
      <div>
        { destinationRoute ? <Redirect to={ destinationRoute }/> : undefined }
      </div>
    );
  }
}

export default AuthRedirect;
