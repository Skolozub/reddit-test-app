import './styles/global.module.scss';

import React from 'react';

import AppContainer from './components/app-container';
import ArticlesListContainer from './containers/articles-list-container';
import PingPongButtonsContainer from './containers/ping-pong-buttons-container';

function Application() {
  return (
    <AppContainer>
      <PingPongButtonsContainer />
      <ArticlesListContainer />
    </AppContainer>
  );
}

export default Application;
