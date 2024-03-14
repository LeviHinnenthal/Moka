import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Agrega esta importación
import 'firebase/storage';  

const firebaseConfig = {
    apiKey: "AIzaSyD_GNIn_DsPLhSRMGr4-fLHT_rHXgnoozI",
    authDomain: "moka-ea3df.firebaseapp.com",
    projectId: "moka-ea3df",
    storageBucket: "moka-ea3df.appspot.com",
    messagingSenderId: "354465261698",
    appId: "1:354465261698:web:acf16497af04a7a8bbec9b",
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // Añade la exportación de storage
export default app;
