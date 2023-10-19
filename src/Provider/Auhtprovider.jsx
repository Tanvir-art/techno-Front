import React, { createContext, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
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
    const userInfo = {user, createUser};
  return (
    <authContext.Provider value={userInfo}>
      {children}
    </authContext.Provider>
  )
}

export default Auhtprovider
