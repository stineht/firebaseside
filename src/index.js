import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'



const firebaseConfig = {
    apiKey: "AIzaSyDbbpjYFcpbxI9ydghSzjkvVDJS1nvd9G0",
    authDomain: "mittprosjekt-6982f.firebaseapp.com",
    projectId: "mittprosjekt-6982f",
    storageBucket: "mittprosjekt-6982f.appspot.com",
    messagingSenderId: "243539719234",
    appId: "1:243539719234:web:0afcd6df1f1752981ae9db",
    measurementId: "G-FY9F50JT3H"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

