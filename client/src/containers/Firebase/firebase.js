import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASURMENT_ID
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyAtmA2awEIqETz1iWIOS_Q43CKxUJ2PuFA",
//   authDomain: "multi-charities-995e0.firebaseapp.com",
//   databaseURL: "https://multi-charities-995e0.firebaseio.com",
//   projectId: "multi-charities-995e0",
//   storageBucket: "multi-charities-995e0.appspot.com",
//   messagingSenderId: "623309833957",
//   appId: "1:623309833957:web:2786c4a8239f090689360c",
//   measurementId: "G-VQVMZRPGR5"
  
// };

const firebaseConfig = {
  apiKey: "AIzaSyDvw3zdZh6Mj1O4SaipWtuFSFIF8kR3K0Y",
  authDomain: "charitybutton-b642d.firebaseapp.com",
  databaseURL: "https://charitybutton-b642d.firebaseio.com",
  projectId: "charitybutton-b642d",
  storageBucket: "charitybutton-b642d.appspot.com",
  messagingSenderId: "485611349817",
  appId: "1:485611349817:web:175aa1020086afcfe4aae8",
  measurementId: "G-X25D0DFBP6"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }
}

export default Firebase;
