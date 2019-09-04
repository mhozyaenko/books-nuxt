import firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyAOfMwJQq4KDLLFbpWLnnLcc4oiwGsPg70",
  authDomain: "books-a9bf1.firebaseapp.com",
  databaseURL: "https://books-a9bf1.firebaseio.com",
  projectId: "books-a9bf1",
  storageBucket: "",
  messagingSenderId: "922364569694",
  appId: "1:922364569694:web:dd0865c92ed677aa"
};

export const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const eventRef = firebaseApp.database().ref().child('events');
