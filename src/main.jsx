
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import { CartProvider } from "./context/CartContext";

const firebaseConfig = {
  apiKey: "AIzaSyDE2uJaK7piFloPzj-Q8y_0zWh_y3QVMEI",
  authDomain: "moonsockslp.firebaseapp.com",
  projectId: "moonsockslp",
  storageBucket: "moonsockslp.firebasestorage.app",
  messagingSenderId: "1065767349927",
  appId: "1:1065767349927:web:5950590180993286103582"
};

initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>
)

