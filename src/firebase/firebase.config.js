// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTG9kLBPBrPUaDdY3YaykXHy-831P_GQU",
  authDomain: "mobile-resell-shope.firebaseapp.com",
  projectId: "mobile-resell-shope",
  storageBucket: "mobile-resell-shope.appspot.com",
  messagingSenderId: "1089826276490",
  appId: "1:1089826276490:web:0e80ef78734563cc8f9973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;