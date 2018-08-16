'use strict';

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app';
import reducers from './reducers';
import session from './lib/redux-session';
import thunk from './lib/redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk, session));

const container = document.createElement('div');
document.body.appendChild(container);
render(<Provider store={store}><App/></Provider>, container);
