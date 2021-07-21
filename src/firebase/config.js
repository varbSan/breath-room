import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCJqJiqPZrnNJA4WgUPrzCinYvG15qvPqI",
  authDomain: "vite-chatroom.firebaseapp.com",
  projectId: "vite-chatroom",
  storageBucket: "vite-chatroom.appspot.com",
  messagingSenderId: "728697597336",
  appId: "1:728697597336:web:56c75eea480fd172508fed",
  measurementId: "G-W4XNDVHLD0"
};

//init firebase
firebase.initializeApp(config)

const auth = firebase.auth()
const db = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { db, auth, timestamp }
