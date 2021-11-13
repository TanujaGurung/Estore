import firebase from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBHo0pY6U0vN1zpxwSNRGrRtSGk3Y8t97E",
    authDomain: "estore-293309.firebaseapp.com",
    projectId: "estore-293309",
    storageBucket: "estore-293309.appspot.com",
    messagingSenderId: "953896395424",
    appId: "1:953896395424:web:62baf16c2b69d21a2e9fc5",
    measurementId: "G-MH2LVVD4KW"
  };
  const fire= firebase.initializeApp(firebaseConfig);

  export default fire;