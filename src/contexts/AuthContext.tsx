/** @format */

import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = React.createContext<any>(null);

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }: any) {
  const [user, setUser] = useState<any>(null);

  function signup(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      interests: [],
      skills: [],
    });
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function googleSignIn() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
  }


  function update(displayName: string){
    return updateProfile(user, {
        displayName: displayName,
      }) 
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, [user]);

  const value = {
    user,
    signup,
    login,
    update,
    googleSignIn,
    resetPassword,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
