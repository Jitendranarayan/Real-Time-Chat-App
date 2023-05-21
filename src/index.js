import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlx-27iKbphz1rEcoVA4UQL2JJov03EH4",
  authDomain: "real-time-chat-app-ad99d.firebaseapp.com",
  projectId: "real-time-chat-app-ad99d",
  storageBucket: "real-time-chat-app-ad99d.appspot.com",
  messagingSenderId: "739005770581",
  appId: "1:739005770581:web:c9f2ff8186452c4b375ddc"
};

// Initialize Firebase
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
