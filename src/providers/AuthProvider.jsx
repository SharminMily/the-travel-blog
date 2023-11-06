import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth } from '../config/firebaseConfig';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    // const auth = getAuth();

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    // Google login      
    const googleProvider = new GoogleAuthProvider()
     // Google login
    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    } 


    // email set up
    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    const login = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    } 

       //  logout  
       const logout = () => {
        setIsLoading(true)
        return signOut(auth)        
     } 

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setIsLoading(false)
        })
        return () => {
            return subscribe();
        }
    },[])


    const info = {    
        googleLogin,   
        createUser,
        login,     
        user,
        isLoading,
        logout,

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;