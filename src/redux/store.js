import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import { watcherArticles } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer   : rootReducer,
  middleware: [ sagaMiddleware ],
});

sagaMiddleware.run(watcherArticles);
