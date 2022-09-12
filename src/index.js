import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import Title from './components/Title';
import DragonList from './components/DragonList';

import titleReducer from './reducers/titleReducer';
import dragonReducer from './reducers/dragonReducer';

import './styles.css';


//Creating store:
// const store = createStore(titleReducer)
const store = configureStore({ reducer: dragonReducer })

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
