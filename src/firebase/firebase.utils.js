import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyASCY3gd_IOj5TeX9F_Z69rMUYTgWkAAWE",
    authDomain: "crownshop-b204e.firebaseapp.com",
    databaseURL: "https://crownshop-b204e.firebaseio.com",
    projectId: "crownshop-b204e",
    storageBucket: "crownshop-b204e.appspot.com",
    messagingSenderId: "396041836592",
    appId: "1:396041836592:web:b11447531e2b6c3a"
};


firebase.initializeApp(config);


// export const createUserProfileDockument = async (userAuth, additionalData) => {
//     if (!userAuth) return;

// }


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
