import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const middleware=[];

const sagaMiddleware=createSagaMiddleware();

middleware.push(sagaMiddleware);

const store=createStore(reducers, compose(applyMiddleware(...middleware)));

sagaMiddleware.run(sagas);

export default store;