import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

const app= firebase.initializeApp(


    {

 apiKey:process.env.REACT_APP_FIREBASE_API_KEY, //"AIzaSyBHu9e5cuW4YGDhOseC5-8GAnRLvx_r2IM",
  authDomain:process.env.REACT_APP_AUTH_DOMAIN, //"miles-auth-37380.firebaseapp.com",
  projectId:process.env.REACT_APP_PROJECTID,// "miles-auth-37380",
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,// "miles-auth-37380.appspot.com",
  messagingSenderId:process.env.REACT_APP_MSGID,// "639435829172",
  appId:process.env.REACT_APP_APPID// "1:639435829172:web:f2350d86723986f2858ce1"
    
    }
)
export const auth=app.auth()

export default app;
