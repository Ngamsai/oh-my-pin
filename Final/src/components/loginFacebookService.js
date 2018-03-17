import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAR-fWrUg_hGJ5O6ZNniiy1YxnwJ4ylRAs",
  authDomain: "workshop-react-5b39b.firebaseapp.com",
  databaseURL: "https://workshop-react-5b39b.firebaseio.com",
  projectId: "workshop-react-5b39b",
  storageBucket: "workshop-react-5b39b.appspot.com",
  messagingSenderId: "348863848626",
}
firebase.initializeApp(config)

const loginFacebookService = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('user_birthday');
  return firebase.auth().signInWithPopup(provider)
}


export default loginFacebookService