import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBuZnnOAI1u7L-ZNn0crkqvKOm_vYvzt8k",
  authDomain: "pujabhandar-1.firebaseapp.com",
  projectId: "pujabhandar-1",
  storageBucket: "pujabhandar-1.appspot.com",
  messagingSenderId: "348854732461",
  appId: "1:348854732461:web:cf30db42fb321411332824",
  measurementId: "G-ZXCRD3QK8K",
};

const app = initializeApp(firebaseConfig);
export default app;
