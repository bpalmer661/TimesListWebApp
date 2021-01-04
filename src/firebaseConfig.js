

import firebase from 'firebase/app'
import 'firebase/firestore'


  const firebaseConfig = {
    apiKey: "AIzaSyAuKOVz0RGhLG2XK_N54Z4V0nDZZ4IaNKI",
    authDomain: "justtimeit-3ef12.firebaseapp.com",
    projectId: "justtimeit-3ef12",
    storageBucket: "justtimeit-3ef12.appspot.com",
    messagingSenderId: "129852691511",
    appId: "1:129852691511:web:f810c0aa8340cd4b939bb2",
    measurementId: "G-E5RV28ST9W"
  };




  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase 