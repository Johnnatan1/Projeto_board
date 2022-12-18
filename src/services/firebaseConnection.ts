import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBoriY5H9EB1zBriTsK6wFXs2w-Gusftz8",
    authDomain: "boardapp-4fc01.firebaseapp.com",
    projectId: "boardapp-4fc01",
    storageBucket: "boardapp-4fc01.appspot.com",
    messagingSenderId: "303344495711",
    appId: "1:303344495711:web:48a6eed3322ba864ba7fea",
    measurementId: "G-PLK7KD3WGT"
  };
  
  // Initialize Firebase
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

}

export default firebase