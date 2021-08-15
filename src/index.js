import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


// MUI
import '@fontsource/roboto';

// Firebase
import firebase from "firebase/app";

const firebaseConfig = {
  // Add your firebase config here
};

if(!firebase.apps[0]) {
  firebase.initializeApp(firebaseConfig);
}




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
