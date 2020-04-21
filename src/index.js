import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Application from './application';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Application />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);