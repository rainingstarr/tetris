import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tetrisReducer from './redux/reducers';
import Board from './components/Board';

const store = createStore(tetrisReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Board />
      </div>
    </Provider>
  );
}

export default App;
