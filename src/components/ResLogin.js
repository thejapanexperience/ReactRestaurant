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

export default class ResLogin extends React.Component {

  state = {
    signedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    // Sets the `signedIn` state property to `true` once signed in.
    callbacks: {
      signInSuccess: () => {
        this.setState({signedIn: true});
        return false; // Avoid redirects after sign-in.
      }
    }
  };

  render() {
    if (!this.state.signedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div>
        <h1>My App</h1>
        <p>Welcome! You are now signed-in!</p>
      </div>
    );
  }
}

ResLogin.propTypes = {};
