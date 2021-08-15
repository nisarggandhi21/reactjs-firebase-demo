import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


// MUI
import '@fontsource/roboto';

// Firebase
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACvpM-kn4LPPP718IXqy_FVi2g7lrThqs",
  authDomain: "fir-demo-yt-363e8.firebaseapp.com",
  projectId: "fir-demo-yt-363e8",
  storageBucket: "fir-demo-yt-363e8.appspot.com",
  messagingSenderId: "898675197194",
  appId: "1:898675197194:web:6c50ddb2d3e888d21926f3",
  measurementId: "G-JMZF1MRX1Z"
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
