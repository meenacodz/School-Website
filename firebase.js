// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
getDatabase, 
ref, 
push, 
onValue, 
remove 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJzx7dYpZKMDJ7ZmSiADu7DsL-fPhi8I0",
    authDomain: "school-notice-e435a.firebaseapp.com",
    databaseURL: "https://school-notice-e435a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "school-notice-e435a",
    storageBucket: "school-notice-e435a.firebasestorage.app",
    messagingSenderId: "543501040876",
    appId: "1:543501040876:web:fb369ad2199cddebba39c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database
const db = getDatabase(app);

// Export functions
export { db, ref, push, onValue, remove };