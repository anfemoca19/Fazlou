import firebase from 'firebase/app'
import 'firebase/firebase-database'
import 'firebase/firebase-auth'

firebase.initializeApp({
  apiKey: 'AIzaSyD4luIGNcLDz3FTd7gfYngahMG_fvuc-SA',
  authDomain: 'beta-proyecto-8a9b4.firebaseapp.com',
  databaseURL: 'https://beta-proyecto-8a9b4.firebaseio.com',
  projectId: 'beta-proyecto-8a9b4',
  storageBucket: '',
  messagingSenderId: '519645743301',
  appId: '1:519645743301:web:11b192191736f3a68108ac',
})

export const db = firebase.database()

export const auth = firebase.auth()
