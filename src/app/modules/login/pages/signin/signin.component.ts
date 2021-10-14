import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/core/router.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(private router: RouterService) {}

  ngOnInit(): void {}

  forgot() {
    this.router.forgotPassword();
  }

  signup() {
    this.router.signup();
  }
  
}
