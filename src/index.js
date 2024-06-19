import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Components/Menu/styleMenu.css'
import './Components/GeneralInfo/generalInfo.css'
import './Components/Stack/stack.css'
import './Components/Portfolio/portfolio.css'
import './Components/Contact/contacts.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
