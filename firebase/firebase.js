import firebase from 'firebase/app'

import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBeObuqpUsTd5RQ9z4-zskAKAhk3sTgcWw",
    authDomain: "loginrn-73629.firebaseapp.com",
    projectId: "loginrn-73629",
    storageBucket: "loginrn-73629.appspot.com",
    messagingSenderId: "64551644354",
    appId: "1:64551644354:web:7547c416c9d40df3e7df5b"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);