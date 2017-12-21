import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import { loadMovies } from './actions/movies';
import { reqMovies } from './request';
import App from './pages/App';

const initialState = {};
const store = configureStore(initialState);

reqMovies(50, 10).then(movies => store.dispatch(loadMovies(movies)));

const Root = () => <Provider store={store}><App /></Provider>;

ReactDOM.render(<Root />, document.getElementById('__HYPERTUBE__'));
