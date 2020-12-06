import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';

ReactDOM.render(
  <React.StrictMode>
    <Example1 />
    <hr></hr>
    <Example2 />
    <hr></hr>
    <Example3 />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
