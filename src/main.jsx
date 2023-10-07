import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { ChakraProvider } from '@chakra-ui/react'
import { getFirestore } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsEm_6s3FQEHpNDTdh4OY-_x8e-jrw36w",
  authDomain: "comision-react-79ad9.firebaseapp.com",
  projectId: "comision-react-79ad9",
  storageBucket: "comision-react-79ad9.appspot.com",
  messagingSenderId: "603782476117",
  appId: "1:603782476117:web:65fce1161186bebc98bfdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
