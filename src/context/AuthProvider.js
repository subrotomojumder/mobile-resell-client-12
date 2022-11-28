import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app);
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInFunc = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            console.log(currentUser)
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInFunc,
        updateUser,
        logOut,
        googleLogin,
    }
    return <AuthContext.Provider value={authInfo} >{children}</AuthContext.Provider>;
};

export default AuthProvider;