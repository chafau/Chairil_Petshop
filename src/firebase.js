import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDRQJidr70STuNkCQSj41Gisv_g1y7JZCk",
    authDomain: "pesanskuys.firebaseapp.com",
    databaseURL: "https://pesanskuys-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pesanskuys",
    storageBucket: "pesanskuys.appspot.com",
    messagingSenderId: "382418976615"
  };
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}