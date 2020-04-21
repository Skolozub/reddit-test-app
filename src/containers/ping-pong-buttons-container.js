import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PingPongButtons from '../components/ping-pong-buttons';
import { loadArticles } from '../redux/articles';
import { subreddits } from '../static/subreddits';

function PingPongButtonsContainer() {
  const dispatch = useDispatch();
  const { status } = useSelector(state => state.articles);

  function onClickHandler(subredditId) {
    dispatch(loadArticles(subredditId));
  }

  return (
    <PingPongButtons
      buttons={ subreddits }
      isDisabled={ status.isLoading }
      onClick={ onClickHandler }
    />
  );
}

export default PingPongButtonsContainer;
