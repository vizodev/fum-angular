import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';
import { RouterService } from '../core/router.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userId?: string;
  email?: string;

  constructor(private auth: AuthService, private router: RouterService) {}

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
}
