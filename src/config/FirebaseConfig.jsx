
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBSYpq36KIdRIQqToeiGubU02w5zd7GBQs",
  authDomain: "e-commerce-app-ac8f1.firebaseapp.com",
  projectId: "e-commerce-app-ac8f1",
  storageBucket: "e-commerce-app-ac8f1.appspot.com",
  messagingSenderId: "953543575641",
  appId: "1:953543575641:web:e2041a5de547eab8390948",
  measurementId: "G-ST97Y8T8WQ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
