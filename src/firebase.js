import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const app = initializeApp({

    apiKey: "AIzaSyDl8ZV6OERpe9-NNW-j1Dtsf0xMC6gJ32c",
    authDomain: "quizli-74972.firebaseapp.com",
    projectId: "quizli-74972",
    storageBucket: "quizli-74972.appspot.com",
    messagingSenderId: "224537440783",
    appId: "1:224537440783:web:b0be7cb49bd252883e297a"

})

export const auth = getAuth(app)
export default app
