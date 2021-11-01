import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../../../core/router.service';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(private router: RouterService, private user: UserService) {}

  ngOnInit(): void {}

  email() {
    this.router.signin();
  }

  facebook() {
    return this.user.loginWithFacebook();
  }

  google() {
    return this.user.loginWithGoogle();
  }

  login() {
    this.router.signin();
  }
}
