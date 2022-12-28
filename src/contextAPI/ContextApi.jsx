import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { app } from '../component/firebase/Firebase';
import { useState } from 'react';
const auth = getAuth(app);
export const SocialContext = createContext();
const googleProvider = new GoogleAuthProvider();
const ContextApi = ({children}) => {
// user data
const [userData, setUserData]=useState('');
// Dark theme setup
const [dark, setDark]=useState(false);
// console.log(dark);
const togleDarkLignt=()=>{
    setDark(!dark);
}
    // user registration firebase
    const createUserEmailPassword=(email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserData=(data)=>{
        return updateProfile(auth.currentUser, data);
     }
     const singnOut=()=>{
        return signOut(auth);
     }
    //  login user email and password
    const loginUserEmailAndPassword=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    //  user tracking
    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, user=>{
            setUserData(user);
    });

        return ()=>unsubscribe();
    },[])

    // sign in with popup google
    const googlePopupLogin=()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const provider = {
        createUserEmailPassword,
        updateUserData,
        singnOut,
        userData,
        loginUserEmailAndPassword,
        togleDarkLignt,
        dark,
        googlePopupLogin
    }
    
    return (
        <div>
            <SocialContext.Provider value={provider}>
                {children}
            </SocialContext.Provider>
        </div>
    );
};

export default ContextApi;