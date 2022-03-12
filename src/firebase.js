import firebase from 'firebase/app';
import 'firebase/firestore';



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDzdv0jBz8xez8d901bVayR7-K85alQOgo",
        authDomain: "messenger-clone-7616c.firebaseapp.com",
        databaseURL: "https://messenger-clone-7616c-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "messenger-clone-7616c",
        storageBucket: "messenger-clone-7616c.appspot.com",
        messagingSenderId: "833305212262",
        appId: "1:833305212262:web:bcab145a7e250813a144a7"
      
});

const db = firebaseApp.firestore()

export default db;