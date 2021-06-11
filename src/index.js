import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {TemaProvedor} from './contexts/TemaProvedor'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TemaProvedor>
        <App />
      </TemaProvedor>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

