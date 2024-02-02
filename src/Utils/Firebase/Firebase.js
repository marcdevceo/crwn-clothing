import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider 
} from 'firebase/auth';  
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'; 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxaPtAI6W2cOqlTCpBgmD-6JFHgkQ10ZM",
    authDomain: "crwn-clothing-db-c90b0.firebaseapp.com",
    projectId: "crwn-clothing-db-c90b0",
    storageBucket: "crwn-clothing-db-c90b0.appspot.com",
    messagingSenderId: "510660042834",
    appId: "1:510660042834:web:e46d5c870145478f1f7f8b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider(); 
  
  provider.setCustomParameters({
    prompt: 'select_account'
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 

export const db = getFirestore(); 

export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid); 

    const userSnapshot = await getDoc(userDocRef); 

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            }); 
        } catch (error) {
            console.log(`erro creating the user ${error.message}`); 
        }
    }
    return userDocRef; 
}