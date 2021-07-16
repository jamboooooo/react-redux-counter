import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './style.css'

const initialState = {
  counter: 0,
  dark: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/plus':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'counter/minus':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'counter/reset':
      return {
        ...state,
        counter: state.counter = 0
      }
    case 'background/inverseStyle':
      return {
        ...state,
        dark: state.dark = !state.dark
      }
    default: 
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
