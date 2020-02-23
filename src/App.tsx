import React from 'react';
import RepoistoryList from './components/RepoistoryList';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <RepoistoryList />
  </Provider>
);

export default App;
