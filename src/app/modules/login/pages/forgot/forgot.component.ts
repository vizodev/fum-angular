import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/core/router.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  constructor(private router: RouterService) {}

  ngOnInit(): void {}
  
  signin() {
    this.router.signin();
  }
}
