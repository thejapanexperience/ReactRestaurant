import React from 'react'
import PropTypes from 'prop-types'
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';

// Configure Firebase.
const config = {
  apiKey: "AIzaSyB57Xs4RzFZLlA6nvR7a0xMo-Zc6WncDFw",
  authDomain: "restaurantapp-e62a3.firebaseapp.com",
  databaseURL: "https://restaurantapp-e62a3.firebaseio.com",
  projectId: "restaurantapp-e62a3",
  storageBucket: "restaurantapp-e62a3.appspot.com",
  messagingSenderId: "607640774853"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

export default class ResLogin extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return(
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    )
  }
}

ResLogin.propTypes = {};
