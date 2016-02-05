import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page';
import styles from '../scss/style.scss';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('view')
);
