import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyACQJweOPeWY5phijMwqQiJ5ZtDFYi8L_Q",
  authDomain: "genius-car-services-ae0a0.firebaseapp.com",
  projectId: "genius-car-services-ae0a0",
  storageBucket: "genius-car-services-ae0a0.appspot.com",
  messagingSenderId: "975771927814",
  appId: "1:975771927814:web:1328850d42705f7e20ca87"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;