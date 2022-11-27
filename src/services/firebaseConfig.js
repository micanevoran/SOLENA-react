import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD90BFZpaVqLpRql0BYm86FkvAlEiDk0io",
  authDomain: "solena-react.firebaseapp.com",
  projectId: "solena-react",
  storageBucket: "solena-react.appspot.com",
  messagingSenderId: "1080155979429",
  appId: "1:1080155979429:web:3f1378c2ec81f2d443974c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const collectionProd = collection(db, "products") 