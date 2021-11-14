import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  docData,
  DocumentData,
  Firestore,
  UpdateData,
  updateDoc,
  addDoc,
} from '@angular/fire/firestore';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';
import { RouterService } from '../core/router.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userId?: string;
  email?: string;

  constructor(
    private auth: AuthService,
    private router: RouterService,
    private firestore: Firestore
  ) {}

  public get authUser$() {
    return this.auth.user$.pipe(
      tap((user) => {
        this.userId = user?.uid;
        this.email = user?.email ?? undefined;
      })
    );
  }

  async loginWithFacebook() {
    try {
      await this.auth.signInWithFacebook();
      this.router.home();
      return true;
    } catch (err) {
      alert(err);
      return false;
    }
  }

  async loginWithGoogle() {
    try {
      await this.auth.signInWithGoogle();
      this.router.home();
      return true;
    } catch (err) {
      alert(err);
      return false;
    }
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    try {
      console.log(await this.auth.signInWithEmailAndPassowrd(email, password));
      this.router.home();
      return true;
    } catch (err) {
      alert(err);
      return false;
    }
  }

  async sendForgotPassword(email: string) {
    try {
      await this.auth.sendForgotPassword(email);
      alert('The link will be sent to you in the next few minutes');
      this.router.login();
      return true;
    } catch (err) {
      alert(err);
      return false;
    }
  }

  async signOut() {
    try {
      await this.auth.signOut();
      this.router.signin();
      return true;
    } catch (err) {
      alert(err);
      return false;
    }
  }

  getUsers() {
    const ref = collection(this.firestore, '/fum/entities/users');
    return collectionData(ref).pipe(
      map((snap: DocumentData) => (!snap ? [] : (snap as any)))
    );
  }

  getUser(userId: string) {
    console.log(userId);
    const ref = doc(this.firestore, `/fum/entities/users/${userId}`);
    return docData(ref).pipe(map((snap: DocumentData) => snap as any));
  }

  async updateUser(user: any) {
    console.log(user)
    try {
      const ref = doc(this.firestore, `/fum/entities/users/${user.id}`);
      await updateDoc(ref, user);
      return true;
    } catch (error) {
      alert(error);
      return false;
    }
  }

  async addUser(user: any) {
    console.log(user)
    try {
      const ref = collection(this.firestore, `/fum/entities/users`);
      await addDoc(ref, user);
      return true;
    } catch (error) {
      alert(error);
      return false;
    }
  }
}
