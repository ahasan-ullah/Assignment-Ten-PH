import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();
export const AuthContext=createContext(null);


const AuthProvider=({children})=>{
  const [loading,setLoading]=useState(true);
  const [user,setUser]=useState(null);

  const loginUser=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const googleSignIn=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
  }

  const registerUser=(email,pass)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,pass);
  }

  const updateUser=(updatedData)=>{
    setLoading(true);
    return updateProfile(auth.currentUser,updatedData)
  }

  const logout=()=>{
    setLoading(true);
    swal({
      text: "Logout Successful",
      icon: "success",
    });
    return signOut(auth);
  }

  const authInfo={
    loginUser,
    googleSignIn,
    registerUser,
    loading,
    updateUser,
    user,
    setUser,
    logout,
  }

  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(false);
    })
    return()=>{
      unSubscribe();
    }
  },[])
  return(
    <AuthContext.Provider value={authInfo}>
      {
        children
      }
    </AuthContext.Provider>
  );
}
export default AuthProvider;