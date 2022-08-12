import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './components/About';
import Tvir from './components/Tvir';
import reportWebVitals from './reportWebVitals';
import { cards } from './data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <About data={cards}/>
    <Tvir data={cards}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
