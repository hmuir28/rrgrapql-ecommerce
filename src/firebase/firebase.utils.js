import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCCPAI0QUfSZTDZIAnCKlkpyE5Haej7JZo",
  authDomain: "rrgrapqle-db.firebaseapp.com",
  databaseURL: "https://rrgrapqle-db.firebaseio.com",
  projectId: "rrgrapqle-db",
  storageBucket: "rrgrapqle-db.appspot.com",
  messagingSenderId: "1011156879197",
  appId: "1:1011156879197:web:2f734de143351d69"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
 });
export const siginInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
