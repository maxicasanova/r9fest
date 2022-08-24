import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyCSTx4H4LgZjQCvrph8Er9P5OmMyNWN8xE",
  authDomain: "r9producciones17s.firebaseapp.com",
  projectId: "r9producciones17s",
  storageBucket: "r9producciones17s.appspot.com",
  messagingSenderId: "237076865232",
  appId: "1:237076865232:web:5be7eb3d40e741b75dbed5"
};

const app = initializeApp(firebaseConfig);

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
