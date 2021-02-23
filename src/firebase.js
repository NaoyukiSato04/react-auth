import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBghQ1sEJE64I6cux3FQIPvMpwwucP9uD0",
  authDomain: "react-auth-7ce9a.firebaseapp.com",
  databaseURL: "https://react-auth-7ce9a-default-rtdb.firebaseio.com",
  projectId: "react-auth-7ce9a",
  storageBucket: "react-auth-7ce9a.appspot.com",
  messagingSenderId: "74195637112",
  appId: "1:74195637112:web:57e9fb5cbcb07ac1e32e8d"
})

export const auth = app.auth()
export default app
