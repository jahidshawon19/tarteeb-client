import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext()
const auth = getAuth(app)


const userContext = ({children}) => {

    const [user, setUser] = useState({displayName:'jahid'})
   
    const registerUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })

        return()=>{
            unsubscribe()
        }
    },[])
    const authInfo={
        user, 
        registerUser,
        loginUser,
        logOut,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default userContext;