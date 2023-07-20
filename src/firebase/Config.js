import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqadU49zXCpjVqko-GBWI1O9LaicYTU8A",
    authDomain: "fir-91666.firebaseapp.com",
    projectId: "fir-91666",
    storageBucket: "fir-91666.appspot.com",
    messagingSenderId: "371819420754",
    appId: "1:371819420754:web:9fe6af55b5c4deb705d38b",
    measurementId: "G-6E4V6CZLDY"
  };
  const  Firebase = firebase.initializeApp(firebaseConfig);
  export {Firebase};