import React, { Component } from 'react'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAR-fWrUg_hGJ5O6ZNniiy1YxnwJ4ylRAs",
  authDomain: "workshop-react-5b39b.firebaseapp.com",
  databaseURL: "https://workshop-react-5b39b.firebaseio.com",
  projectId: "workshop-react-5b39b",
  storageBucket: "workshop-react-5b39b.appspot.com",
  messagingSenderId: "348863848626",
}
const fire = firebase.initializeApp(config)

const login = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('user_birthday');
  firebase.auth().signInWithPopup(provider).then(function (result) {
    var token = result.credential.accessToken
    var user = result.user
  });
}

const LoginButton = () => <button className="bt-social" onClick={() => login()}>Login with Facebook</button>

export default LoginButton