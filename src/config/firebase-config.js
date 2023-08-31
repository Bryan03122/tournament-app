import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAS5X4eCEH3ndjvdQa3c1xOTJqw5gJLlXI",
  authDomain: "tournament-e659a.firebaseapp.com",
  projectId: "tournament-e659a",
  storageBucket: "tournament-e659a.appspot.com",
  messagingSenderId: "49795207707",
  appId: "1:49795207707:web:076e11f3c6b4d370585ebe",
  measurementId: "G-L3NHHVHYM6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
