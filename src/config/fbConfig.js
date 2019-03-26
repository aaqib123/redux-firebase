import firebase from 'firebase/app';
import 'firebase/firestore' 
import 'firebase/auth' 


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA0FW5a1hkTaVGb35CrTOIv1Dypaq_f3sc",
    authDomain: "redux-firebase-5e44c.firebaseapp.com",
    databaseURL: "https://redux-firebase-5e44c.firebaseio.com",
    projectId: "redux-firebase-5e44c",
    storageBucket: "redux-firebase-5e44c.appspot.com",
    messagingSenderId: "293139609605"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});


  export default firebase