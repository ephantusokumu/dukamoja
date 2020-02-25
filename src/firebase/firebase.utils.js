import firebase from 'firebase/app'

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDKPMQBrsrrd88botCMjYJtyautbomzEKw",
    authDomain: "dukamoja-db.firebaseapp.com",
    databaseURL: "https://dukamoja-db.firebaseio.com",
    projectId: "dukamoja-db",
    storageBucket: "dukamoja-db.appspot.com",
    messagingSenderId: "1094078850039",
    appId: "1:1094078850039:web:a0ed0c1648f0a2b38204f2",
    measurementId: "G-J8LQ3H7QJS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google Firebase AUTH

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
