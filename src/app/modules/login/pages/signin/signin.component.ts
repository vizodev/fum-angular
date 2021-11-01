import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/core/router.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  errorMessage?: string;

  constructor(private router: RouterService, private user: UserService) {}

  ngOnInit(): void {}
  login(ev: any) {
    ev.preventDefault();
    const {
      0: { value: email },
      1: { value: password },
    } = ev.target.form;

    if (!this.validateInputs(email, password)) return;

    return this.user.loginWithEmailAndPassword(email, password);
  }

  validateInputs(e: string, p: string) {
    this.errorMessage = undefined;

    if (
      e.length === 0 ||
      !e.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g)
    ) {
      this.errorMessage = 'Please provide a valid email address';
    }

    if (p.length < 6) {
      this.errorMessage = 'Your passcode should have at least 6 characters';
    }

    return !this.errorMessage;
  }

  forgotPassword() {
    this.router.forgotPassword();
  }

  forgot() {
    this.router.forgotPassword();
  }

  signin() {
    this.user.loginWithEmailAndPassword;
  }
}
