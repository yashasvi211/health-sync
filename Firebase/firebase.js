import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDOcckDgNR3PETeXuxpQDjfjUi4-3qQnaQ",
    authDomain: "health-sync-cdc19.firebaseapp.com",
    projectId: "health-sync-cdc19",
    storageBucket: "health-sync-cdc19.appspot.com",
    messagingSenderId: "240815674969",
    appId: "1:240815674969:web:b0934364bfe137f6fc4348"
  };
  if(!firebase.apps.length)
  {
    firebase.initializeApp(firebaseConfig);
  }
 
export { firebase};
 