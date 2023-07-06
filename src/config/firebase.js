import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB-QFk9vmF6Zd_nNUqLHbfj1LLzlC6NVaA',
  authDomain: 'simplemovie-2b952.firebaseapp.com',
  projectId: 'simplemovie-2b952',
  storageBucket: 'simplemovie-2b952.appspot.com',
  messagingSenderId: '1017384543684',
  appId: '1:1017384543684:web:1c407794359fd1aa023091',
  measurementId: 'G-15REQ6TR9Y'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
