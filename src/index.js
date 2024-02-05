import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AddCommasProvider } from './context/Context';
import { AddToCartProvider } from './context/Context';
import { createStore } from "redux";
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(allReducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AddToCartProvider>
        <AddCommasProvider>
          <App />
        </AddCommasProvider> 
      </AddToCartProvider>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
