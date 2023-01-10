import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBeZOX6ocd1DGK-ySvarvIQxvfLqA1E5Rw",
    authDomain: "instagram-clone-react-cab44.firebaseapp.com",
    projectId: "instagram-clone-react-cab44",
    storageBucket: "instagram-clone-react-cab44.appspot.com",
    messagingSenderId: "679168453672",
    appId: "1:679168453672:web:94f5160d63f04e2a5e191d",
    measurementId: "G-F1P12R0VDT"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {db,auth,storage};