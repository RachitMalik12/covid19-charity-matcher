import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAMiYJkHh-iNboC0jwtJvAC1P-N5vGAShM",
    authDomain: "covidcharitymatcher.firebaseapp.com",
    databaseURL: "https://covidcharitymatcher.firebaseio.com",
    projectId: "covidcharitymatcher",
    storageBucket: "covidcharitymatcher.appspot.com",
    messagingSenderId: "63403634686",
    appId: "1:63403634686:web:c991d24fd4562a08ce9aaf",
    measurementId: "G-N5LJR30GLM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const charitiesCollection = db.collection('charities')

export {
    db,
    auth,
    usersCollection,
    charitiesCollection
  }