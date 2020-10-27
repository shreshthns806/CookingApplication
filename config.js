import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyA3m2xMRU3wN-hezQRgGePWH8xwum3Budw",
    authDomain: "cookingapplication-4c99c.firebaseapp.com",
    databaseURL: "https://cookingapplication-4c99c.firebaseio.com",
    projectId: "cookingapplication-4c99c",
    storageBucket: "cookingapplication-4c99c.appspot.com",
    messagingSenderId: "293580992088",
    appId: "1:293580992088:web:357a63edf9a5b50f18642d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();