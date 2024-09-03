import {
  signInWithEmailAndPassword,
  signOut,
  type UserCredential,
} from "firebase/auth";
import { AuthRepository } from "@/domain/repository/auth/auth.repository";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "@/config/firebaseConfig";

export class AuthModel implements AuthRepository {
  //patron repository
  signInEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential> {
    console.log("signInEmailAndPassword");

    return signInWithEmailAndPassword(auth, email, password);
  }

  registerUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential> {
    console.log("register user with email and password");

    return createUserWithEmailAndPassword(auth, email, password);
  }

  //cerrar sesion
  logout(): Promise<void> {
    console.log("logout");

    return signOut(auth);
  }

  //sesion google
  signInWhithGoogle(): Promise<UserCredential> {
    console.log("signInWhithGoogle");

    return signInWithPopup(auth, googleProvider);
  }
}
