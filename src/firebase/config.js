import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAnUzVLd9_ocUDPurUS2XESqcyo7JOQdkc",
  authDomain: "breath-room.firebaseapp.com",
  projectId: "breath-room",
  storageBucket: "breath-room.appspot.com",
  messagingSenderId: "835837033582",
  appId: "1:835837033582:web:413ffcc09a1178171dba7f",
  measurementId: "G-6VKM5DEJQN"
};

//init firebase
firebase.initializeApp(config)

const auth = firebase.auth()
const db = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { db, auth, timestamp }
