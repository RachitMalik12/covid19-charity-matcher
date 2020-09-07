import Vue from 'vue'
import AuthApp from './AuthApp.vue'
import router from './router'
// import routernonauth from './routernonauth'
import './plugins/element.js'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import store from './store'
// import UnAuthAppLanding from './views/UnAuthAppLanding.vue'

Vue.config.productionTip = false

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



firebase.auth().onAuthStateChanged(user => {

    store.dispatch("fetchUser", user); 
  

})
firebase
.auth()
.signInWithEmailAndPassword('rachitmalik1947@gmail.com', 'Tennisball1903!')
.then()
.catch(err => {
  this.error = err.message;
});

  new Vue({
    router,
    store, 
    render: h => h(AuthApp)
  }).$mount('#app')

  const db = firebase.firestore()
// const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const charitiesCollection = db.collection('charities')

export {
    db,
    usersCollection,
    charitiesCollection
  }


