import Vue from 'vue'
import App from './App.vue'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import firebase from 'firebase/app'
import router from './router'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFsv2G0_JYECTJAjNicXFWqG5ORu6RlH0",
  authDomain: "slack-archive-csc428.firebaseapp.com",
  projectId: "slack-archive-csc428",
  storageBucket: "slack-archive-csc428.appspot.com",
  messagingSenderId: "448593768234",
  appId: "1:448593768234:web:b86d728ab462731f593853",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
