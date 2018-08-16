import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../../routes';
import logo from '../../assets/stackline-logo.png';

import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to={ROUTES.LANDING} >
          <img src={logo}/>
        </Link>
      </header>
    );
  }
}
