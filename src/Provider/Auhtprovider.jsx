import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';
const auth = getAuth(app);
export const  authContext = createContext(null);

const googleProvider =  new GoogleAuthProvider()

const Auhtprovider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signWithGoogle =()=>{
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    }

    const signIn =(email, password)=>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut =()=>{
      setLoading(true);
      return signOut(auth);

    }

    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, cuurentUser=>{
        console.log('user in the ath state changeed', cuurentUser);
        setUser(cuurentUser);
        setLoading(false);
      });
      return()=>{
        unSubscribe();
      }
    }, [])

    const userInfo = {user, createUser, logOut, signIn, loading, signWithGoogle};
  return (
    <authContext.Provider value={userInfo}>
      {children}
    </authContext.Provider>
  )
}

export default Auhtprovider
