import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './store/cart-context';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBL15fEbk5E6N3uM8VPe60Fj22ALTOEWn0",
  authDomain: "palombo-react.firebaseapp.com",
  projectId: "palombo-react",
  storageBucket: "palombo-react.appspot.com",
  messagingSenderId: "700337082915",
  appId: "1:700337082915:web:e080d84b8e60c98b8f5796",
  measurementId: "G-VJ9KF9Y0CG"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
