import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyC2YVbAB-Tpkandq2vQ0Q8xUxElWwxyEh0",
    authDomain: "meuapp-de430.firebaseapp.com",
    databaseURL: "https://meuapp-de430.firebaseio.com",
    projectId: "meuapp-de430",
    storageBucket: "meuapp-de430.appspot.com",
    messagingSenderId: "177571599848",
    appId: "1:177571599848:web:6df93942e9746b644a805d",
    measurementId: "G-DCEQ04KTE6"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;