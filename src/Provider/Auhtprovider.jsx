import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase.config';
const auth = getAuth(app);
export const  authContext = createContext(null);

const Auhtprovider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn =(email, password)=>{
      return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut =()=>{
      return signOut(auth);

    }

    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, cuurentUser=>{
        console.log('user in the ath state changeed', cuurentUser);
        setUser(cuurentUser);
      });
      return()=>{
        unSubscribe();
      }
    }, [])

    const userInfo = {user, createUser, logOut, signIn};
  return (
    <authContext.Provider value={userInfo}>
      {children}
    </authContext.Provider>
  )
}

export default Auhtprovider
