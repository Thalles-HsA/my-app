import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';

import Home from "./Pages/Home";

import "./styles/estilosGlobais.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store} >
      <Home />
    </Provider >
  </React.StrictMode>
);

