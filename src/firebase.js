import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//   // Initialize Firebase
var config = {
  apiKey: "AIzaSyBhFDIuS_3BF5xMxC3L0NHlvua6ucrJKmE",
  authDomain: "petshop-firebase.firebaseapp.com",
  projectId: "petshop-firebase",
  storageBucket: "petshop-firebase.appspot.com",
  messagingSenderId: "263928153430",
  appId: "1:263928153430:web:2316da890027adf14f02f7",
  measurementId: "G-WXD9MGMFMB"
};

const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {
  fb,
  db
}