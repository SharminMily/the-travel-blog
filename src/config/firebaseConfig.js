
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBx7l4H8I48V-a7XZn02mLLp8v1UGr_1mY",
  authDomain: "travel-blog-fd253.firebaseapp.com",
  projectId: "travel-blog-fd253",
  storageBucket: "travel-blog-fd253.appspot.com",
  messagingSenderId: "718994086824",
  appId: "1:718994086824:web:f0de08a5487a4ca781db9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);