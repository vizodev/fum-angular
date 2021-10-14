import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/core/router.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  error: string = '';

  constructor(private router: RouterService) {}

  ngOnInit(): void {}
  
  signin() {
    this.router.signin();
  }
}
