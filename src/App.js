import React from 'react';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

// setup initial state
const defaultState = {
  count: 0,
};

// setup store
const store = createStore(reducer, defaultState);

const App = () => {
  return (
    <Provider store={store}>
      <Counter />;
    </Provider>
  );
};

export default App;
