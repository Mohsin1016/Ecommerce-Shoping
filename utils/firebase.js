
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyD4j75JUZGys8nEpktSRUodFhzEblZo86A",
  authDomain: "login-b6e02.firebaseapp.com",
  databaseURL: "https://login-b6e02-default-rtdb.firebaseio.com",
  projectId: "login-b6e02",
  storageBucket: "login-b6e02.appspot.com",
  messagingSenderId: "227014724104",
  appId: "1:227014724104:web:10f2b9b533b0911fdedfbd",
  measurementId: "G-LWQNRWVJG4"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;