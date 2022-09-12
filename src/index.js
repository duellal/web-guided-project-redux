import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';

import Title from './components/Title';
import DragonList from './components/DragonList';

import reducers from './reducers/index'

import './styles.css';


//Creating store:
const store = configureStore({ reducer: reducers })
console.log(store.getState())

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Title />
        <DragonList />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  //can wrap provider here too - see commented out lines:
  //<Provider store={store}>
  <App />, rootElement
  //</Provider>
);
