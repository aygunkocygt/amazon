import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBvDdGOrCs_Bon1BXkhRqPiAWA6FctRCp4",
    authDomain: "challenge-190ec.firebaseapp.com",
    databaseURL: "https://challenge-190ec.firebaseio.com",
    projectId: "challenge-190ec",
    storageBucket: "challenge-190ec.appspot.com",
    messagingSenderId: "757660252322",
    appId: "1:757660252322:web:68e8ac2f00113e9ff23ffb",
    measurementId: "G-R74T34ZT9H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };