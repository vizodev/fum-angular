import { Injectable } from '@angular/core';

import {
  Auth,
  signOut,
  signInWithPopup,
  user,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  idToken,
  signInWithCustomToken,
  FacebookAuthProvider,
  EmailAuthProvider,
  AuthProvider,
  GoogleAuthProvider,
  
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  public get user$() {
    return user(this.auth);
  }

  public get token$() {
    return idToken;
  }


  signInWithEmailAndPassowrd(email: string, passowrd: string) {
    return signInWithEmailAndPassword(this.auth, email, passowrd);
  }

  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return this.signInWithPopUp(provider);
  }

  signInWithFacebook() {
    const provider = new FacebookAuthProvider();
    return this.signInWithPopUp(provider);
  }

  private signInWithPopUp(provider: AuthProvider) {
    return signInWithPopup(this.auth, provider);
  }

  sendForgotPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }

  signOut() {
    return signOut(this.auth);
  }

}
