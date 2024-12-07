// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCjk3_pK9vSWocmaYR4Hr26k756YhIpC0",
  authDomain: "picursion.firebaseapp.com",
  projectId: "picursion",
  storageBucket: "picursion.appspot.com",
  messagingSenderId: "659189188138",
  appId: "1:659189185128:web:e5a4da433290772804d9dd",
  measurementId: "G-TWER7AS83S",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
